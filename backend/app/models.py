"""Pydantic v2 domain models for the D.investimentos FastAPI backend."""

from __future__ import annotations
from typing import Literal
from pydantic import BaseModel, Field


AssetType = Literal["ACAO", "FII"]
MacroGroup = Literal["SELIC", "IPCA", "DOLLAR", "FII", "AVOID"]
AdvisorPersona = Literal["fiduciario", "quantitativo", "auditor_custos"]


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
    profile: Literal["CONSERVADOR", "PATRIMONIO", "EXPANSAO"] = "PATRIMONIO"


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
    profile: str
    total_allocated_brl: float
    cash_reserve_selic_brl: float
    added_monthly_income_brl: float
    added_annual_income_brl: float
    items: list[AllocationItem]


class CompoundSimulationRequest(BaseModel):
    initial_capital: float = Field(default=10_000.0, ge=0.0)
    monthly_contribution: float = Field(default=1_000.0, ge=0.0)
    years: int = Field(default=10, ge=1, le=35)
    expected_annual_rate_pct: float = Field(default=16.2, ge=1.0, le=45.0)
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
    ir_rate_pct: float
    total_invested: float
    end_larius_net: float
    end_cdb_100_net: float
    ir_retained_cdb: float
    end_bank_85_net: float
    end_savings_net: float
    alpha_over_bank: float
    series: list[YearlyPoint]


class PromptEngineeringLayer(BaseModel):
    layer_id: str
    title: str
    purpose: str
    content: str


class AdvisorQuery(BaseModel):
    question: str = Field(min_length=1, max_length=1200)
    persona: AdvisorPersona = "fiduciario"
    portfolio_amount_brl: float = 50_000.0


class AdvisorResponse(BaseModel):
    persona: AdvisorPersona
    reply_markdown: str
    speech_script: str
    referenced_tickers: list[str]
    hud_focus_mode: Literal["CORE", "ASSET", "COMPOUND", "BROKERS"]
    shader_intensity: float
    assembled_system_prompt: str
    layers: list[PromptEngineeringLayer]
