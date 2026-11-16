"""FastAPI entrypoint isolating public investor endpoints from protected /admin & /api/lariustts."""

from __future__ import annotations

from fastapi import Depends, FastAPI, HTTPException, Response
from fastapi.middleware.cors import CORSMiddleware

from .auth import SESSION_COOKIE_NAME, issue_admin_token, require_admin, verify_private_key
from .config import RUNTIME, record_log
from .engine import (
    ASSETS_CATALOG,
    BROKERS_CATALOG,
    compute_smart_allocation,
    get_macro_snapshot,
    simulate_compound_wealth,
)
from .models import (
    AdminLoginRequest,
    AdminSessionResponse,
    AdvisorPublicResponse,
    AdvisorQuery,
    AllocationRequest,
    AllocationResponse,
    Asset,
    Broker,
    CompoundSimulationRequest,
    CompoundSimulationResponse,
    ExperienceLevel,
    FinancialParamsUpdateRequest,
    RiskProfile,
    TtsRequest,
    VoiceConfigAdminView,
    VoiceConfigUpdateRequest,
)
from .prompt_engineering import answer_public_advisor_query, build_prompt_layers_for_admin
from .tts_service import synthesize_larius_speech

app = FastAPI(
    title="D.investimentos API",
    version="2.0.0",
    description="API com isolamento entre interface pública (/), rota interna de voz (/api/lariustts) e Modo Arquiteto (/admin).",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def _mask_secret(value: str) -> str:
    if not value:
        return "Não configurada"
    if len(value) <= 6:
        return "••••••"
    return f"{value[:4]}••••{value[-3:]}"


# ==================== PUBLIC INVESTOR ENDPOINTS (/) ====================


@app.get("/api/health")
def health_check() -> dict[str, str]:
    return {"status": "online", "service": "D.investimentos", "advisor": "Larius"}


@app.get("/api/market/telemetry")
def public_macro_telemetry() -> dict:
    return get_macro_snapshot()


@app.get("/api/assets", response_model=list[Asset])
def list_assets(group: str | None = None) -> list[Asset]:
    if not group or group == "ALL":
        return ASSETS_CATALOG
    return [a for a in ASSETS_CATALOG if a.group == group or a.type == group]


@app.get("/api/brokers", response_model=list[Broker])
def list_brokers(zero_only: bool = False) -> list[Broker]:
    return [b for b in BROKERS_CATALOG if not zero_only or b.zero_fee]


@app.post("/api/allocate", response_model=AllocationResponse)
def allocate_contribution(req: AllocationRequest) -> AllocationResponse:
    return compute_smart_allocation(req)


@app.post("/api/simulate/compound", response_model=CompoundSimulationResponse)
def simulate_compound(req: CompoundSimulationRequest) -> CompoundSimulationResponse:
    return simulate_compound_wealth(req)


@app.post("/api/advisor/ask", response_model=AdvisorPublicResponse)
def ask_advisor(query: AdvisorQuery) -> AdvisorPublicResponse:
    return answer_public_advisor_query(query)


@app.post("/api/lariustts")
def larius_tts(req: TtsRequest) -> Response:
    """
    Isolated server-side TTS endpoint:
    Receives ONLY text from the public UI and returns synthesized audio bytes.
    Voice Clone ID and API keys never leave the backend.
    """
    audio_bytes, media_type = synthesize_larius_speech(req.text)
    return Response(content=audio_bytes, media_type=media_type)


# ==================== ARCHITECT / ADMIN AUTH & PROTECTED ROUTES (/admin) ====================


@app.post("/api/admin/login", response_model=AdminSessionResponse)
def admin_login(req: AdminLoginRequest, response: Response) -> AdminSessionResponse:
    if not RUNTIME.admin_private_key:
        record_log("AUTH", "ERROR", "LARIUS_ADMIN_PRIVATE_KEY não configurada no .env.")
        raise HTTPException(
            status_code=503,
            detail="Defina LARIUS_ADMIN_PRIVATE_KEY no arquivo backend/.env para habilitar o login /admin.",
        )
    if not verify_private_key(req.private_key):
        record_log("AUTH", "WARN", "Chave privada incorreta submetida em /api/admin/login.")
        raise HTTPException(status_code=401, detail="Chave privada inválida.")

    token = issue_admin_token()
    response.set_cookie(
        key=SESSION_COOKIE_NAME,
        value=token,
        httponly=True,
        samesite="lax",
        max_age=8 * 3600,
    )
    record_log("AUTH", "INFO", "Arquiteto autenticado no Modo /admin.")
    return AdminSessionResponse(authenticated=True, role="architect", token=token)


@app.post("/api/admin/logout")
def admin_logout(response: Response) -> dict[str, bool]:
    response.delete_cookie(SESSION_COOKIE_NAME)
    return {"logged_out": True}


@app.get("/api/admin/session", response_model=AdminSessionResponse)
def admin_session(_: str = Depends(require_admin)) -> AdminSessionResponse:
    return AdminSessionResponse(authenticated=True, role="architect")


@app.get("/api/admin/voice-config", response_model=VoiceConfigAdminView)
def get_admin_voice_config(_: str = Depends(require_admin)) -> VoiceConfigAdminView:
    v = RUNTIME.voice
    return VoiceConfigAdminView(
        provider=v.provider,
        voice_id=v.voice_id,
        api_key_configured=bool(v.api_key),
        api_key_masked=_mask_secret(v.api_key),
        xtts_endpoint=v.xtts_endpoint,
        stability=v.stability,
        similarity_boost=v.similarity_boost,
        speed=v.speed,
        pitch_shift=v.pitch_shift,
    )


@app.put("/api/admin/voice-config", response_model=VoiceConfigAdminView)
def update_admin_voice_config(
    payload: VoiceConfigUpdateRequest,
    _: str = Depends(require_admin),
) -> VoiceConfigAdminView:
    v = RUNTIME.voice
    v.provider = payload.provider
    v.voice_id = payload.voice_id.strip()
    if payload.api_key and payload.api_key.strip():
        v.api_key = payload.api_key.strip()
    v.xtts_endpoint = payload.xtts_endpoint.strip()
    v.stability = payload.stability
    v.similarity_boost = payload.similarity_boost
    v.speed = payload.speed
    v.pitch_shift = payload.pitch_shift

    record_log("VOICE", "INFO", f"Calibração de voz atualizada (provider={v.provider}).")
    return get_admin_voice_config("architect")


@app.get("/api/admin/financial-params")
def get_admin_financial_params(_: str = Depends(require_admin)) -> dict:
    f = RUNTIME.financial
    return {
        "selic_pct": f.selic_pct,
        "ipca_pct": f.ipca_pct,
        "usd_brl": f.usd_brl,
        "dbgg_gdp_pct": f.dbgg_gdp_pct,
        "default_expected_return_pct": f.default_expected_return_pct,
        "prompt_guardrail_note": f.prompt_guardrail_note,
    }


@app.put("/api/admin/financial-params")
def update_admin_financial_params(
    payload: FinancialParamsUpdateRequest,
    _: str = Depends(require_admin),
) -> dict:
    f = RUNTIME.financial
    f.selic_pct = payload.selic_pct
    f.ipca_pct = payload.ipca_pct
    f.usd_brl = payload.usd_brl
    f.dbgg_gdp_pct = payload.dbgg_gdp_pct
    f.default_expected_return_pct = payload.default_expected_return_pct
    f.prompt_guardrail_note = payload.prompt_guardrail_note.strip()
    record_log(
        "ENGINE",
        "INFO",
        f"Parâmetros atualizados: Selic {f.selic_pct:.2f}% | IPCA {f.ipca_pct:.2f}% | USD R$ {f.usd_brl:.2f}.",
    )
    return get_admin_financial_params("architect")


@app.get("/api/admin/prompt-blueprint")
def get_admin_prompt_blueprint(
    risk_profile: RiskProfile = "MODERADO",
    experience_level: ExperienceLevel = "INTERMEDIARIO",
    amount_brl: float = 50000.0,
    _: str = Depends(require_admin),
) -> dict:
    assembled, layers = build_prompt_layers_for_admin(risk_profile, experience_level, amount_brl)
    return {"assembled_system_prompt": assembled, "layers": layers}


@app.get("/api/admin/logs")
def get_admin_logs(_: str = Depends(require_admin)) -> list[dict[str, str]]:
    return list(RUNTIME.logs)
