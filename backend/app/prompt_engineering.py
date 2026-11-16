"""Structured Prompt Engineering engine for the Larius Financial Advisor."""

from __future__ import annotations
from .engine import ASSETS_CATALOG, MACRO_SNAPSHOT, compute_smart_allocation, simulate_compound_wealth
from .models import (
    AdvisorPersona,
    AdvisorQuery,
    AdvisorResponse,
    AllocationRequest,
    CompoundSimulationRequest,
    PromptEngineeringLayer,
)

PERSONA_DIRECTIVES: dict[AdvisorPersona, str] = {
    "fiduciario": (
        "Atue como Consultor Patrimonial Sênior CVM 19 (modelo fee-based, livre de conflito de comissão). "
        "Explique com calma executiva, rigor analítico e foco em preservação de capital e renda isenta de IR."
    ),
    "quantitativo": (
        "Atue como Estrategista Quantitativo de Mesa Institucional. Fundamente cada tese em múltiplos "
        "(P/L, ROE, Beta, Volatilidade, Sharpe Líquido e correlação macro Selic/Dólar)."
    ),
    "auditor_custos": (
        "Atue como Auditor Fiduciário de Custódia e Tributação. Identifique imediatamente custos ocultos de "
        "corretagem bancária, spread de CDBs de varejo (<100% CDI) e retenções da tabela regressiva de IR."
    ),
}


def build_prompt_layers(persona: AdvisorPersona, portfolio_amount_brl: float) -> tuple[str, list[PromptEngineeringLayer]]:
    """Construct transparent multi-layer prompt architecture for financial advisory."""
    layers = [
        PromptEngineeringLayer(
            layer_id="L1_PERSONA",
            title="Camada 1 · Persona Fiduciária",
            purpose="Define postura ética sem conflito de comissão e tom executivo claro.",
            content=PERSONA_DIRECTIVES[persona],
        ),
        PromptEngineeringLayer(
            layer_id="L2_MACRO_CONTEXT",
            title="Camada 2 · Injeção Macroeconômica em Tempo Real",
            purpose="Ancora recomendações nas taxas vigentes B3/BACEN e no porte patrimonial.",
            content=(
                f"Data-base: {MACRO_SNAPSHOT['reference_date']} | Selic: {MACRO_SNAPSHOT['selic_pct']}% a.a. | "
                f"IPCA: {MACRO_SNAPSHOT['ipca_pct']}% | USD/BRL: R$ {MACRO_SNAPSHOT['usd_brl']:.2f} | "
                f"Capital referência do cliente: R$ {portfolio_amount_brl:,.2f}."
            ),
        ),
        PromptEngineeringLayer(
            layer_id="L3_GUARDRAILS",
            title="Camada 3 · Guardrails CVM 19 & Risco",
            purpose="Evita recomendações imprudentes e exige menção explícita a risco, IR e liquidez.",
            content=(
                "Nunca prometa rentabilidade garantida em renda variável. Evite empresas altamente alavancadas "
                "com dívida indexada ao CDI elevado. Sempre destaque isenção fiscal de dividendos/FIIs vs IR regressivo."
            ),
        ),
        PromptEngineeringLayer(
            layer_id="L4_VOICE_CADENCE",
            title="Camada 4 · Síntese para HUD & Síntese Vocal",
            purpose="Separa saída visual estruturada de um roteiro fluido de fala para o núcleo 3D.",
            content=(
                "Gerar paralelamente: (a) resposta objetiva com dados tabulares para o HUD e "
                "(b) script limpo sem símbolos técnicos para narração natural em PT-BR sincronizada com uAudioEnergy."
            ),
        ),
    ]
    assembled = "\n\n".join(f"[{layer.title}]\n{layer.content}" for layer in layers)
    return assembled, layers


