"""Quantitative investment universe and calculation engine for D.investimentos."""

from __future__ import annotations

from .config import RUNTIME, record_log
from .models import (
    AllocationItem,
    AllocationRequest,
    AllocationResponse,
    Asset,
    Broker,
    CompoundSimulationRequest,
    CompoundSimulationResponse,
    YearlyPoint,
)

ASSETS_CATALOG: list[Asset] = [
    Asset(
        ticker="ITUB4", name="Itaú Unibanco", type="ACAO", sector="Bancos", group="SELIC",
        price=36.40, target=44.50, upside=22.3, dy=7.8, pl=8.4, roe=22.4, beta=0.82, volatility=16.5,
        score=96, status="Top Core", pay_months="Mensal + JCP", spark=[31.2, 32.1, 33.4, 34.0, 35.1, 36.4],
        thesis="Líder de rentabilidade na América Latina com ROE de 22,4%, beneficiado pela Selic elevada."
    ),
    Asset(
        ticker="BBSE3", name="BB Seguridade", type="ACAO", sector="Seguridade", group="SELIC",
        price=37.10, target=43.80, upside=18.1, dy=9.6, pl=9.1, roe=74.0, beta=0.58, volatility=13.2,
        score=95, status="Renda", pay_months="Fev / Ago", spark=[32.8, 33.9, 34.5, 35.2, 36.1, 37.1],
        thesis="Caixa bilionário aplicado ao CDI e zero dívida; mantém Dividend Yield próximo a 10%."
    ),
    Asset(
        ticker="SBSP3", name="Sabesp", type="ACAO", sector="Saneamento", group="IPCA",
        price=94.20, target=126.00, upside=33.8, dy=3.4, pl=11.8, roe=17.2, beta=0.74, volatility=18.0,
        score=95, status="Top Core", pay_months="Mai / Dez", spark=[78.5, 82.0, 85.4, 88.9, 91.5, 94.2],
        thesis="Pós-privatização com ganho de eficiência operacional e contratos atrelados à inflação."
    ),
    Asset(
        ticker="WEGE3", name="WEG S.A.", type="ACAO", sector="Indústria Global", group="DOLLAR",
        price=52.90, target=66.50, upside=25.7, dy=1.8, pl=31.0, roe=34.2, beta=0.79, volatility=21.4,
        score=96, status="Hedge USD", pay_months="Mar / Ago", spark=[43.0, 45.2, 47.9, 49.5, 51.0, 52.9],
        thesis="Mais de 55% da receita em moeda forte exportando transformadores globais e sistemas industriais."
    ),
    Asset(
        ticker="PRIO3", name="PRIO", type="ACAO", sector="Petróleo", group="DOLLAR",
        price=44.60, target=61.00, upside=36.8, dy=2.2, pl=6.8, roe=28.5, beta=1.08, volatility=26.2,
        score=93, status="Upside USD", pay_months="Eventual", spark=[38.2, 39.6, 41.0, 42.1, 43.4, 44.6],
        thesis="Lifting cost abaixo de US$ 7/barril e geração de caixa diretamente em dólar."
    ),
    Asset(
        ticker="EGIE3", name="Engie Brasil", type="ACAO", sector="Energia Elétrica", group="IPCA",
        price=43.80, target=52.20, upside=19.2, dy=7.4, pl=9.9, roe=23.6, beta=0.52, volatility=12.8,
        score=92, status="Defensiva", pay_months="Mai / Nov", spark=[39.4, 40.1, 41.0, 41.8, 42.9, 43.8],
        thesis="Contratos de transmissão e geração reajustados pelo IPCA com forte previsibilidade de proventos."
    ),
    Asset(
        ticker="KNCR11", name="Kinea Rendimentos", type="FII", sector="FII Papel CDI", group="FII",
        price=104.50, target=108.00, upside=3.3, dy=13.4, pl=1.01, roe=13.4, beta=0.18, volatility=6.2,
        score=95, status="Isento IR", pay_months="Mensal (Dia 13)", spark=[101.2, 102.0, 102.6, 103.3, 103.9, 104.5],
        thesis="Carteira high-grade indexada ao CDI entregando renda mensal líquida isenta de IR para pessoa física."
    ),
    Asset(
        ticker="HGLG11", name="Pátria Logística", type="FII", sector="FII Tijolo", group="FII",
        price=152.00, target=174.00, upside=14.5, dy=8.9, pl=0.93, roe=8.9, beta=0.31, volatility=9.4,
        score=94, status="Desconto", pay_months="Mensal (Dia 14)", spark=[144.0, 145.6, 147.2, 149.0, 150.5, 152.0],
        thesis="Galpões logísticos triple-A negociando com 7% de desconto patrimonial e aluguéis corrigidos pelo IPCA."
    ),
    Asset(
        ticker="BPAC11", name="BTG Pactual", type="ACAO", sector="Banco de Investimentos", group="SELIC",
        price=38.20, target=47.50, upside=24.3, dy=3.2, pl=10.4, roe=23.1, beta=1.04, volatility=22.0,
        score=92, status="Crescimento", pay_months="Fev / Ago", spark=[32.0, 33.4, 34.9, 36.1, 37.0, 38.2],
        thesis="Expansão consistente em wealth management, crédito corporativo e tesouraria."
    ),
    Asset(
        ticker="MGLU3_AVOID", name="Varejo Alavancado", type="ACAO", sector="Varejo Discricionário", group="AVOID",
        price=9.40, target=7.20, upside=-23.4, dy=0.0, pl=0.0, roe=-4.5, beta=1.65, volatility=44.0,
        score=28, status="Evitado", pay_months="Sem dividendos", spark=[13.2, 12.1, 11.4, 10.6, 9.9, 9.4],
        thesis="Margens comprimidas pelo custo da dívida e forte pressão competitiva no varejo."
    ),
]

