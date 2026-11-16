import { ASSETS_CATALOG, BROKERS_CATALOG, MACRO_SNAPSHOT } from '../data/quantData';
import {
  AdvisorPublicResponse,
  AllocationItem,
  AllocationResponse,
  Asset,
  Broker,
  CompoundSimulationResponse,
  ExperienceLevel,
  FinancialParamsAdmin,
  MacroSnapshot,
  PromptLayerAdmin,
  RiskProfile,
  SystemLogEntry,
  VoiceConfigAdminView,
  YearlyPoint,
} from '../types/investimentos';

const API_BASE = '/api';
const ADMIN_TOKEN_KEY = 'larius_architect_token';
let fastApiAvailable: boolean | null = null;

function isJsonResponse(res: Response): boolean {
  const ct = res.headers.get('content-type') || '';
  return res.ok && ct.includes('application/json');
}

export function getStoredAdminToken(): string | null {
  return window.sessionStorage.getItem(ADMIN_TOKEN_KEY);
}

export function clearStoredAdminToken(): void {
  window.sessionStorage.removeItem(ADMIN_TOKEN_KEY);
}

function adminAuthHeaders(): HeadersInit {
  const token = getStoredAdminToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function checkBackendOnline(): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 700);
    const res = await fetch(`${API_BASE}/health`, { signal: controller.signal });
    window.clearTimeout(timer);
    if (isJsonResponse(res)) {
      const payload = (await res.json()) as { status?: string };
      if (payload.status === 'online') {
        fastApiAvailable = true;
        return true;
      }
    }
  } catch {
    // FastAPI server offline
  }
  fastApiAvailable = false;
  return false;
}

export async function fetchMacroSnapshot(): Promise<MacroSnapshot> {
  if (fastApiAvailable === true) {
    try {
      const res = await fetch(`${API_BASE}/market/telemetry`);
      if (isJsonResponse(res)) return (await res.json()) as MacroSnapshot;
    } catch {
      // Fallback below
    }
  }
  return MACRO_SNAPSHOT;
}

export async function fetchAssets(): Promise<Asset[]> {
  if (fastApiAvailable === true) {
    try {
      const res = await fetch(`${API_BASE}/assets`);
      if (isJsonResponse(res)) return (await res.json()) as Asset[];
    } catch {
      // Fallback below
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
      // Fallback below
    }
  }
  return BROKERS_CATALOG;
}

export async function requestAllocation(
  amountBrl: number,
  riskProfile: RiskProfile
): Promise<AllocationResponse> {
  if (fastApiAvailable === true) {
    try {
      const res = await fetch(`${API_BASE}/allocate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount_brl: amountBrl, risk_profile: riskProfile }),
      });
      if (isJsonResponse(res)) return (await res.json()) as AllocationResponse;
    } catch {
      // Fallback below
    }
  }
  return computeLocalAllocation(amountBrl, riskProfile);
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
      // Fallback below
    }
  }
  return computeLocalCompound(params);
}

export async function askLariusAdvisor(
  question: string,
  riskProfile: RiskProfile,
  experienceLevel: ExperienceLevel,
  portfolioAmountBrl = 50000
): Promise<AdvisorPublicResponse> {
  if (fastApiAvailable === true) {
    try {
      const res = await fetch(`${API_BASE}/advisor/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          risk_profile: riskProfile,
          experience_level: experienceLevel,
          portfolio_amount_brl: portfolioAmountBrl,
        }),
      });
      if (isJsonResponse(res)) return (await res.json()) as AdvisorPublicResponse;
    } catch {
      // Fallback below
    }
  }
  return buildLocalPublicReply(question, riskProfile, experienceLevel);
}

/**
 * Public UI sends ONLY plain text to /api/lariustts.
 * Cloned Voice ID and provider API key are completely isolated in Python backend.
 */
export async function requestLariusSpeechAudio(text: string): Promise<Blob | null> {
  if (fastApiAvailable === false) return null;
  try {
    const res = await fetch(`${API_BASE}/lariustts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const ct = res.headers.get('content-type') || '';
    if (res.ok && ct.startsWith('audio/')) {
      return await res.blob();
    }
  } catch {
    // Unconfigured or offline backend
  }
  return null;
}

// ==================== PROTECTED /ADMIN ARCHITECT ENDPOINTS ====================

export async function loginAdmin(privateKey: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`${API_BASE}/admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ private_key: privateKey }),
    });
    const ct = res.headers.get('content-type') || '';
    if (!ct.includes('application/json')) {
      return {
        ok: false,
        error: 'Servidor FastAPI offline. Inicie o back-end Python com .env para autenticar /admin.',
      };
    }
    const data = (await res.json()) as { authenticated?: boolean; token?: string; detail?: string };
    if (res.ok && data.authenticated && data.token) {
      window.sessionStorage.setItem(ADMIN_TOKEN_KEY, data.token);
      fastApiAvailable = true;
      return { ok: true };
    }
    return { ok: false, error: data.detail || 'Chave privada inválida.' };
  } catch {
    return {
      ok: false,
      error: 'Não foi possível conectar ao FastAPI (/api/admin/login). Verifique se o back-end está em execução.',
    };
  }
}

