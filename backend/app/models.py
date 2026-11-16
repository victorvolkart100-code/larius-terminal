"""Pydantic v2 domain models enforcing strict public vs. Architect (/admin) data isolation."""

from __future__ import annotations

from typing import Literal
from pydantic import BaseModel, Field

AssetType = Literal["ACAO", "FII"]
MacroGroup = Literal["SELIC", "IPCA", "DOLLAR", "FII", "AVOID"]
RiskProfile = Literal["CONSERVADOR", "MODERADO", "ARROJADO"]
ExperienceLevel = Literal["INICIANTE", "INTERMEDIARIO", "SENIOR"]
VoiceProvider = Literal["elevenlabs", "cartesia", "xtts"]


class Asset(BaseModel):
    ticker: str
    name: str
    type: AssetType
    sector: str
    group: MacroGroup
    price: float
    target: float
    upside: float
    dy: float
    pl: float
    roe: float
    beta: float
    volatility: float
    score: int
    status: str
    pay_months: str
    spark: list[float]
    thesis: str


class Broker(BaseModel):
    id: str
    name: str
    short_code: str
    subtitle: str
    fee_stock: str
    fee_fii: str
    zero_fee: bool
    cdb_rate: str
    ease_score: str
    verdict: str


class AllocationRequest(BaseModel):
    amount_brl: float = Field(default=3000.0, ge=100.0, le=50_000_000.0)
    risk_profile: RiskProfile = "MODERADO"


class AllocationItem(BaseModel):
    ticker: str
    name: str
    asset_type: AssetType
    role: str
    weight_pct: int
    unit_price: float
    quantity: int
    subtotal_brl: float
    monthly_dividend_brl: float


class AllocationResponse(BaseModel):
    amount_brl: float
    risk_profile: RiskProfile
    total_allocated_brl: float
    cash_reserve_selic_brl: float
    added_monthly_income_brl: float
    added_annual_income_brl: float
    items: list[AllocationItem]


class CompoundSimulationRequest(BaseModel):
    initial_capital: float = Field(default=10_000.0, ge=0.0)
    monthly_contribution: float = Field(default=1_000.0, ge=0.0)
    years: int = Field(default=10, ge=1, le=35)
    expected_annual_rate_pct: float | None = Field(default=None, ge=1.0, le=45.0)
    reinvest_dividends: bool = True


class YearlyPoint(BaseModel):
    year: int
    label: str
    invested: float
    larius_net: float
    cdb_100_net: float
    bank_85_net: float
    savings_net: float


class CompoundSimulationResponse(BaseModel):
    years: int
    expected_rate_pct: float
    ir_rate_pct: float
    total_invested: float
    end_larius_net: float
    end_cdb_100_net: float
    ir_retained_cdb: float
    end_bank_85_net: float
    end_savings_net: float
    alpha_over_bank: float
    series: list[YearlyPoint]


class AdvisorQuery(BaseModel):
    question: str = Field(min_length=1, max_length=1200)
    risk_profile: RiskProfile = "MODERADO"
    experience_level: ExperienceLevel = "INTERMEDIARIO"
    portfolio_amount_brl: float = 50_000.0


class AdvisorPublicResponse(BaseModel):
    """Sanitized public response: zero system prompts, zero Voice IDs, zero API keys."""

    risk_profile: RiskProfile
    experience_level: ExperienceLevel
    reply_markdown: str
    speech_script: str
    referenced_tickers: list[str]
    hud_focus_mode: Literal["CORE", "ASSET", "COMPOUND", "BROKERS"]


class TtsRequest(BaseModel):
    text: str = Field(min_length=1, max_length=1800)


# ==================== ADMIN / ARCHITECT ONLY MODELS ====================


class AdminLoginRequest(BaseModel):
    private_key: str = Field(min_length=1, max_length=256)


class AdminSessionResponse(BaseModel):
    authenticated: bool
    role: str
    token: str | None = None


class VoiceConfigAdminView(BaseModel):
    provider: VoiceProvider
    voice_id: str
    api_key_configured: bool
    api_key_masked: str
    xtts_endpoint: str
    stability: float
    similarity_boost: float
    speed: float
    pitch_shift: float


class VoiceConfigUpdateRequest(BaseModel):
    provider: VoiceProvider
    voice_id: str
    api_key: str | None = None
    xtts_endpoint: str = "http://127.0.0.1:8020"
    stability: float = Field(default=0.52, ge=0.0, le=1.0)
    similarity_boost: float = Field(default=0.82, ge=0.0, le=1.0)
    speed: float = Field(default=1.04, ge=0.7, le=1.35)
    pitch_shift: float = Field(default=0.96, ge=0.75, le=1.25)


class FinancialParamsUpdateRequest(BaseModel):
    selic_pct: float = Field(ge=2.0, le=30.0)
    ipca_pct: float = Field(ge=0.0, le=25.0)
    usd_brl: float = Field(ge=2.0, le=15.0)
    dbgg_gdp_pct: float = Field(ge=30.0, le=150.0)
    default_expected_return_pct: float = Field(ge=5.0, le=35.0)
    prompt_guardrail_note: str = Field(min_length=5, max_length=600)


class PromptEngineeringLayer(BaseModel):
    layer_id: str
    title: str
    purpose: str
    content: str