def answer_advisor_query(query: AdvisorQuery) -> AdvisorResponse:
    """Route financial questions through the prompt layers and deterministic quant data."""
    q = query.question.lower()
    assembled_prompt, layers = build_prompt_layers(query.persona, query.portfolio_amount_brl)

    matched_asset = next(
        (a for a in ASSETS_CATALOG if a.ticker.lower() in q or a.name.lower() in q),
        None,
    )
    if matched_asset:
        reply = (
            f"### Parecer {matched_asset.ticker} — {matched_asset.name}\n\n"
            f"{matched_asset.thesis}\n\n"
            f"- **Cotação / Alvo:** R$ {matched_asset.price:.2f} → R$ {matched_asset.target:.2f} (`{matched_asset.upside:+.1f}%`)\n"
            f"- **Dividend Yield:** `{matched_asset.dy:.1f}% a.a.` | **ROE:** `{matched_asset.roe:.1f}%` | **Beta:** `{matched_asset.beta:.2f}`\n"
            f"- **Fluxo de Proventos:** {matched_asset.pay_months}"
        )
        speech = (
            f"Analisando {matched_asset.name}, código {matched_asset.ticker}. "
            f"{matched_asset.thesis} "
            f"Hoje negocia a {matched_asset.price:.2f} reais, com preço alvo em {matched_asset.target:.2f} "
            f"e dividendos anuais de {matched_asset.dy:.1f} por cento."
        )
        return AdvisorResponse(
            persona=query.persona,
            reply_markdown=reply,
            speech_script=speech,
            referenced_tickers=[matched_asset.ticker],
            hud_focus_mode="ASSET",
            shader_intensity=0.82,
            assembled_system_prompt=assembled_prompt,
            layers=layers,
        )

    if any(w in q for w in ("banco", "corretora", "taxa", "c6", "itaú", "itau", "inter", "nubank", "btg", "xp")):
        reply = (
            "### Auditoria de Custódia & Corretagem Taxa Zero\n\n"
            "Eliminar fricção de entrada acelera o juro composto líquido:\n"
            "- **Taxa Zero Real (Ações e FIIs):** Íon Itaú, Banco Inter, C6 Invest e Nubank.\n"
            "- **Atenção ao Custo Fixo:** XP cobra R$ 4,90/ordem em ações; BTG isenta FIIs e cobra R$ 4,50 em ordens padrão abaixo da faixa private.\n"
            "- **Regra Larius:** Nunca aceite CDB de varejo abaixo de 100% do CDI enquanto FIIs high-grade como `KNCR11` rendem líquidos e isentos de IR."
        )
        speech = (
            "Na auditoria de custos bancários, minha diretriz é simples: execute suas compras sem pagar corretagem. "
            "Íon Itaú, Inter, C6 e Nubank entregam taxa zero real em ações e fundos imobiliários."
        )
        return AdvisorResponse(
            persona=query.persona,
            reply_markdown=reply,
            speech_script=speech,
            referenced_tickers=["ITUB4", "KNCR11"],
            hud_focus_mode="BROKERS",
            shader_intensity=0.72,
            assembled_system_prompt=assembled_prompt,
            layers=layers,
        )

    if any(w in q for w in ("juro", "imposto", "cdb", "composto", "simula")):
        sim = simulate_compound_wealth(CompoundSimulationRequest())
        reply = (
            "### Assimetria Tributária em 10 Anos (R$ 10k + R$ 1.000/mês)\n\n"
            f"- **Carteira Larius (Proventos Isentos):** `R$ {sim.end_larius_net:,.0f}`\n"
            f"- **CDB 100% CDI Líquido (-{sim.ir_rate_pct:.0f}% IR):** `R$ {sim.end_cdb_100_net:,.0f}` *(R$ {sim.ir_retained_cdb:,.0f} retidos de imposto)*\n"
            f"- **Banco Varejo (85% CDI Líquido):** `R$ {sim.end_bank_85_net:,.0f}`\n\n"
            f"**Alpha líquido sobre banco tradicional:** `+R$ {sim.alpha_over_bank:,.0f}`."
        )
        speech = (
            f"Em dez anos mantendo aportes mensais de mil reais, a isenção de Imposto de Renda sobre dividendos e fundos imobiliários "
            f"gera uma vantagem líquida superior a {int(sim.alpha_over_bank // 1000)} mil reais em relação aos bancos tradicionais."
        )
        return AdvisorResponse(
            persona=query.persona,
            reply_markdown=reply,
            speech_script=speech,
            referenced_tickers=["ITUB4", "SBSP3", "KNCR11"],
            hud_focus_mode="COMPOUND",
            shader_intensity=0.78,
            assembled_system_prompt=assembled_prompt,
            layers=layers,
        )

    alloc = compute_smart_allocation(AllocationRequest(amount_brl=3000.0, profile="PATRIMONIO"))
    summary_lines = "\n".join(
        f"- **{item.ticker}** (`{item.weight_pct}%`): {item.quantity} {'cotas' if item.asset_type == 'FII' else 'ações'} — R$ {item.subtotal_brl:.2f}"
        for item in alloc.items
    )
    reply = (
        "### Diretriz Patrimonial Ativa (Base R$ 3.000/mês)\n\n"
        f"{summary_lines}\n\n"
        f"**Impacto em renda passiva isenta:** `+R$ {alloc.added_monthly_income_brl:.2f}/mês` permanentes + R$ {alloc.cash_reserve_selic_brl:.2f} em reserva Tesouro Selic."
    )
    speech = (
        "Estruturei sua alocação disciplinada em três frentes: Itaú e Kinea para capturar a Selic alta; "
        "Sabesp e Pátria Logística para blindagem contra inflação; e WEG como proteção direta em dólar."
    )
    return AdvisorResponse(
        persona=query.persona,
        reply_markdown=reply,
        speech_script=speech,
        referenced_tickers=[item.ticker for item in alloc.items],
        hud_focus_mode="CORE",
        shader_intensity=0.74,
        assembled_system_prompt=assembled_prompt,
        layers=layers,
    )
