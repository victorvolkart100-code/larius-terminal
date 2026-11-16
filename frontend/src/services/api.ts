import { ASSETS_CATALOG, BROKERS_CATALOG, DEFAULT_PROMPT_LAYERS } from '../data/quantData';
import {
  AdvisorPersona,
  AdvisorResponse,
  AllocationItem,
  AllocationProfile,
  AllocationResponse,
  Asset,
  Broker,
  CompoundSimulationResponse,
  YearlyPoint,
} from '../types/investimentos';

const API_BASE = '/api';
let fastApiAvailable: boolean | null = null;

function isJsonResponse(res: Response): boolean {
  const ct = res.headers.get('content-type') || '';
  return res.ok && ct.includes('application/json');
}

export async function checkBackendHealth(): Promise<'FASTAPI' | 'LOCAL_TS'> {
  try {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 700);
    const res = await fetch(`${API_BASE}/health`, { signal: controller.signal });
    window.clearTimeout(timer);
    if (isJsonResponse(res)) {
      const payload = (await res.json()) as { status?: string };
      if (payload.status === 'online') {
        fastApiAvailable = true;
        return 'FASTAPI';
      }
    }
  } catch {
    // FastAPI server is not running locally; fallback to deterministic TS calculations
  }
  fastApiAvailable = false;
  return 'LOCAL_TS';
}

export async function fetchAssets(): Promise<Asset[]> {
  if (fastApiAvailable === true) {
    try {
      const res = await fetch(`${API_BASE}/assets`);
      if (isJsonResponse(res)) return (await res.json()) as Asset[];
    } catch {
      // Use typed fallback
    }
  }
  return ASSETS_CATALOG;
}

export async function fetchBrokers(): Promise<Broker[]> {
  if (fastApiAvailable === true) {
    try {
      const res = await fetch(`${API_BASE}/brokers`);
      if (isJsonResponse(res)) return (await res.json()) as Broker[];
    } catch {
      // Use typed fallback
    }
  }
  return BROKERS_CATALOG;
}

export async function requestAllocation(
  amountBrl: number,
  profile: AllocationProfile
): Promise<AllocationResponse> {
  if (fastApiAvailable === true) {
    try {
      const res = await fetch(`${API_BASE}/allocate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount_brl: amountBrl, profile }),
      });
      if (isJsonResponse(res)) return (await res.json()) as AllocationResponse;
    } catch {
      // Fallback below matches FastAPI engine.py deterministically
    }
  }
  return computeLocalAllocation(amountBrl, profile);
}

export async function requestCompoundSimulation(params: {
  initialCapital: number;
  monthlyContribution: number;
  years: number;
  expectedRatePct: number;
  reinvest: boolean;
}): Promise<CompoundSimulationResponse> {
  if (fastApiAvailable === true) {
    try {
      const res = await fetch(`${API_BASE}/simulate/compound`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          initial_capital: params.initialCapital,
          monthly_contribution: params.monthlyContribution,
          years: params.years,
          expected_annual_rate_pct: params.expectedRatePct,
          reinvest_dividends: params.reinvest,
        }),
      });
      if (isJsonResponse(res)) return (await res.json()) as CompoundSimulationResponse;
    } catch {
      // Fallback below matches FastAPI engine.py deterministically
    }
  }
  return computeLocalCompound(params);
}

export async function askLariusAdvisor(
  question: string,
  persona: AdvisorPersona,
  portfolioAmountBrl = 50000
): Promise<AdvisorResponse> {
  if (fastApiAvailable === true) {
    try {
      const res = await fetch(`${API_BASE}/advisor/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          persona,
          portfolio_amount_brl: portfolioAmountBrl,
        }),
      });
      if (isJsonResponse(res)) return (await res.json()) as AdvisorResponse;
    } catch {
      // Fallback matches backend/app/prompt_engineering.py
    }
  }
  return buildLocalAdvisorReply(question, persona);
}

