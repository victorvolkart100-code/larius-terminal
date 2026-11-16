"""Server-only Prompt Engineering and sanitized public Advisory routing for Larius."""

from __future__ import annotations

from .config import RUNTIME, record_log
from .engine import ASSETS_CATALOG, compute_smart_allocation, simulate_compound_wealth
from .models import (
    AdvisorPublicResponse,
    AdvisorQuery,
    AllocationRequest,
    CompoundSimulationRequest,
    ExperienceLevel,
    PromptEngineeringLayer,
    RiskProfile,
)


def build_prompt_layers_for_admin(
    risk_profile: RiskProfile,
    experience_level: ExperienceLevel,
    portfolio_amount_brl: float,
) -> tuple[str, list[PromptEngineeringLayer]]:
    """Construct server-side prompt layers (accessible strictly inside /admin)."""
    f = RUNTIME.financial
    tone = (
        "Explicação didática sem jargão excessivo para investidor iniciante."
        if experience_level == "INICIANTE"
        else "Equilíbrio entre clareza executiva e fundamentos de balanço."
        if experience_level == "INTERMEDIARIO"
        else "Linguagem técnica de mesa institucional com foco em múltiplos, Beta e Sharpe."
    )

    layers = [
        PromptEngineeringLayer(
            layer_id="L1_PERSONA",
            title="Camada 1 · Persona & Perfil do Investidor",
            purpose="Adapta profundidade técnica (Iniciante a Sênior) e apetite de risco.",
            content=f"Consultor Patrimonial Larius CVM 19 | Perfil: {risk_profile} | Nível: {experience_level}. {tone}",
        ),
        PromptEngineeringLayer(
            layer_id="L2_MACRO",
            title="Camada 2 · Parâmetros Macro do Arquiteto",
            purpose="Injeta taxas editadas no modo /admin sem exposição interna no DOM público.",
            content=(
                f"Base {f.reference_date} | Selic: {f.selic_pct:.2f}% | IPCA: {f.ipca_pct:.2f}% | "
                f"USD/BRL: R$ {f.usd_brl:.2f} | Patrimônio referência: R$ {portfolio_amount_brl:,.2f}."
            ),
        ),
        PromptEngineeringLayer(
            layer_id="L3_GUARDRAILS",
            title="Camada 3 · Diretrizes & Compliance CVM 19",
            purpose="Restrições de risco configuradas pelo Arquiteto.",
            content=f.prompt_guardrail_note,
        ),
        PromptEngineeringLayer(
            layer_id="L4_TTS_SYNC",
            title="Camada 4 · Roteiro Vocal para /api/lariustts",
            purpose="Prepara texto fluido em PT-BR para o clone de voz isolado no servidor.",
            content="Gerar texto limpo em português natural para envio exclusivo à rota /api/lariustts.",
        ),
    ]
    assembled = "\n\n".join(f"[{layer.title}]\n{layer.content}" for layer in layers)
    return assembled, layers


