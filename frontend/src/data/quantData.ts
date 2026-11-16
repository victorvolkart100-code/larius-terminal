import { Asset, Broker, MacroSnapshot, PromptEngineeringLayer } from '../types/investimentos';

export const MACRO_SNAPSHOT: MacroSnapshot = {
  reference_date: 'Novembro/2026',
  selic_pct: 13.75,
  ipca_pct: 5.22,
  usd_brl: 5.50,
  dbgg_gdp_pct: 82.4,
  ibov_points: 129480,
  ibov_delta_pct: 0.84,
};

export const ASSETS_CATALOG: Asset[] = [
  {
    ticker: 'ITUB4', name: 'Itaú Unibanco', type: 'ACAO', sector: 'Bancos', group: 'SELIC',
    price: 36.40, target: 44.50, upside: 22.3, dy: 7.8, pl: 8.4, roe: 22.4, beta: 0.82, volatility: 16.5,
    score: 96, status: 'Top Core', pay_months: 'Mensal + JCP', spark: [31.2, 32.1, 33.4, 34.0, 35.1, 36.4],
    thesis: 'Líder de rentabilidade na América Latina com ROE de 22,4%, beneficiado pela Selic a 13,75%.',
  },
  {
    ticker: 'BBSE3', name: 'BB Seguridade', type: 'ACAO', sector: 'Seguridade', group: 'SELIC',
    price: 37.10, target: 43.80, upside: 18.1, dy: 9.6, pl: 9.1, roe: 74.0, beta: 0.58, volatility: 13.2,
    score: 95, status: 'Renda', pay_months: 'Fev / Ago', spark: [32.8, 33.9, 34.5, 35.2, 36.1, 37.1],
    thesis: 'Caixa bilionário aplicado ao CDI e zero dívida; protege a carteira mantendo Dividend Yield próximo a 10%.',
  },
  {
    ticker: 'SBSP3', name: 'Sabesp', type: 'ACAO', sector: 'Saneamento', group: 'IPCA',
    price: 94.20, target: 126.00, upside: 33.8, dy: 3.4, pl: 11.8, roe: 17.2, beta: 0.74, volatility: 18.0,
    score: 95, status: 'Top Core', pay_months: 'Mai / Dez', spark: [78.5, 82.0, 85.4, 88.9, 91.5, 94.2],
    thesis: 'Pós-privatização com ganho de eficiência operacional e contratos atrelados à inflação.',
  },
  {
    ticker: 'WEGE3', name: 'WEG S.A.', type: 'ACAO', sector: 'Indústria Global', group: 'DOLLAR',
    price: 52.90, target: 66.50, upside: 25.7, dy: 1.8, pl: 31.0, roe: 34.2, beta: 0.79, volatility: 21.4,
    score: 96, status: 'Hedge USD', pay_months: 'Mar / Ago', spark: [43.0, 45.2, 47.9, 49.5, 51.0, 52.9],
    thesis: 'Mais de 55% da receita em moeda forte exportando transformadores globais para data centers e redes elétricas.',
  },
  {
    ticker: 'PRIO3', name: 'PRIO', type: 'ACAO', sector: 'Petróleo', group: 'DOLLAR',
    price: 44.60, target: 61.00, upside: 36.8, dy: 2.2, pl: 6.8, roe: 28.5, beta: 1.08, volatility: 26.2,
    score: 93, status: 'Upside USD', pay_months: 'Eventual', spark: [38.2, 39.6, 41.0, 42.1, 43.4, 44.6],
    thesis: 'Lifting cost abaixo de US$ 7/barril e geração de caixa em dólar com R$/USD em 5,50.',
  },
  {
    ticker: 'EGIE3', name: 'Engie Brasil', type: 'ACAO', sector: 'Energia Elétrica', group: 'IPCA',
    price: 43.80, target: 52.20, upside: 19.2, dy: 7.4, pl: 9.9, roe: 23.6, beta: 0.52, volatility: 12.8,
    score: 92, status: 'Defensiva', pay_months: 'Mai / Nov', spark: [39.4, 40.1, 41.0, 41.8, 42.9, 43.8],
    thesis: 'Contratos de transmissão e geração reajustados pelo IPCA com forte previsibilidade de proventos.',
  },
  {
    ticker: 'KNCR11', name: 'Kinea Rendimentos', type: 'FII', sector: 'FII Papel CDI', group: 'FII',
    price: 104.50, target: 108.00, upside: 3.3, dy: 13.4, pl: 1.01, roe: 13.4, beta: 0.18, volatility: 6.2,
    score: 95, status: 'Isento IR', pay_months: 'Mensal (Dia 13)', spark: [101.2, 102.0, 102.6, 103.3, 103.9, 104.5],
    thesis: 'Carteira high-grade indexada ao CDI entregando renda mensal líquida isenta de IR para pessoa física.',
  },
  {
    ticker: 'HGLG11', name: 'Pátria Logística', type: 'FII', sector: 'FII Tijolo', group: 'FII',
    price: 152.00, target: 174.00, upside: 14.5, dy: 8.9, pl: 0.93, roe: 8.9, beta: 0.31, volatility: 9.4,
    score: 94, status: 'Desconto', pay_months: 'Mensal (Dia 14)', spark: [144.0, 145.6, 147.2, 149.0, 150.5, 152.0],
    thesis: 'Galpões logísticos triple-A negociando com 7% de desconto patrimonial e aluguéis corrigidos pelo IPCA.',
  },
  {
    ticker: 'BPAC11', name: 'BTG Pactual', type: 'ACAO', sector: 'Banco de Investimentos', group: 'SELIC',
    price: 38.20, target: 47.50, upside: 24.3, dy: 3.2, pl: 10.4, roe: 23.1, beta: 1.04, volatility: 22.0,
    score: 92, status: 'Crescimento', pay_months: 'Fev / Ago', spark: [32.0, 33.4, 34.9, 36.1, 37.0, 38.2],
    thesis: 'Expansão consistente em wealth management, crédito corporativo e tesouraria.',
  },
  {
    ticker: 'MGLU3_AVOID', name: 'Varejo Alavancado', type: 'ACAO', sector: 'Varejo Discricionário', group: 'AVOID',
    price: 9.40, target: 7.20, upside: -23.4, dy: 0.0, pl: 0.0, roe: -4.5, beta: 1.65, volatility: 44.0,
    score: 28, status: 'Evitado', pay_months: 'Sem dividendos', spark: [13.2, 12.1, 11.4, 10.6, 9.9, 9.4],
    thesis: 'Margens comprimidas pelo custo da dívida a 13,75% a.a. e forte competição cross-border.',
  },
];