function computeLocalAllocation(amountBrl: number, profile: AllocationProfile): AllocationResponse {
  const baskets: Record<AllocationProfile, Array<[string, number, string]>> = {
    CONSERVADOR: [
      ['KNCR11', 0.35, 'Renda mensal pós-fixada isenta de IR'],
      ['ITUB4', 0.25, 'Carrego bancário com Selic a 13,75%'],
      ['EGIE3', 0.25, 'Concessão elétrica blindada pelo IPCA'],
      ['WEGE3', 0.15, 'Proteção cambial em moeda forte'],
    ],
    PATRIMONIO: [
      ['SBSP3', 0.25, 'Saneamento IPCA+ e ganho operacional'],
      ['ITUB4', 0.2, 'Spread bancário e retorno sobre patrimônio > 22%'],
      ['HGLG11', 0.2, 'Logística prime com desconto patrimonial'],
      ['WEGE3', 0.2, 'Exportadora global dolarizada'],
      ['BBSE3', 0.15, 'Seguridade com dividendo próximo a 10%'],
    ],
    EXPANSAO: [
      ['WEGE3', 0.25, 'Transformadores globais e IA/Data Centers'],
      ['PRIO3', 0.25, 'Receita 100% dólar e baixo custo de extração'],
      ['SBSP3', 0.25, 'Sensibilidade positiva ao fechamento da curva'],
      ['BPAC11', 0.15, 'Crescimento em wealth e investment banking'],
      ['HGLG11', 0.1, 'Imóveis descontados isentos de IR'],
    ],
  };

  let totalAllocated = 0;
  let annualDiv = 0;
  const items: AllocationItem[] = baskets[profile].map(([ticker, weight, role]) => {
    const asset = ASSETS_CATALOG.find((a) => a.ticker === ticker) ?? ASSETS_CATALOG[0];
    const qty = Math.max(1, Math.floor((amountBrl * weight) / asset.price));
    const subtotal = Number((qty * asset.price).toFixed(2));
    const yrDiv = subtotal * (asset.dy / 100);
    totalAllocated += subtotal;
    annualDiv += yrDiv;
    return {
      ticker: asset.ticker,
      name: asset.name,
      asset_type: asset.type,
      role,
      weight_pct: Math.round(weight * 100),
      unit_price: asset.price,
      quantity: qty,
      subtotal_brl: subtotal,
      monthly_dividend_brl: Number((yrDiv / 12).toFixed(2)),
    };
  });

  return {
    amount_brl: amountBrl,
    profile,
    total_allocated_brl: Number(totalAllocated.toFixed(2)),
    cash_reserve_selic_brl: Number(Math.max(0, amountBrl - totalAllocated).toFixed(2)),
    added_monthly_income_brl: Number((annualDiv / 12).toFixed(2)),
    added_annual_income_brl: Number(annualDiv.toFixed(2)),
    items,
  };
}

function futureValue(initial: number, monthly: number, annualRate: number, months: number): number {
  if (months <= 0) return initial;
  const rm = Math.pow(1 + annualRate, 1 / 12) - 1;
  return initial * Math.pow(1 + rm, months) + monthly * ((Math.pow(1 + rm, months) - 1) / rm);
}

function computeLocalCompound(params: {
  initialCapital: number;
  monthlyContribution: number;
  years: number;
  expectedRatePct: number;
  reinvest: boolean;
}): CompoundSimulationResponse {
  const irRate = params.years <= 1 ? 0.2 : params.years === 2 ? 0.175 : 0.15;
  const lariusRate = (params.expectedRatePct / 100) * (params.reinvest ? 1.0 : 0.62);
  const cdb100Rate = 0.1375;
  const bank85Rate = 0.1375 * 0.85;
  const savingsRate = 0.074;

  const series: YearlyPoint[] = [];
  for (let yr = 0; yr <= params.years; yr++) {
    const months = yr * 12;
    const invested = params.initialCapital + params.monthlyContribution * months;
    const lariusVal = futureValue(params.initialCapital, params.monthlyContribution, lariusRate, months);
    const cdbGross = futureValue(params.initialCapital, params.monthlyContribution, cdb100Rate, months);
    const bankGross = futureValue(params.initialCapital, params.monthlyContribution, bank85Rate, months);
    const savVal = futureValue(params.initialCapital, params.monthlyContribution, savingsRate, months);

    series.push({
      year: yr,
      label: `Ano ${yr}`,
      invested: Math.round(invested),
      larius_net: Math.round(lariusVal),
      cdb_100_net: Math.round(cdbGross - Math.max(0, cdbGross - invested) * irRate),
      bank_85_net: Math.round(bankGross - Math.max(0, bankGross - invested) * irRate),
      savings_net: Math.round(savVal),
    });
  }

  const last = series[series.length - 1];
  const cdbGrossEnd = futureValue(params.initialCapital, params.monthlyContribution, cdb100Rate, params.years * 12);
  const irPaid = Math.round(Math.max(0, cdbGrossEnd - last.invested) * irRate);

  return {
    years: params.years,
    ir_rate_pct: Number((irRate * 100).toFixed(1)),
    total_invested: last.invested,
    end_larius_net: last.larius_net,
    end_cdb_100_net: last.cdb_100_net,
    ir_retained_cdb: irPaid,
    end_bank_85_net: last.bank_85_net,
    end_savings_net: last.savings_net,
    alpha_over_bank: last.larius_net - last.bank_85_net,
    series,
  };
}