def answer_public_advisor_query(query: AdvisorQuery) -> AdvisorPublicResponse:
    """Process investor question on the server and return ONLY sanitized investor-facing data."""
    q = query.question.lower()
    record_log(
        "ADVISOR",
        "INFO",
        f"Consulta Larius (Perfil={query.risk_profile}, Nível={query.experience_level}).",
    )

    matched_asset = next(
        (a for a in ASSETS_CATALOG if a.ticker.lower() in q or a.name.lower() in q),
        None,
    )
    if matched_asset:
        detail = (
            f"{matched_asset.thesis}"
            if query.experience_level == "INICIANTE"
            else f"{matched_asset.thesis} Múltiplo P/L ou P/VP: {matched_asset.pl:.2f} | ROE: {matched_asset.roe:.1f}% | Beta: {matched_asset.beta:.2f}."
        )
        reply = (
            f"### Parecer {matched_asset.ticker} — {matched_asset.name}\n\n"
            f"{detail}\n\n"
            f"- **Cotação / Alvo:** R$ {matched_asset.price:.2f} → R$ {matched_asset.target:.2f} (`{matched_asset.upside:+.1f}%`)\n"
            f"- **Dividend Yield:** `{matched_asset.dy:.1f}% a.a.` | **Proventos:** {matched_asset.pay_months}"
        )
        speech = (
            f"Analisando {matched_asset.name}, código {matched_asset.ticker}. "
            f"{matched_asset.thesis} Hoje negocia a {matched_asset.price:.2f} reais, com dividendo estimado de "
            f"{matched_asset.dy:.1f} por cento ao ano."
        )
        return AdvisorPublicResponse(
            risk_profile=query.risk_profile,
            experience_level=query.experience_level,
            reply_markdown=reply,
            speech_script=speech,
            referenced_tickers=[matched_asset.ticker],
            hud_focus_mode="ASSET",
        )

    if any(w in q for w in ("banco", "corretora", "taxa", "c6", "itaú", "itau", "inter", "nubank", "btg", "xp")):
        reply = (
            "### Comparativo de Bancos & Corretoras\n\n"
            "- **Taxa Zero Real (Ações e FIIs):** Íon Itaú, Banco Inter, C6 Invest e Nubank.\n"
            "- **Atenção ao Custo Fixo:** XP cobra R$ 4,90 por ordem em ações; BTG isenta FIIs e cobra R$ 4,50 em ordens padrão abaixo das faixas maiores.\n"
            "- **Estratégia:** Combine uma corretora taxa zero com FIIs high-grade como `KNCR11` (rendimento isento de IR)."
        )
        speech = (
            "Para preservar seus juros compostos, utilize instituições sem taxa de corretagem como "
            "Íon Itaú, Banco Inter, C6 Invest ou Nubank na compra de ações e fundos imobiliários."
        )
        return AdvisorPublicResponse(
            risk_profile=query.risk_profile,
            experience_level=query.experience_level,
            reply_markdown=reply,
            speech_script=speech,
            referenced_tickers=["ITUB4", "KNCR11"],
            hud_focus_mode="BROKERS",
        )

    if any(w in q for w in ("juro", "imposto", "cdb", "composto", "simula")):
        sim = simulate_compound_wealth(CompoundSimulationRequest())
        reply = (
            f"### Simulação Líquida em {sim.years} Anos (R$ 10k + R$ 1.000/mês)\n\n"
            f"- **Carteira Recomendada (Proventos Isentos):** `R$ {sim.end_larius_net:,.0f}`\n"
            f"- **CDB 100% CDI (-{sim.ir_rate_pct:.0f}% IR):** `R$ {sim.end_cdb_100_net:,.0f}`\n"
            f"- **Banco Tradicional (85% CDI):** `R$ {sim.end_bank_85_net:,.0f}`\n\n"
            f"**Diferença líquida estimada:** `+R$ {sim.alpha_over_bank:,.0f}`."
        )
        speech = (
            f"Em dez anos mantendo aportes mensais de mil reais, a isenção tributária sobre dividendos e fundos imobiliários "
            f"gera mais de {int(sim.alpha_over_bank // 1000)} mil reais de vantagem líquida frente aos bancos tradicionais."
        )
        return AdvisorPublicResponse(
            risk_profile=query.risk_profile,
            experience_level=query.experience_level,
            reply_markdown=reply,
            speech_script=speech,
            referenced_tickers=["ITUB4", "SBSP3", "KNCR11"],
            hud_focus_mode="COMPOUND",
        )

    alloc = compute_smart_allocation(AllocationRequest(amount_brl=3000.0, risk_profile=query.risk_profile))
    lines = "\n".join(
        f"- **{item.ticker}** (`{item.weight_pct}%`): {item.quantity} {'cotas' if item.asset_type == 'FII' else 'ações'} — {item.role}"
        for item in alloc.items
    )
    reply = (
        f"### Alocação Recomendada — Perfil {query.risk_profile}\n\n"
        f"{lines}\n\n"
        f"**Renda passiva mensal adicionada:** `+R$ {alloc.added_monthly_income_brl:.2f}/mês` isentos de IR."
    )
    speech = (
        f"Para o seu perfil {query.risk_profile.lower()}, estruturei uma carteira equilibrada para capturar juros, proteção contra inflação e receita em dólar, "
        f"adicionando renda mensal isenta de Imposto de Renda."
    )
    return AdvisorPublicResponse(
        risk_profile=query.risk_profile,
        experience_level=query.experience_level,
        reply_markdown=reply,
        speech_script=speech,
        referenced_tickers=[item.ticker for item in alloc.items],
        hud_focus_mode="CORE",
    )
