export type HudViewId = 'hud' | 'larius' | 'assets' | 'compound' | 'architecture';

export type AssetType = 'ACAO' | 'FII';
export type MacroGroup = 'SELIC' | 'IPCA' | 'DOLLAR' | 'FII' | 'AVOID';
export type AdvisorPersona = 'fiduciario' | 'quantitativo' | 'auditor_custos';
export type AllocationProfile = 'CONSERVADOR' | 'PATRIMONIO' | 'EXPANSAO';

export interface Asset {
  ticker: string;
  name: string;
  type: AssetType;
  sector: string;
  group: MacroGroup;
  price: number;
  target: number;
  upside: number;
  dy: number;
  pl: number;
  roe: number;
  beta: number;
  volatility: number;
  score: number;
  status: string;
  pay_months: string;
  spark: number[];
  thesis: string;
}

export interface Broker {
  id: string;
  name: string;
  short_code: string;
  subtitle: string;
  fee_stock: string;
  fee_fii: string;
  zero_fee: boolean;
  cdb_rate: string;
  ease_score: string;
  verdict: string;
}

export interface AllocationItem {
  ticker: string;
  name: string;
  asset_type: AssetType;
  role: string;
  weight_pct: number;
  unit_price: number;
  quantity: number;
  subtotal_brl: number;
  monthly_dividend_brl: number;
}

export interface AllocationResponse {
  amount_brl: number;
  profile: AllocationProfile;
  total_allocated_brl: number;
  cash_reserve_selic_brl: number;
  added_monthly_income_brl: number;
  added_annual_income_brl: number;
  items: AllocationItem[];
}

export interface YearlyPoint {
  year: number;
  label: string;
  invested: number;
  larius_net: number;
  cdb_100_net: number;
  bank_85_net: number;
  savings_net: number;
}

export interface CompoundSimulationResponse {
  years: number;
  ir_rate_pct: number;
  total_invested: number;
  end_larius_net: number;
  end_cdb_100_net: number;
  ir_retained_cdb: number;
  end_bank_85_net: number;
  end_savings_net: number;
  alpha_over_bank: number;
  series: YearlyPoint[];
}

export interface PromptEngineeringLayer {
  layer_id: string;
  title: string;
  purpose: string;
  content: string;
}

export interface AdvisorResponse {
  persona: AdvisorPersona;
  reply_markdown: string;
  speech_script: string;
  referenced_tickers: string[];
  hud_focus_mode: 'CORE' | 'ASSET' | 'COMPOUND' | 'BROKERS';
  shader_intensity: number;
  assembled_system_prompt: string;
  layers: PromptEngineeringLayer[];
}

export interface ShaderUniformParams {
  audioEnergy: number;
  turbulence: number;
  displacement: number;
  pointSize: number;
  coreOpacity: number;
}

export interface MacroSnapshot {
  reference_date: string;
  selic_pct: number;
  ipca_pct: number;
  usd_brl: number;
  dbgg_gdp_pct: number;
  ibov_points: number;
  ibov_delta_pct: number;
}