function buildLocalAdvisorReply(question: string, persona: AdvisorPersona): AdvisorResponse {
  const q = question.toLowerCase();
  const assembled = DEFAULT_PROMPT_LAYERS.map((l) => `[${l.title}]\n${l.content}`).join('\n\n');
  const asset = ASSETS_CATALOG.find(
    (a) => q.includes(a.ticker.toLowerCase()) || q.includes(a.name.toLowerCase())
  );

  if (asset) {
    return {
      persona,
      reply_markdown: `### Parecer ${asset.ticker} — ${asset.name}\n\n${asset.thesis}\n\n- Cotação: R$ ${asset.price.toFixed(2)} → Alvo: R$ ${asset.target.toFixed(2)} (${asset.upside >= 0 ? '+' : ''}${asset.upside}%)\n- Dividend Yield: ${asset.dy.toFixed(1)}% a.a. | ROE: ${asset.roe.toFixed(1)}% | Pagamentos: ${asset.pay_months}`,
      speech_script: `Analisando ${asset.name}, código ${asset.ticker}. ${asset.thesis} Hoje negocia a ${asset.price.toFixed(2)} reais com dividendos de ${asset.dy.toFixed(1)} por cento ao ano.`,
      referenced_tickers: [asset.ticker],
      hud_focus_mode: 'ASSET',
      shader_intensity: 0.85,
      assembled_system_prompt: assembled,
      layers: DEFAULT_PROMPT_LAYERS,
    };
  }

  if (q.includes('banco') || q.includes('corretora') || q.includes('taxa') || q.includes('c6') || q.includes('itau') || q.includes('itaú')) {
    return {
      persona,
      reply_markdown: '### Auditoria de Custódia & Taxa Zero\n\n- **Corretagem R$ 0,00 (Ações e FIIs):** Íon Itaú, Inter Invest, C6 Invest e Nubank.\n- **Cuidado com custo fixo:** XP cobra R$ 4,90/ordem em ações; evite CDBs de varejo abaixo de 100% do CDI.',
      speech_script: 'Na auditoria bancária, minha regra é taxa zero real na execução. Íon Itaú, Inter, C6 e Nubank zeram a corretagem de ações e fundos imobiliários.',
      referenced_tickers: ['ITUB4', 'KNCR11'],
      hud_focus_mode: 'BROKERS',
      shader_intensity: 0.72,
      assembled_system_prompt: assembled,
      layers: DEFAULT_PROMPT_LAYERS,
    };
  }

  if (q.includes('juro') || q.includes('imposto') || q.includes('cdb') || q.includes('simula')) {
    const sim = computeLocalCompound({
      initialCapital: 10000,
      monthlyContribution: 1000,
      years: 10,
      expectedRatePct: 16.2,
      reinvest: true,
    });
    return {
      persona,
      reply_markdown: `### Assimetria Tributária em 10 Anos (R$ 10k + R$ 1.000/mês)\n\n- **Carteira Larius (Isenta IR):** R$ ${sim.end_larius_net.toLocaleString('pt-BR')}\n- **CDB 100% CDI (-${sim.ir_rate_pct}% IR):** R$ ${sim.end_cdb_100_net.toLocaleString('pt-BR')}\n- **Banco Varejo (85% CDI):** R$ ${sim.end_bank_85_net.toLocaleString('pt-BR')}\n\nAlpha líquido acumulado: +R$ ${sim.alpha_over_bank.toLocaleString('pt-BR')}.`,
      speech_script: `Em dez anos investindo mil reais por mês, a isenção de Imposto de Renda nos dividendos gera mais de ${Math.floor(sim.alpha_over_bank / 1000)} mil reais de vantagem sobre os bancos tradicionais.`,
      referenced_tickers: ['ITUB4', 'SBSP3', 'KNCR11'],
      hud_focus_mode: 'COMPOUND',
      shader_intensity: 0.78,
      assembled_system_prompt: assembled,
      layers: DEFAULT_PROMPT_LAYERS,
    };
  }

  return {
    persona,
    reply_markdown: '### Diretriz Patrimonial D.investimentos (R$ 3.000/mês)\n\n- **SBSP3 (25%):** 7 ações — Saneamento IPCA+\n- **ITUB4 (20%):** 16 ações — Carrego Selic 13,75%\n- **HGLG11 (20%):** 3 cotas — FII Logístico isento de IR\n- **WEGE3 (20%):** 11 ações — Hedge em Dólar R$ 5,50\n- **BBSE3 (15%):** 12 ações — Dividendos ~10% a.a.',
    speech_script: 'Estruturei sua alocação em cinco ativos essenciais: Sabesp, Itaú, Pátria Logística, WEG e BB Seguridade, unindo blindagem contra inflação, dólar e renda mensal isenta.',
    referenced_tickers: ['SBSP3', 'ITUB4', 'HGLG11', 'WEGE3', 'BBSE3'],
    hud_focus_mode: 'CORE',
    shader_intensity: 0.74,
    assembled_system_prompt: assembled,
    layers: DEFAULT_PROMPT_LAYERS,
  };
}