export const BROKERS_CATALOG: Broker[] = [
  {
    id: 'ion_itau', name: 'Íon Itaú', short_code: 'IT', subtitle: 'Banco Itaú Unibanco',
    fee_stock: 'R$ 0,00', fee_fii: 'R$ 0,00', zero_fee: true, cdb_rate: '100% CDI', ease_score: '9.7/10',
    verdict: 'Melhor combinação de solidez bancária secular com corretagem zero real em Ações e FIIs.',
  },
  {
    id: 'inter', name: 'Inter Invest', short_code: 'IN', subtitle: 'Banco Inter',
    fee_stock: 'R$ 0,00', fee_fii: 'R$ 0,00', zero_fee: true, cdb_rate: '102% CDI', ease_score: '9.5/10',
    verdict: 'Interface muito fluida para iniciantes, taxa zero na B3 e conta global integrada para dólar.',
  },
  {
    id: 'c6', name: 'C6 Invest', short_code: 'C6', subtitle: 'C6 Bank',
    fee_stock: 'R$ 0,00', fee_fii: 'R$ 0,00', zero_fee: true, cdb_rate: '102% CDI', ease_score: '9.3/10',
    verdict: 'Home broker simplificado sem corretagem na B3 e CDBs acessíveis de liquidez diária.',
  },
  {
    id: 'nubank', name: 'Nubank / NuInvest', short_code: 'NU', subtitle: 'Nu Holdings',
    fee_stock: 'R$ 0,00', fee_fii: 'R$ 0,00', zero_fee: true, cdb_rate: '100% CDI', ease_score: '9.6/10',
    verdict: 'Experiência direta no app para primeiros aportes em FIIs e Tesouro Selic sem custos.',
  },
  {
    id: 'btg', name: 'BTG Pactual', short_code: 'BP', subtitle: 'Banco BTG Pactual',
    fee_stock: 'R$ 4,50*', fee_fii: 'R$ 0,00', zero_fee: false, cdb_rate: '104% CDI', ease_score: '9.1/10',
    verdict: 'Plataforma institucional completa; FIIs são isentos e ações ficam gratuitas em faixas de custódia.',
  },
  {
    id: 'xp', name: 'XP Investimentos', short_code: 'XP', subtitle: 'XP Inc.',
    fee_stock: 'R$ 4,90', fee_fii: 'R$ 0,00', zero_fee: false, cdb_rate: '101% CDI', ease_score: '8.6/10',
    verdict: 'Prateleira ampla de renda fixa, mas exige atenção à taxa de R$ 4,90/ordem em ações.',
  },
];

export const DEFAULT_PROMPT_LAYERS: PromptEngineeringLayer[] = [
  {
    layer_id: 'L1_PERSONA',
    title: 'Camada 1 · Persona Fiduciária',
    purpose: 'Define postura ética sem conflito de comissão e tom executivo claro.',
    content: 'Atue como Consultor Patrimonial Sênior CVM 19 (modelo fee-based, livre de conflito de comissão), priorizando preservação de capital e renda isenta.',
  },
  {
    layer_id: 'L2_MACRO_CONTEXT',
    title: 'Camada 2 · Injeção Macroeconômica',
    purpose: 'Ancora recomendações nas taxas vigentes B3/BACEN.',
    content: 'Data-base: Novembro/2026 | Selic: 13,75% a.a. | IPCA: 5,22% | USD/BRL: R$ 5,50.',
  },
  {
    layer_id: 'L3_GUARDRAILS',
    title: 'Camada 3 · Guardrails CVM 19 & Risco',
    purpose: 'Evita alavancagem excessiva e exige clareza tributária.',
    content: 'Nunca prometa retorno garantido em renda variável. Contraste sempre isenção de dividendos/FIIs contra a tabela regressiva de IR.',
  },
  {
    layer_id: 'L4_VOICE_CADENCE',
    title: 'Camada 4 · Síntese HUD + Cadência Vocal',
    purpose: 'Sincroniza resposta textual com script limpo para TTS e shader uAudioEnergy.',
    content: 'Entregue telemetria em markdown limpo e roteiro natural sem símbolos técnicos para narração sincronizada ao núcleo 3D.',
  },
];
