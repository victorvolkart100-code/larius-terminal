export type InvestorTier = 'beginner' | 'intermediate' | 'senior';

export interface AssetNode {
  id: string;
  ticker: string;
  name: string;
  category: 'Renda Fixa' | 'Ações' | 'FIIs' | 'Internacional';
  allocation: number;
  position: [number, number, number];
  color: string;
  metrics: {
    beginnerSummary: string;
    intermediateInfo: string;
    seniorMetrics: {
      dy: string;
      sharpe: number;
      beta: number;
      durationOrPvp: string;
    };
  };
}

export const SAMPLE_PORTFOLIO: AssetNode[] = [
  {
    id: 'tesouro_selic',
    ticker: 'LFT / Selic',
    name: 'Tesouro Selic Pós-Fixado',
    category: 'Renda Fixa',
    allocation: 40,
    position: [-1.8, 1.4, -1.2],
    color: '#10B981',
    metrics: {
      beginnerSummary: 'Base segura da carteira. Rende diariamente acompanhando a taxa básica de juros com liquidez imediata.',
      intermediateInfo: 'Amortecedor de volatilidade em cenários de juros elevados (Selic a 13,75%).',
      seniorMetrics: { dy: '13,75% a.a.', sharpe: 2.1, beta: 0.02, durationOrPvp: 'Dur: 0.1a' },
    },
  },
  {
    id: 'utilities_b3',
    ticker: 'EGIE3 / TAEE11',
    name: 'Transmissão & Energia',
    category: 'Ações',
    allocation: 25,
    position: [-0.4, 2.2, 0.8],
    color: '#FF6B00',
    metrics: {
      beginnerSummary: 'Empresas de energia elétrica com receitas previsíveis e pagamento frequente de dividendos.',
      intermediateInfo: 'Receita indexada à inflação (IGP-M/IPCA) com alta resiliência em desaceleração do PIB.',
      seniorMetrics: { dy: '9,4% a.a.', sharpe: 1.45, beta: 0.58, durationOrPvp: 'P/VP: 1.62' },
    },
  },
  {
    id: 'fiis_tijolo',
    ticker: 'HGLG11 / KNCR11',
    name: 'Fundos Imobiliários Híbridos',
    category: 'FIIs',
    allocation: 20,
    position: [1.1, 1.8, 0.3],
    color: '#F59E0B',
    metrics: {
      beginnerSummary: 'Aluguéis mensais isentos de IR na pessoa física, gerando renda passiva recorrente.',
      intermediateInfo: 'Combinação de recebíveis atrelados ao CDI com galpões logísticos descontados.',
      seniorMetrics: { dy: '11,2% a.a.', sharpe: 1.28, beta: 0.44, durationOrPvp: 'P/VP: 0.94' },
    },
  },
  {
    id: 'exporters_b3',
    ticker: 'VALE3 / WEGE3',
    name: 'Exportadoras & Câmbio',
    category: 'Internacional',
    allocation: 15,
    position: [2.1, 2.6, 1.5],
    color: '#38BDF8',
    metrics: {
      beginnerSummary: 'Grandes empresas brasileiras com receitas em dólar, protegendo seu patrimônio contra variações cambiais.',
      intermediateInfo: 'Hedge natural contra risco fiscal doméstico e exposição ao ciclo global de commodities/indústria.',
      seniorMetrics: { dy: '7,8% a.a.', sharpe: 1.12, beta: 1.15, durationOrPvp: 'P/VP: 1.85' },
    },
  },
];
