"""FastAPI entrypoint for the D.investimentos backend."""

from __future__ import annotations
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from .engine import (
    ASSETS_CATALOG,
    BROKERS_CATALOG,
    MACRO_SNAPSHOT,
    compute_smart_allocation,
    simulate_compound_wealth,
)
from .models import (
    AdvisorPersona,
    AdvisorQuery,
    AdvisorResponse,
    AllocationRequest,
    AllocationResponse,
    Asset,
    Broker,
    CompoundSimulationRequest,
    CompoundSimulationResponse,
)
from .prompt_engineering import answer_advisor_query, build_prompt_layers

app = FastAPI(
    title="D.investimentos Quant & Advisory API",
    version="1.0.0",
    description="Backend FastAPI em Python para telemetria B3, alocação discreta, IR regressivo e engenharia de prompt Larius.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health_check() -> dict[str, str]:
    return {"status": "online", "engine": "D.investimentos FastAPI v1.0", "advisor": "Larius"}


@app.get("/api/market/telemetry")
def get_macro_telemetry() -> dict:
    return MACRO_SNAPSHOT


@app.get("/api/assets", response_model=list[Asset])
def list_assets(group: str | None = None) -> list[Asset]:
    if not group or group == "ALL":
        return ASSETS_CATALOG
    return [a for a in ASSETS_CATALOG if a.group == group or a.type == group]


@app.get("/api/assets/{ticker}", response_model=Asset)
def get_asset(ticker: str) -> Asset:
    target = next((a for a in ASSETS_CATALOG if a.ticker.upper() == ticker.upper()), None)
    if not target:
        raise HTTPException(status_code=404, detail=f"Ticker {ticker} não encontrado.")
    return target


@app.get("/api/brokers", response_model=list[Broker])
def list_brokers(zero_only: bool = False) -> list[Broker]:
    return [b for b in BROKERS_CATALOG if not zero_only or b.zero_fee]


@app.post("/api/allocate", response_model=AllocationResponse)
def allocate_contribution(req: AllocationRequest) -> AllocationResponse:
    return compute_smart_allocation(req)


@app.post("/api/simulate/compound", response_model=CompoundSimulationResponse)
def simulate_compound(req: CompoundSimulationRequest) -> CompoundSimulationResponse:
    return simulate_compound_wealth(req)


@app.get("/api/advisor/prompt-blueprint")
def get_prompt_blueprint(persona: AdvisorPersona = "fiduciario", amount_brl: float = 50000.0) -> dict:
    assembled, layers = build_prompt_layers(persona, amount_brl)
    return {"persona": persona, "assembled_system_prompt": assembled, "layers": layers}


@app.post("/api/advisor/ask", response_model=AdvisorResponse)
def ask_advisor(query: AdvisorQuery) -> AdvisorResponse:
    return answer_advisor_query(query)