export async function logoutAdmin(): Promise<void> {
  clearStoredAdminToken();
  try {
    await fetch(`${API_BASE}/admin/logout`, { method: 'POST', credentials: 'include' });
  } catch {
    // Ignore offline logout error
  }
}

export async function verifyAdminSession(): Promise<boolean> {
  const token = getStoredAdminToken();
  if (!token) return false;
  try {
    const res = await fetch(`${API_BASE}/admin/session`, {
      credentials: 'include',
      headers: adminAuthHeaders(),
    });
    return isJsonResponse(res);
  } catch {
    return false;
  }
}

export async function fetchAdminVoiceConfig(): Promise<VoiceConfigAdminView | null> {
  const res = await fetch(`${API_BASE}/admin/voice-config`, {
    credentials: 'include',
    headers: adminAuthHeaders(),
  });
  return isJsonResponse(res) ? ((await res.json()) as VoiceConfigAdminView) : null;
}

export async function saveAdminVoiceConfig(payload: {
  provider: VoiceConfigAdminView['provider'];
  voice_id: string;
  api_key?: string;
  xtts_endpoint: string;
  stability: number;
  similarity_boost: number;
  speed: number;
  pitch_shift: number;
}): Promise<VoiceConfigAdminView | null> {
  const res = await fetch(`${API_BASE}/admin/voice-config`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...adminAuthHeaders() },
    body: JSON.stringify(payload),
  });
  return isJsonResponse(res) ? ((await res.json()) as VoiceConfigAdminView) : null;
}

export async function fetchAdminFinancialParams(): Promise<FinancialParamsAdmin | null> {
  const res = await fetch(`${API_BASE}/admin/financial-params`, {
    credentials: 'include',
    headers: adminAuthHeaders(),
  });
  return isJsonResponse(res) ? ((await res.json()) as FinancialParamsAdmin) : null;
}

export async function saveAdminFinancialParams(
  payload: FinancialParamsAdmin
): Promise<FinancialParamsAdmin | null> {
  const res = await fetch(`${API_BASE}/admin/financial-params`, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...adminAuthHeaders() },
    body: JSON.stringify(payload),
  });
  return isJsonResponse(res) ? ((await res.json()) as FinancialParamsAdmin) : null;
}

export async function fetchAdminPromptBlueprint(
  riskProfile: RiskProfile,
  experienceLevel: ExperienceLevel
): Promise<{ assembled_system_prompt: string; layers: PromptLayerAdmin[] } | null> {
  const res = await fetch(
    `${API_BASE}/admin/prompt-blueprint?risk_profile=${riskProfile}&experience_level=${experienceLevel}`,
    {
      credentials: 'include',
      headers: adminAuthHeaders(),
    }
  );
  return isJsonResponse(res)
    ? ((await res.json()) as { assembled_system_prompt: string; layers: PromptLayerAdmin[] })
    : null;
}

export async function fetchAdminLogs(): Promise<SystemLogEntry[]> {
  const res = await fetch(`${API_BASE}/admin/logs`, {
    credentials: 'include',
    headers: adminAuthHeaders(),
  });
  return isJsonResponse(res) ? ((await res.json()) as SystemLogEntry[]) : [];
}

// ==================== DETERMINISTIC INVESTOR FALLBACKS (ZERO SECRETS) ====================