BROKERS_CATALOG: list[Broker] = [
    Broker(
        id="ion_itau", name="Íon Itaú", short_code="IT", subtitle="Banco Itaú Unibanco",
        fee_stock="R$ 0,00", fee_fii="R$ 0,00", zero_fee=True, cdb_rate="100% CDI", ease_score="9.7/10",
        verdict="Melhor combinação de solidez bancária secular com corretagem zero real em Ações e FIIs."
    ),
    Broker(
        id="inter", name="Inter Invest", short_code="IN", subtitle="Banco Inter",
        fee_stock="R$ 0,00", fee_fii="R$ 0,00", zero_fee=True, cdb_rate="102% CDI", ease_score="9.5/10",
        verdict="Interface fluida para iniciantes, taxa zero na B3 e conta global integrada para dólar."
    ),
    Broker(
        id="c6", name="C6 Invest", short_code="C6", subtitle="C6 Bank",
        fee_stock="R$ 0,00", fee_fii="R$ 0,00", zero_fee=True, cdb_rate="102% CDI", ease_score="9.3/10",
        verdict="Home broker simplificado sem corretagem na B3 e CDBs acessíveis de liquidez diária."
    ),
    Broker(
        id="nubank", name="Nubank / NuInvest", short_code="NU", subtitle="Nu Holdings",
        fee_stock="R$ 0,00", fee_fii="R$ 0,00", zero_fee=True, cdb_rate="100% CDI", ease_score="9.6/10",
        verdict="Experiência direta no app para primeiros aportes em FIIs e Tesouro Selic sem custos."
    ),
    Broker(
        id="btg", name="BTG Pactual", short_code="BP", subtitle="Banco BTG Pactual",
        fee_stock="R$ 4,50*", fee_fii="R$ 0,00", zero_fee=False, cdb_rate="104% CDI", ease_score="9.1/10",
        verdict="Plataforma institucional completa; FIIs são isentos e ações ficam gratuitas em faixas maiores."
    ),
    Broker(
        id="xp", name="XP Investimentos", short_code="XP", subtitle="XP Inc.",
        fee_stock="R$ 4,90", fee_fii="R$ 0,00", zero_fee=False, cdb_rate="101% CDI", ease_score="8.6/10",
        verdict="Prateleira ampla de renda fixa, mas exige atenção à taxa de R$ 4,90/ordem em ações."
    ),
]


def get_macro_snapshot() -> dict:
    f = RUNTIME.financial
    return {
        "reference_date": f.reference_date,
        "selic_pct": f.selic_pct,
        "ipca_pct": f.ipca_pct,
        "usd_brl": f.usd_brl,
        "dbgg_gdp_pct": f.dbgg_gdp_pct,
        "ibov_points": f.ibov_points,
        "ibov_delta_pct": f.ibov_delta_pct,
    }


def regressive_ir_rate(days: int) -> float:
    if days <= 180:
        return 0.225
    if days <= 360:
        return 0.200
    if days <= 720:
        return 0.175
    return 0.150


