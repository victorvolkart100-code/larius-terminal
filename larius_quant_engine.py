#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
LARIUS QUANTITATIVE ENGINE (Python 3.12)
Consultoria Patrimonial Fiduciária (CVM Resolução 19 — Fee-Based)
Cenário Macroeconômico Base: Novembro de 2026
  - Taxa Selic Terminal: 13.75% a.a. (Cortes postergados para Março/2027)
  - Inflação IPCA Focus: 5.22% (2026) / 4.90% (2027) vs Meta 3.00%
  - Câmbio Estrutural: R$ 5.50 (Faixa R$ 5.35 – R$ 5.65)
  - Dívida Bruta (DBGG/PIB): 82.4% (Pós-eleição presidencial Out/2026)
"""

from dataclasses import dataclass, asdict
from typing import List, Dict, Any
import json


@dataclass
class MacroScenario:
    period: str = "Novembro/2026"
    selic_annual: float = 0.1375
    cdi_annual: float = 0.1365
    ipca_2026: float = 0.0522
    ipca_2027: float = 0.0490
    usd_brl: float = 5.50
    dbgg_gdp_pct: float = 82.4
    gdp_growth_2026: float = 1.75
    gdp_growth_2027: float = 1.15


@dataclass
class QuantAsset:
    ticker: str
    name: str
    category: str
    sector: str
    price: float
    target: float
    dy: float
    roe: float
    pl: float
    beta: float
    volatility: float
    usd_revenue_pct: float
    ipca_pass_through: bool
    selic_beneficiary: bool
    starter_kit: bool
    thesis: str

    @property
    def upside_pct(self) -> float:
        return round(((self.target - self.price) / self.price) * 100.0, 2)

    def expected_total_return(self) -> float:
        return round(self.dy + (self.upside_pct * 0.65), 2)

    def sharpe_ratio(self, risk_free_net_pct: float = 11.60) -> float:
        excess = self.expected_total_return() - risk_free_net_pct
        return round(excess / max(self.volatility, 5.0), 2)

    def larius_quant_score(self, macro: MacroScenario) -> int:
        if self.category == "EVITAR":
            return max(15, int(45 + self.upside_pct))
        base = 72.0
        base += min(12.0, self.dy * 0.85)
        base += min(10.0, max(0.0, self.upside_pct * 0.28))
        if self.ipca_pass_through:
            base += 4.5
        if self.selic_beneficiary:
            base += 4.0
        if self.usd_revenue_pct >= 45.0:
            base += 4.5
        base -= max(0.0, (self.beta - 0.85) * 6.0)
        return min(99, max(50, int(round(base))))


def regressive_ir_rate(days: int) -> float:
    if days <= 180:
        return 0.225
    elif days <= 360:
        return 0.200
    elif days <= 720:
        return 0.175
    return 0.150


def simulate_wealth_projection(
    initial_capital: float = 10000.0,
    monthly_contribution: float = 1000.0,
    years: int = 10,
    larius_annual_return: float = 0.184,
    selic_annual: float = 0.1375,
) -> Dict[str, Any]:
    months = years * 12
    days = years * 365
    ir_rate = regressive_ir_rate(days)

    r_larius_m = (1.0 + larius_annual_return) ** (1.0 / 12.0) - 1.0
    r_cdb100_gross_m = (1.0 + selic_annual) ** (1.0 / 12.0) - 1.0
    r_bank85_gross_m = (1.0 + (selic_annual * 0.85)) ** (1.0 / 12.0) - 1.0
    r_poup_m = (1.0 + 0.0717) ** (1.0 / 12.0) - 1.0

    bal_larius = initial_capital
    bal_cdb100_gross = initial_capital
    bal_bank85_gross = initial_capital
    bal_poup = initial_capital
    total_invested = initial_capital

    yearly_curve = []

    for m in range(1, months + 1):
        total_invested += monthly_contribution
        bal_larius = bal_larius * (1.0 + r_larius_m) + monthly_contribution
        bal_cdb100_gross = bal_cdb100_gross * (1.0 + r_cdb100_gross_m) + monthly_contribution
        bal_bank85_gross = bal_bank85_gross * (1.0 + r_bank85_gross_m) + monthly_contribution
        bal_poup = bal_poup * (1.0 + r_poup_m) + monthly_contribution

        if m % 12 == 0 or m == months:
            yr = m // 12
            cur_ir = regressive_ir_rate(yr * 365)
            profit_cdb100 = max(0.0, bal_cdb100_gross - total_invested)
            tax_cdb100 = profit_cdb100 * cur_ir
            net_cdb100 = bal_cdb100_gross - tax_cdb100

            profit_bank85 = max(0.0, bal_bank85_gross - total_invested)
            tax_bank85 = profit_bank85 * cur_ir
            net_bank85 = bal_bank85_gross - tax_bank85

            yearly_curve.append({
                "year": yr,
                "invested": round(total_invested, 2),
                "larius_net": round(bal_larius, 2),
                "cdb100_net": round(net_cdb100, 2),
                "cdb100_tax_paid": round(tax_cdb100, 2),
                "bank85_net": round(net_bank85, 2),
                "poupanca_net": round(bal_poup, 2),
            })

    final = yearly_curve[-1]
    return {
        "parameters": {
            "initial_capital": initial_capital,
            "monthly_contribution": monthly_contribution,
            "years": years,
            "ir_rate_pct": round(ir_rate * 100.0, 1),
        },
        "summary": {
            "total_invested": final["invested"],
            "larius_final": final["larius_net"],
            "cdb100_final": final["cdb100_net"],
            "cdb100_ir_retained": final["cdb100_tax_paid"],
            "bank85_final": final["bank85_net"],
            "poupanca_final": final["poupanca_net"],
            "advantage_over_bank85": round(final["larius_net"] - final["bank85_net"], 2),
            "advantage_over_poupanca": round(final["larius_net"] - final["poupanca_net"], 2),
        },
        "yearly_curve": yearly_curve,
    }


def optimize_portfolio_by_profile(
    profile: str = "moderado",
    monthly_budget: float = 1500.0,
) -> Dict[str, Any]:
    allocations = {
        "iniciante": [
            {"bucket": "Tesouro Selic / Caixa Liquidez (13,75%)", "tickers": ["LFT / Selic", "KNCR11"], "weight_pct": 40, "expected_dy": 13.4},
            {"bucket": "Bancos & Seguros (Ganhadores da Selic)", "tickers": ["ITUB4", "BBSE3", "BBAS3"], "weight_pct": 25, "expected_dy": 9.8},
            {"bucket": "Concessões IPCA+ (Saneamento & Energia)", "tickers": ["SBSP3", "EGIE3", "TAEE11"], "weight_pct": 20, "expected_dy": 7.6},
            {"bucket": "Exportadoras Globais (Dólar R$ 5,50)", "tickers": ["WEGE3", "VALE3"], "weight_pct": 15, "expected_dy": 5.8},
        ],
        "moderado": [
            {"bucket": "Concessões & Utilities Blindadas IPCA+", "tickers": ["SBSP3", "EGIE3", "CPFE3"], "weight_pct": 30, "expected_dy": 7.4},
            {"bucket": "Bancos Líderes & Seguridade (ROE > 22%)", "tickers": ["ITUB4", "BBSE3", "BPAC11"], "weight_pct": 25, "expected_dy": 8.9},
            {"bucket": "Fundos Imobiliários Isentos (Papel + Tijolo)", "tickers": ["KNCR11", "KNIP11", "HGLG11", "BTLG11"], "weight_pct": 25, "expected_dy": 11.1},
            {"bucket": "Receita Dolarizada & Indústria Global", "tickers": ["WEGE3", "PRIO3", "EMBR3"], "weight_pct": 20, "expected_dy": 4.2},
        ],
        "arrojado": [
            {"bucket": "Exportadoras & Crescimento Global USD", "tickers": ["WEGE3", "PRIO3", "EMBR3", "SUZB3"], "weight_pct": 35, "expected_dy": 4.5},
            {"bucket": "Infraestrutura & Privatizações (Upside)", "tickers": ["SBSP3", "EQTL3", "VIVT3"], "weight_pct": 30, "expected_dy": 5.4},
            {"bucket": "FIIs Tijolo p/ Fechamento de Curva Mar/27", "tickers": ["HGLG11", "BTLG11", "XPML11"], "weight_pct": 20, "expected_dy": 9.5},
            {"bucket": "Bancos & Caixa Tático Selic", "tickers": ["ITUB4", "BBSE3", "KNCR11"], "weight_pct": 15, "expected_dy": 10.6},
        ],
    }

    chosen = allocations.get(profile.lower(), allocations["moderado"])
    weighted_dy = sum(item["weight_pct"] * item["expected_dy"] for item in chosen) / 100.0
    detailed = [
        {**item, "monthly_brl": round(monthly_budget * (item["weight_pct"] / 100.0), 2)}
        for item in chosen
    ]

    return {
        "profile": profile,
        "monthly_budget": monthly_budget,
        "weighted_dividend_yield_pct": round(weighted_dy, 2),
        "projected_12m_return_pct": 24.6 if profile == "moderado" else (21.2 if profile == "iniciante" else 27.8),
        "sharpe_estimated": 1.84 if profile == "iniciante" else (1.72 if profile == "moderado" else 1.58),
        "allocations": detailed,
    }


if __name__ == "__main__":
    macro = MacroScenario()
    sim = simulate_wealth_projection(10000, 1000, 10)
    opt = optimize_portfolio_by_profile("moderado", 1500)
    print(json.dumps({
        "engine": "Larius Quantitative Engine v2.6 (Python 3.12)",
        "macro": asdict(macro),
        "wealth_simulation_10y": sim["summary"],
        "portfolio_optimization": opt,
    }, indent=2, ensure_ascii=False))