function computeLocalAllocation(amountBrl: number, riskProfile: RiskProfile): AllocationResponse {
  const baskets: Record<RiskProfile, Array<[string, number, string]>> = {
    CONSERVADOR: [
      ['KNCR11', 0.35, 'Renda mensal pós-fixada isenta de IR'],
      ['ITUB4', 0.25, 'Carrego bancário com Selic elevada'],
      ['EGIE3', 0.25, 'Concessão elétrica blindada pelo IPCA'],
      ['WEGE3', 0.15, 'Proteção cambial em moeda forte'],
    ],
    MODERADO: [
      ['SBSP3', 0.25, 'Saneamento IPCA+ e ganho operacional'],
      ['ITUB4', 0.2, 'Spread bancário e retorno sobre patrimônio > 22%'],
      ['HGLG11', 0.2, 'Logística prime com desconto patrimonial'],
      ['WEGE3', 0.2, 'Exportadora global dolarizada'],
      ['BBSE3', 0.15, 'Seguridade com dividendo próximo a 10%'],
    ],
    ARROJADO: [
      ['WEGE3', 0.25, 'Indústria global dolarizada e expansão internacional'],
      ['PRIO3', 0.25, 'Receita 100% dólar e baixo custo de extração'],
      ['SBSP3', 0.25, 'Sensibilidade positiva ao fechamento da curva'],
      ['BPAC11', 0.15, 'Crescimento em wealth e investment banking'],
      ['HGLG11', 0.1, 'FII descontado isento de IR'],
    ],
  };

  let totalAllocated = 0;
  let annualDiv = 0;
  const items: AllocationItem[] = baskets[riskProfile].map(([ticker, weight, role]) => {
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
    risk_profile: riskProfile,
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
    expected_rate_pct: params.expectedRatePct,
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

function buildLocalPublicReply(
  question: string,
  riskProfile: RiskProfile,
  experienceLevel: ExperienceLevel
): AdvisorPublicResponse {
  const q = question.toLowerCase();
  const asset = ASSETS_CATALOG.find(
    (a) => q.includes(a.ticker.toLowerCase()) || q.includes(a.name.toLowerCase())
  );

  if (asset) {
    const detail =
      experienceLevel === 'INICIANTE'
        ? asset.thesis
        : `${asset.thesis} P/L ou P/VP: ${asset.pl.toFixed(2)} | ROE: ${asset.roe.toFixed(1)}% | Beta: ${asset.beta.toFixed(2)}.`;
    return {
      risk_profile: riskProfile,
      experience_level: experienceLevel,
      reply_markdown: `### Parecer ${asset.ticker} — ${asset.name}\n\n${detail}\n\n- Cotação: R$ ${asset.price.toFixed(2)} → Alvo: R$ ${asset.target.toFixed(2)} (${asset.upside >= 0 ? '+' : ''}${asset.upside}%)\n- Dividend Yield: ${asset.dy.toFixed(1)}% a.a. | Pagamentos: ${asset.pay_months}`,
      speech_script: `Analisando ${asset.name}, código ${asset.ticker}. ${asset.thesis} Hoje negocia a ${asset.price.toFixed(2)} reais com dividendos de ${asset.dy.toFixed(1)} por cento ao ano.`,
      referenced_tickers: [asset.ticker],
      hud_focus_mode: 'ASSET',
    };
  }

  if (q.includes('banco') || q.includes('corretora') || q.includes('taxa') || q.includes('c6') || q.includes('itau') || q.includes('itaú')) {
    return {
      risk_profile: riskProfile,
      experience_level: experienceLevel,
      reply_markdown: '### Comparativo de Bancos & Taxa Zero\n\n- **Corretagem R$ 0,00 (Ações e FIIs):** Íon Itaú, Inter Invest, C6 Invest e Nubank.\n- **Atenção ao custo fixo:** XP cobra R$ 4,90/ordem em ações; evite CDBs abaixo de 100% do CDI.',
      speech_script: 'Na escolha da corretora, prefira instituições com corretagem zero real em ações e fundos imobiliários, como Íon Itaú, Inter, C6 e Nubank.',
      referenced_tickers: ['ITUB4', 'KNCR11'],
      hud_focus_mode: 'BROKERS',
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
      risk_profile: riskProfile,
      experience_level: experienceLevel,
      reply_markdown: `### Simulação Líquida em 10 Anos (R$ 10k + R$ 1.000/mês)\n\n- **Carteira Recomendada (Isenta IR):** R$ ${sim.end_larius_net.toLocaleString('pt-BR')}\n- **CDB 100% CDI (-${sim.ir_rate_pct}% IR):** R$ ${sim.end_cdb_100_net.toLocaleString('pt-BR')}\n- **Banco Tradicional (85% CDI):** R$ ${sim.end_bank_85_net.toLocaleString('pt-BR')}\n\nDiferença líquida estimada: +R$ ${sim.alpha_over_bank.toLocaleString('pt-BR')}.`,
      speech_script: `Em dez anos mantendo aportes mensais de mil reais, a isenção de Imposto de Renda sobre dividendos e fundos imobiliários gera mais de ${Math.floor(sim.alpha_over_bank / 1000)} mil reais de vantagem líquida sobre bancos tradicionais.`,
      referenced_tickers: ['ITUB4', 'SBSP3', 'KNCR11'],
      hud_focus_mode: 'COMPOUND',
    };
  }

  const alloc = computeLocalAllocation(3000, riskProfile);
  const lines = alloc.items
    .map((item) => `- **${item.ticker}** (${item.weight_pct}%): ${item.quantity} ${item.asset_type === 'FII' ? 'cotas' : 'ações'} — ${item.role}`)
    .join('\n');

  return {
    risk_profile: riskProfile,
    experience_level: experienceLevel,
    reply_markdown: `### Alocação Recomendada — Perfil ${riskProfile}\n\n${lines}\n\nRenda mensal estimada adicionada: +R$ ${alloc.added_monthly_income_brl.toFixed(2)}/mês isentos de IR.`,
    speech_script: `Para o seu perfil ${riskProfile.toLowerCase()}, estruturei uma alocação equilibrada para capturar juros, inflação e dólar, somando renda mensal isenta de Imposto de Renda.`,
    referenced_tickers: alloc.items.map((x) => x.ticker),
    hud_focus_mode: 'CORE',
  };
}