def compute_smart_allocation(req: AllocationRequest) -> AllocationResponse:
    """Compute discrete share/cota quantities for Conservador / Moderado / Arrojado."""
    baskets: dict[str, list[tuple[str, float, str]]] = {
        "CONSERVADOR": [
            ("KNCR11", 0.35, "Renda mensal pós-fixada isenta de IR"),
            ("ITUB4", 0.25, "Carrego bancário com Selic elevada"),
            ("EGIE3", 0.25, "Concessão elétrica blindada pelo IPCA"),
            ("WEGE3", 0.15, "Proteção cambial em moeda forte"),
        ],
        "MODERADO": [
            ("SBSP3", 0.25, "Saneamento IPCA+ e ganho operacional"),
            ("ITUB4", 0.20, "Spread bancário e ROE > 22%"),
            ("HGLG11", 0.20, "Logística prime com desconto patrimonial"),
            ("WEGE3", 0.20, "Exportadora global dolarizada"),
            ("BBSE3", 0.15, "Seguridade com dividendo próximo a 10%"),
        ],
        "ARROJADO": [
            ("WEGE3", 0.25, "Indústria global dolarizada e expansão internacional"),
            ("PRIO3", 0.25, "Receita 100% dólar e baixo custo de extração"),
            ("SBSP3", 0.25, "Sensibilidade positiva ao fechamento da curva"),
            ("BPAC11", 0.15, "Crescimento em wealth e investment banking"),
            ("HGLG11", 0.10, "FII descontado isento de IR"),
        ],
    }

    lookup = {a.ticker: a for a in ASSETS_CATALOG}
    chosen = baskets[req.risk_profile]
    items: list[AllocationItem] = []
    total_allocated = 0.0
    annual_dividend = 0.0

    for ticker, weight, role in chosen:
        asset = lookup[ticker]
        target_brl = req.amount_brl * weight
        qty = max(1, int(target_brl // asset.price))
        subtotal = round(qty * asset.price, 2)
        yr_div = subtotal * (asset.dy / 100.0)
        total_allocated += subtotal
        annual_dividend += yr_div
        items.append(
            AllocationItem(
                ticker=asset.ticker,
                name=asset.name,
                asset_type=asset.type,
                role=role,
                weight_pct=int(weight * 100),
                unit_price=asset.price,
                quantity=qty,
                subtotal_brl=subtotal,
                monthly_dividend_brl=round(yr_div / 12.0, 2),
            )
        )

    cash_reserve = round(max(0.0, req.amount_brl - total_allocated), 2)
    record_log("ENGINE", "INFO", f"Alocação calculada para perfil {req.risk_profile} (R$ {req.amount_brl:.2f}).")
    return AllocationResponse(
        amount_brl=req.amount_brl,
        risk_profile=req.risk_profile,
        total_allocated_brl=round(total_allocated, 2),
        cash_reserve_selic_brl=cash_reserve,
        added_monthly_income_brl=round(annual_dividend / 12.0, 2),
        added_annual_income_brl=round(annual_dividend, 2),
        items=items,
    )


def _future_value(initial: float, monthly: float, annual_rate: float, months: int) -> float:
    if months <= 0:
        return initial
    rm = (1.0 + annual_rate) ** (1.0 / 12.0) - 1.0
    return initial * ((1.0 + rm) ** months) + monthly * (((1.0 + rm) ** months - 1.0) / rm)


def simulate_compound_wealth(req: CompoundSimulationRequest) -> CompoundSimulationResponse:
    """Compare tax-free equity/FII compounding against taxable CDB based on live admin Selic."""
    f = RUNTIME.financial
    target_rate = req.expected_annual_rate_pct if req.expected_annual_rate_pct is not None else f.default_expected_return_pct
    ir_rate = regressive_ir_rate(req.years * 365)
    larius_rate = (target_rate / 100.0) * (1.0 if req.reinvest_dividends else 0.62)
    cdb_100_rate = f.selic_pct / 100.0
    bank_85_rate = cdb_100_rate * 0.85
    savings_rate = 0.074

    series: list[YearlyPoint] = []
    for yr in range(req.years + 1):
        months = yr * 12
        invested = req.initial_capital + req.monthly_contribution * months
        larius_val = _future_value(req.initial_capital, req.monthly_contribution, larius_rate, months)
        cdb_gross = _future_value(req.initial_capital, req.monthly_contribution, cdb_100_rate, months)
        bank_gross = _future_value(req.initial_capital, req.monthly_contribution, bank_85_rate, months)
        sav_val = _future_value(req.initial_capital, req.monthly_contribution, savings_rate, months)

        series.append(
            YearlyPoint(
                year=yr,
                label=f"Ano {yr}",
                invested=round(invested, 2),
                larius_net=round(larius_val, 2),
                cdb_100_net=round(cdb_gross - max(0.0, cdb_gross - invested) * ir_rate, 2),
                bank_85_net=round(bank_gross - max(0.0, bank_gross - invested) * ir_rate, 2),
                savings_net=round(sav_val, 2),
            )
        )

    last = series[-1]
    cdb_gross_end = _future_value(req.initial_capital, req.monthly_contribution, cdb_100_rate, req.years * 12)
    ir_paid = max(0.0, cdb_gross_end - last.invested) * ir_rate

    return CompoundSimulationResponse(
        years=req.years,
        expected_rate_pct=round(target_rate, 2),
        ir_rate_pct=round(ir_rate * 100.0, 1),
        total_invested=last.invested,
        end_larius_net=last.larius_net,
        end_cdb_100_net=last.cdb_100_net,
        ir_retained_cdb=round(ir_paid, 2),
        end_bank_85_net=last.bank_85_net,
        end_savings_net=last.savings_net,
        alpha_over_bank=round(last.larius_net - last.bank_85_net, 2),
        series=series,
    )
