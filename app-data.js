// ============================================================================
// LARIUS OBSIDIAN PRIVATE WEALTH TERMINAL — DATA & ANALYTICS ENGINE
// Palette: Phantom Black (#030304), Obsidian (#09090B), Brushed Titanium (#D4D4D8)
// ============================================================================

const ASSETS_DB = [
  { ticker: "ITUB4", name: "Itaú Unibanco", type: "ACAO", group: "SELIC", starter: true, status: "Compra Forte", sector: "Bancos & Crédito", price: 36.40, target: 44.50, upside: 22.3, dy: 8.6, pl: 7.8, roe: 22.4, beta: 0.62, score: 96, spark: [31, 32.2, 33.1, 32.8, 34.5, 35.1, 36.4], payMonths: "Mensal (Dia 01) + Trimestral", thesis: "Ganha diretamente com a Selic em 13,75% a.a. no spread bancário e distribui dividendos e JCP regulares com ROE de 22,4%." },
  { ticker: "BBSE3", name: "BB Seguridade", type: "ACAO", group: "SELIC", starter: true, status: "Compra Forte", sector: "Seguros & Previdência", price: 34.80, target: 41.80, upside: 20.1, dy: 10.4, pl: 8.4, roe: 74.0, beta: 0.48, score: 95, spark: [30.5, 31.0, 31.8, 32.9, 33.4, 34.1, 34.8], payMonths: "Fev / Ago (Semestral Forte)", thesis: "Zero dívida financeira e reservas técnicas aplicadas a 13,75% a.a., repassando mais de 85% do lucro líquido aos acionistas." },
  { ticker: "WEGE3", name: "WEG S.A.", type: "ACAO", group: "DOLLAR", starter: true, status: "Blindagem USD", sector: "Bens de Capital Global", price: 52.90, target: 66.50, upside: 25.7, dy: 2.4, pl: 27.5, roe: 35.6, beta: 0.75, score: 95, spark: [41.2, 43.8, 45.1, 47.9, 49.5, 51.2, 52.9], payMonths: "Mar / Jul / Set / Dez", thesis: "Mais de 56% da receita em Dólar e Euro exportando transformadores e subestações para data centers nos EUA e Europa." },
  { ticker: "SBSP3", name: "Sabesp", type: "ACAO", group: "IPCA", starter: true, status: "Top Alpha", sector: "Saneamento Básico", price: 94.20, target: 124.00, upside: 31.6, dy: 3.8, pl: 11.2, roe: 16.5, beta: 0.59, score: 94, spark: [74.0, 78.5, 81.2, 85.0, 88.9, 91.4, 94.2], payMonths: "Abr / Nov", thesis: "Demanda inelástica com tarifa reajustada pela inflação (IPCA) e ganho acelerado de margem operacional pós-privatização." },
  { ticker: "EGIE3", name: "Engie Brasil", type: "ACAO", group: "IPCA", starter: true, status: "Acumular", sector: "Geração & Transmissão", price: 42.10, target: 51.00, upside: 21.1, dy: 7.9, pl: 9.8, roe: 34.2, beta: 0.52, score: 93, spark: [38.0, 38.9, 39.4, 40.2, 40.8, 41.5, 42.1], payMonths: "Mai / Ago / Dez", thesis: "Contratos longos indexados ao IPCA (5,22%) e forte destravamento de valor com o início dos cortes da Selic em março de 2027." },
  { ticker: "BBAS3", name: "Banco do Brasil", type: "ACAO", group: "SELIC", starter: true, status: "Descontada", sector: "Bancos & Agronegócio", price: 26.80, target: 34.00, upside: 26.9, dy: 10.8, pl: 4.3, roe: 20.1, beta: 0.68, score: 92, spark: [23.9, 24.4, 24.8, 25.5, 25.9, 26.3, 26.8], payMonths: "Fev / Mai / Ago / Nov (8x/ano)", thesis: "Negocia a apenas 4,3x lucro com carteira líder no agronegócio e dividendos projetados acima de 10,5% a.a." },
  { ticker: "TAEE11", name: "Taesa", type: "ACAO", group: "IPCA", starter: true, status: "Renda Pura", sector: "Transmissão Elétrica", price: 35.20, target: 40.50, upside: 15.1, dy: 9.6, pl: 8.9, roe: 19.3, beta: 0.44, score: 91, spark: [33.1, 33.5, 33.9, 34.2, 34.6, 34.9, 35.2], payMonths: "Mai / Ago / Nov / Dez", thesis: "Receita Anual Permitida (RAP) garantida por disponibilidade de linha e corrigida por IPCA e IGP-M." },
  { ticker: "VIVT3", name: "Vivo (Telefônica)", type: "ACAO", group: "IPCA", starter: true, status: "Defensiva", sector: "Telecom & Fibra", price: 51.80, target: 62.00, upside: 19.7, dy: 7.5, pl: 13.8, roe: 9.1, beta: 0.46, score: 90, spark: [46.5, 47.2, 48.4, 49.1, 50.0, 50.9, 51.8], payMonths: "Abr / Jul / Out / Dez", thesis: "Caixa robusto, baixa alavancagem e compromisso de distribuir 100% ou mais do lucro líquido via dividendos e redução de capital." },
  { ticker: "PRIO3", name: "PRIO S.A.", type: "ACAO", group: "DOLLAR", starter: false, status: "Forte Upside", sector: "Óleo & Gás Independente", price: 43.50, target: 58.50, upside: 34.5, dy: 3.2, pl: 6.4, roe: 30.4, beta: 1.08, score: 91, spark: [36.8, 38.0, 39.2, 40.1, 41.5, 42.4, 43.5], payMonths: "Recompra + Dividendos Táticos", thesis: "Receita 100% dolarizada (R$ 5,50), lifting cost abaixo de US$ 7/barril e expansão de produção com o campo de Wahoo." },
  { ticker: "SUZB3", name: "Suzano S.A.", type: "ACAO", group: "DOLLAR", starter: false, status: "Exportadora", sector: "Celulose & Papel", price: 56.40, target: 71.00, upside: 25.9, dy: 4.1, pl: 7.9, roe: 20.3, beta: 0.82, score: 89, spark: [49.0, 50.4, 51.8, 53.0, 54.2, 55.1, 56.4], payMonths: "Mai / Dez", thesis: "Líder mundial em celulose de fibra curta, colhendo forte geração de caixa livre em dólar após conclusão do Projeto Cerrado." },
  { ticker: "CPFE3", name: "CPFL Energia", type: "ACAO", group: "IPCA", starter: true, status: "Acumular", sector: "Distribuição & Geração", price: 34.90, target: 41.50, upside: 18.9, dy: 8.8, pl: 7.6, roe: 26.8, beta: 0.54, score: 90, spark: [31.5, 32.0, 32.7, 33.4, 33.9, 34.4, 34.9], payMonths: "Mai / Jun / Nov", thesis: "Concessões premium no interior de SP e Sul com repasse inflacionário e dividendos elevados." },
  { ticker: "BPAC11", name: "BTG Pactual", type: "ACAO", group: "SELIC", starter: false, status: "Crescimento", sector: "Private Banking & Asset", price: 33.80, target: 42.90, upside: 26.9, dy: 4.2, pl: 10.5, roe: 23.1, beta: 0.92, score: 91, spark: [28.9, 29.8, 30.6, 31.4, 32.2, 33.0, 33.8], payMonths: "Fev / Ago (Semestral)", thesis: "Captação recorde em Wealth Management e tesouraria institucional beneficiada pela Selic em 13,75%." },
  { ticker: "VALE3", name: "Vale S.A.", type: "ACAO", group: "DOLLAR", starter: false, status: "Descontada", sector: "Mineração Global", price: 61.20, target: 74.50, upside: 21.7, dy: 8.9, pl: 5.8, roe: 21.5, beta: 0.98, score: 88, spark: [56.0, 57.1, 57.9, 58.8, 59.5, 60.4, 61.2], payMonths: "Mar / Set (Semestral Forte)", thesis: "Exportadora de minério de alta pureza em dólar negociando a 5,8x lucro com elevado retorno de caixa." },
  { ticker: "PETR4", name: "Petrobras PN", type: "ACAO", group: "DOLLAR", starter: false, status: "Geradora Caixa", sector: "Energia & Pré-Sal", price: 37.90, target: 45.00, upside: 18.7, dy: 12.4, pl: 4.4, roe: 28.0, beta: 1.02, score: 87, spark: [34.2, 35.0, 35.8, 36.1, 36.9, 37.4, 37.9], payMonths: "Fev / Mai / Ago / Nov", thesis: "Baixíssimo custo de extração no Pré-Sal garantindo dividendos de dois dígitos mesmo com Brent moderado." },
  { ticker: "EMBR3", name: "Embraer S.A.", type: "ACAO", group: "DOLLAR", starter: false, status: "Momento Forte", sector: "Indústria Aeroespacial", price: 54.10, target: 68.00, upside: 25.7, dy: 1.5, pl: 18.4, roe: 17.8, beta: 0.88, score: 89, spark: [39.5, 42.1, 45.0, 47.8, 50.2, 52.4, 54.1], payMonths: "Anual + Valorização", thesis: "Carteira de pedidos recorde de US$ 22,7 bilhões em aviação comercial e executiva nos EUA e Europa." },
  { ticker: "SAPR11", name: "Sanepar", type: "ACAO", group: "IPCA", starter: true, status: "Valor & Renda", sector: "Saneamento (PR)", price: 28.40, target: 35.20, upside: 23.9, dy: 8.2, pl: 5.5, roe: 15.9, beta: 0.56, score: 89, spark: [24.8, 25.4, 26.0, 26.7, 27.3, 27.9, 28.4], payMonths: "Jun / Dez", thesis: "Múltiplo P/L extremamente descontado (5,5x) combinado com receita previsível corrigida pela inflação." },
  { ticker: "KNCR11", name: "Kinea Rendimentos", type: "FII", group: "FII", starter: true, status: "Caixa Isento", sector: "FII Papel High Grade CDI+", price: 104.50, target: 110.20, upside: 5.5, dy: 13.4, pl: 1.01, roe: 13.4, beta: 0.15, score: 95, spark: [101.2, 101.8, 102.4, 103.0, 103.6, 104.1, 104.5], payMonths: "Todo dia 13 (Mensal Isento)", thesis: "Carteira CRIs High Grade atrelada a CDI+ (Selic 13,75%). Paga 13,4% a.a. líquido de Imposto de Renda." },
  { ticker: "KNIP11", name: "Kinea Índices Preços", type: "FII", group: "FII", starter: true, status: "Desconto P/VP", sector: "FII Papel High Grade IPCA+", price: 91.80, target: 102.00, upside: 11.2, dy: 12.1, pl: 0.94, roe: 12.1, beta: 0.22, score: 93, spark: [88.5, 89.1, 89.8, 90.2, 90.9, 91.4, 91.8], payMonths: "Todo dia 13 (Mensal Isento)", thesis: "Blindagem contra o IPCA de 5,22% negociando com 6% de desconto sobre o valor patrimonial (P/VP 0,94)." },
  { ticker: "HGCR11", name: "Pátria Recebíveis", type: "FII", group: "FII", starter: true, status: "Renda Mensal", sector: "FII Papel Híbrido CDI/IPCA", price: 98.40, target: 106.30, upside: 8.0, dy: 12.8, pl: 0.97, roe: 12.8, beta: 0.20, score: 92, spark: [95.0, 95.8, 96.4, 97.0, 97.5, 98.0, 98.4], payMonths: "Todo dia 14 (Mensal Isento)", thesis: "Equilíbrio entre indexadores CDI+ e IPCA+ para fluxo de caixa mensal imediato." },
  { ticker: "HGLG11", name: "Pátria Logística", type: "FII", group: "FII", starter: true, status: "Oportunidade", sector: "FII Tijolo Galpões Prime", price: 152.00, target: 180.00, upside: 18.5, dy: 8.9, pl: 0.93, roe: 8.9, beta: 0.35, score: 94, spark: [144.0, 145.5, 147.0, 148.2, 149.8, 151.0, 152.0], payMonths: "Todo dia 14 (Mensal Isento)", thesis: "Galpões logísticos AAA com P/VP de 0,93 — captura forte valorização da cota no corte da Selic em março de 2027." },
  { ticker: "BTLG11", name: "BTG Logística", type: "FII", group: "FII", starter: true, status: "Desconto 9%", sector: "FII Tijolo Logística SP", price: 96.20, target: 115.80, upside: 20.4, dy: 9.5, pl: 0.91, roe: 9.5, beta: 0.36, score: 93, spark: [91.0, 92.1, 93.0, 94.2, 95.0, 95.6, 96.2], payMonths: "Todo dia 25 (Mensal Isento)", thesis: "Galpões no raio de 30km de São Paulo com 9% de desconto patrimonial e vacância mínima." },
  { ticker: "XPML11", name: "XP Malls", type: "FII", group: "FII", starter: true, status: "Desconto 8%", sector: "FII Tijolo Shoppings", price: 105.80, target: 126.10, upside: 19.2, dy: 9.8, pl: 0.92, roe: 9.8, beta: 0.38, score: 92, spark: [99.5, 100.8, 101.9, 103.0, 104.2, 105.0, 105.8], payMonths: "Todo dia 25 (Mensal Isento)", thesis: "Shoppings dominantes voltados à alta renda (Catarina, Cidade Jardim) negociando abaixo do valor de reposição." }
];

const BEAR_DB = [
  { ticker: "MGLU3", name: "Varejo Cíclico", type: "AVOID", group: "AVOID", status: "Evitar / Venda", sector: "Varejo & Consumo", price: 8.40, target: 6.90, upside: -17.8, dy: 0.0, pl: 42.0, roe: -4.2, beta: 1.65, score: 24, spark: [12.4, 11.5, 10.8, 9.9, 9.2, 8.8, 8.4], payMonths: "Sem previsão", thesis: "Fortemente penalizada pela Selic em 13,75% a.a. (crédito caro ao consumidor e despesa financeira elevada)." },
  { ticker: "BHIA3", name: "Varejo Eletro", type: "AVOID", group: "AVOID", status: "Evitar / Venda", sector: "Crediário & Lojas", price: 4.90, target: 3.80, upside: -22.4, dy: 0.0, pl: -1.0, roe: -18.0, beta: 1.80, score: 18, spark: [7.8, 7.1, 6.5, 5.9, 5.4, 5.1, 4.9], payMonths: "Sem previsão", thesis: "Dívida cara indexada ao CDI consome a geração operacional de caixa." },
  { ticker: "MRVE3", name: "Incorporação", type: "AVOID", group: "AVOID", status: "Evitar / Cautela", sector: "Construção Cíclica", price: 6.20, target: 5.40, upside: -12.9, dy: 0.0, pl: 19.5, roe: 3.1, beta: 1.52, score: 31, thesis: "Pressionada pelo custo de financiamento imobiliário e inflação de materiais.", spark: [7.9, 7.5, 7.1, 6.8, 6.6, 6.4, 6.2], payMonths: "Baixo" },
  { ticker: "AZUL4", name: "Aviação Comercial", type: "AVOID", group: "AVOID", status: "Alto Risco", sector: "Companhias Aéreas", price: 4.10, target: 3.20, upside: -21.9, dy: 0.0, pl: -1.0, roe: -25.0, beta: 1.95, score: 19, thesis: "Descasamento cambial severo: mais de 60% dos custos (combustível e leasing) em Dólar a R$ 5,50.", spark: [6.8, 6.1, 5.5, 5.0, 4.6, 4.3, 4.1], payMonths: "Zero" }
];

const EXPORT_CORRIDORS = [
  { ticker: "WEGE3", route: "Jaraguá do Sul (SC) → EUA & União Europeia", product: "Transformadores de Alta Tensão & Motores Industriais", share: 56, revenue: "US$ 3,4 Bi/ano", margin: "22,8% EBITDA" },
  { ticker: "EMBR3", route: "São José dos Campos (SP) → Companhias Aéreas EUA", product: "Jatos E175/E195-E2 & Jatos Executivos Praetor", share: 93, revenue: "US$ 22,7 Bi Backlog", margin: "Recorde Histórico" },
  { ticker: "PRIO3", route: "Bacia de Campos (RJ) → Exportação Global Brent", product: "Petróleo Cru (Lifting Cost < US$ 7,00/barril)", share: 100, revenue: "+100k barris/dia", margin: "68% Margem EBITDA" },
  { ticker: "SUZB3", route: "Ribas do Rio Pardo (MS) → Ásia, Europa & EUA", product: "Celulose Branqueada de Eucalipto (Projeto Cerrado)", share: 82, revenue: "12M ton/ano", margin: "Menor Custo Caixa" },
  { ticker: "VALE3", route: "Carajás (PA) → Siderúrgicas Globais", product: "Minério de Ferro 65% Fe & Metais de Transição", share: 95, revenue: "315M ton/ano", margin: "Forte Geração USD" }
];

const BROKERS_DB = [
  { id: "itau_ion", name: "Íon Itaú", sub: "Plataforma Patrimonial do Itaú Unibanco", zero: true, feeStock: "R$ 0,00", feeFii: "R$ 0,00", cdb: "100% CDI Liquidez Diária", ease: "9.8/10", badge: "Top Recomendado", logo: "íon", logoSub: "ITAÚ", verdict: "A melhor combinação de solidez bancária institucional com taxa zero de corretagem para Ações, FIIs e Tesouro Direto." },
  { id: "c6", name: "C6 Bank", sub: "C6 Invest + Conta Global Dólar/Euro", zero: true, feeStock: "R$ 0,00", feeFii: "R$ 0,00", cdb: "102% CDI", ease: "9.5/10", badge: "Taxa Zero + Câmbio", logo: "C6", logoSub: "BANK", verdict: "Excelente para empreendedores: une conta empresarial/PF, CDB a 102% do CDI e Home Broker taxa zero." },
  { id: "inter", name: "Banco Inter", sub: "Inter Invest Super App", zero: true, feeStock: "R$ 0,00", feeFii: "R$ 0,00", cdb: "100% CDI", ease: "9.6/10", badge: "Taxa Zero", logo: "inter", logoSub: "INVEST", verdict: "Execução rápida no celular para compra de lotes fracionários (ex: ITUB4F, WEGE3F) e FIIs sem custo." },
  { id: "btg", name: "BTG Pactual", sub: "Maior Banco de Investimentos da América Latina", zero: false, feeStock: "R$ 4,50 (ou Isento)", feeFii: "R$ 0,00", cdb: "101% CDI", ease: "9.4/10", badge: "Alta Renda", logo: "BTG", logoSub: "PACTUAL", verdict: "Plataforma de padrão institucional para consolidação patrimonial, FIIs (taxa zero) e crédito estruturado." },
  { id: "nubank", name: "Nubank / Ultravioleta", sub: "Investimentos Integrados no App", zero: true, feeStock: "R$ 0,00", feeFii: "R$ 0,00", cdb: "100% CDI", ease: "9.7/10", badge: "Mais Simples", logo: "nu", logoSub: "INVEST", verdict: "Interface minimalista para quem deseja iniciar aportes em ações e FIIs sem sair do aplicativo principal." },
  { id: "rico", name: "Rico (Grupo XP)", sub: "Corretora Taxa Zero da XP Inc.", zero: true, feeStock: "R$ 0,00", feeFii: "R$ 0,00", cdb: "100% CDI", ease: "9.3/10", badge: "Infra XP R$ 0", logo: "rico", logoSub: "XP INC", verdict: "Entrega toda a grade de produtos da XP Investimentos porém com corretagem zerada para ações." },
  { id: "agora", name: "Ágora Bradesco", sub: "Casa de Investimentos do Bradesco", zero: true, feeStock: "R$ 0,00", feeFii: "R$ 0,00", cdb: "100% CDI", ease: "8.9/10", badge: "Grupo Bradesco", logo: "Ágora", logoSub: "BRADESCO", verdict: "Integração direta com conta corrente Bradesco e relatórios fundamentalistas com corretagem zero." },
  { id: "xp", name: "XP Investimentos", sub: "Corretora Líder Independente", zero: false, feeStock: "R$ 4,90/ordem", feeFii: "R$ 0,00", cdb: "100% CDI", ease: "8.8/10", badge: "FIIs Taxa Zero", logo: "XP", logoSub: "INVEST", verdict: "Excelente para FIIs (corretagem R$ 0) e Renda Fixa; para ações no varejo cobra R$ 4,90 por ordem." }
];

const STRESS_SCENARIOS = {
  BASE: {
    title: "Cenário Base Focus (Nov/2026)",
    selic: "13,75% a.a.",
    ipca: "5,22% a.a.",
    usd: "R$ 5,50",
    portfolioReturn: "+24,6% a.a.",
    cdiReal: "+8,10% Real",
    summary: "Equilíbrio entre carrego pós-fixado (Selic 13,75%), repasse inflacionário (SBSP3/EGIE3) e exportadoras em dólar (WEGE3/PRIO3).",
    impacts: [
      { pillar: "Pós-Fixado & Bancos (ITUB4, BBSE3, KNCR11)", delta: "+16,8% a.a.", status: "Estável" },
      { pillar: "Concessões IPCA+ (SBSP3, EGIE3, TAEE11)", delta: "+23,4% a.a.", status: "Acelerando" },
      { pillar: "Exportadoras Dólar (WEGE3, PRIO3, EMBR3)", delta: "+28,4% a.a.", status: "Forte Alta" },
      { pillar: "FIIs Tijolo Prime (HGLG11, BTLG11)", delta: "+18,9% a.a.", status: "Desconto P/VP" }
    ]
  },
  STRESS_FISCAL: {
    title: "Estresse Fiscal & Cambial (Dólar R$ 6,20)",
    selic: "14,75% a.a.",
    ipca: "6,40% a.a.",
    usd: "R$ 6,20",
    portfolioReturn: "+21,8% a.a.",
    cdiReal: "+7,85% Real",
    summary: "Enquanto o Ibovespa doméstico recua, os 35% dolarizados (WEGE3/PRIO3/SUZB3) e os 40% em Selic/IPCA blindam o patrimônio.",
    impacts: [
      { pillar: "Exportadoras Dólar (WEGE3, PRIO3, SUZB3)", delta: "+36,2% a.a.", status: "Hedge Ativo" },
      { pillar: "Pós-Fixado & Bancos (LFT, KNCR11, BBSE3)", delta: "+18,1% a.a.", status: "Ganho c/ Juro" },
      { pillar: "Concessões IPCA+ (SBSP3, TAEE11)", delta: "+17,5% a.a.", status: "Repasse IPCA" },
      { pillar: "Varejo Doméstico (Fora da Carteira)", delta: "-31,0% a.a.", status: "Evitado ✓" }
    ]
  },
  EASING_2027: {
    title: "Ciclo de Queda da Selic (Março/2027 → 10,50%)",
    selic: "10,50% a.a.",
    ipca: "4,10% a.a.",
    usd: "R$ 5,15",
    portfolioReturn: "+29,4% a.a.",
    cdiReal: "+6,15% Real",
    summary: "O fechamento da curva de juros dispara o valor das ações de infraestrutura (SBSP3/EGIE3) e dos FIIs de Tijolo (HGLG11/BTLG11).",
    impacts: [
      { pillar: "FIIs Tijolo Prime (HGLG11, BTLG11, XPML11)", delta: "+31,5% a.a.", status: "Re-rating Forte" },
      { pillar: "Concessões & Utilities (SBSP3, EGIE3, VIVT3)", delta: "+33,0% a.a.", status: "Expansão Múltiplo" },
      { pillar: "Bancos Líderes (ITUB4, BPAC11, BBAS3)", delta: "+24,2% a.a.", status: "Expansão Crédito" },
      { pillar: "Exportadoras Globais (WEGE3, EMBR3)", delta: "+22,0% a.a.", status: "Crescimento secular" }
    ]
  }
};

const SAMPLE_PORTFOLIO = [
  {
    id: 'tesouro_selic',
    ticker: 'LFT / KNCR11',
    name: 'Caixa Soberano & CRI High Grade',
    category: 'Renda Fixa & Pós-Fixado',
    allocation: 40,
    position: [-1.8, 1.4, -0.9],
    color: '#E4E4E7',
    metrics: {
      beginnerSummary: 'Base disciplinada da carteira. Rende 13,75% a.a. com liquidez imediata e zero oscilação negativa.',
      intermediateInfo: 'Amortecedor de volatilidade e reserva de oportunidade para comprar ações descontadas.',
      seniorMetrics: { dy: '13,75% a.a.', sharpe: 2.10, beta: 0.02, durationOrPvp: 'Dur: 0.1a' },
    },
  },
  {
    id: 'utilities_b3',
    ticker: 'SBSP3 / EGIE3',
    name: 'Saneamento & Transmissão IPCA+',
    category: 'Infraestrutura & Dividendos',
    allocation: 25,
    position: [-0.5, 2.2, 0.7],
    color: '#A1A1AA',
    metrics: {
      beginnerSummary: 'Monopólios naturais de água e energia elétrica com tarifas reajustadas pela inflação.',
      intermediateInfo: 'Proteção real contra o IPCA (5,22%) + ganho de capital com o corte da Selic em março de 2027.',
      seniorMetrics: { dy: '8,4% a.a.', sharpe: 1.45, beta: 0.55, durationOrPvp: 'ROE: 25,3%' },
    },
  },
  {
    id: 'fiis_tijolo',
    ticker: 'HGLG11 / BTLG11',
    name: 'Galpões Logísticos & Recebíveis',
    category: 'FIIs Isentos de IR',
    allocation: 20,
    position: [0.95, 1.8, -0.2],
    color: '#34D399',
    metrics: {
      beginnerSummary: 'Aluguéis mensais depositados na conta sem cobrança de Imposto de Renda.',
      intermediateInfo: 'Cotas negociando com 7% a 9% de desconto sobre o valor dos imóveis (P/VP 0,92).',
      seniorMetrics: { dy: '11,2% Isento', sharpe: 1.32, beta: 0.38, durationOrPvp: 'P/VP: 0.92' },
    },
  },
  {
    id: 'exporters_b3',
    ticker: 'WEGE3 / PRIO3',
    name: 'Receita Global em Dólar (R$ 5,50)',
    category: 'Exportadoras & Moeda Forte',
    allocation: 15,
    position: [2.1, 2.6, 0.95],
    color: '#71717A',
    metrics: {
      beginnerSummary: 'Multinacionais brasileiras que faturam em dólar e protegem seu poder de compra internacional.',
      intermediateInfo: 'Blindagem estrutural contra risco fiscal (DBGG 82,4% PIB) e desvalorização do Real.',
      seniorMetrics: { dy: '4,8% + Upside', sharpe: 1.24, beta: 0.86, durationOrPvp: 'ROIC: 34%' },
    },
  },
];

let stealthMode = false;
let primaryChart = null;
let dividendBarChart = null;
let healthDonutChart = null;
let bubbleChart = null;
let compoundChartObj = null;
let mainChartPeriod = '1Y';
let selectedTimelineIdx = 5;
let dashboardTab = 'AI_TOP';
let currentStressKey = 'BASE';

let lariusMuted = false;
let lariusSpeaking = false;
let lariusListening = false;
let lariusPitch = 0.94;
let lariusRate = 1.08;
let lariusVoiceURI = '';
let lariusTypingInterval = null;
let larius3dMode = 'WAVE';
let homeIsSpeaking = true;
let audioContextRef = null;
let analyserRef = null;
let dataArrayRef = null;
let smoothedEnergyRef = 0;

function renderSparklineSVG(pts, isPositive = true) {
  if (!pts || pts.length < 2) return '';
  const min = Math.min(...pts);
  const max = Math.max(...pts);
  const range = Math.max(max - min, 0.01);
  const w = 76, h = 24;
  const coords = pts.map((v, i) => {
    const x = (i / (pts.length - 1)) * w;
    const y = h - 3 - ((v - min) / range) * (h - 6);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const stroke = isPositive ? '#E4E4E7' : '#F87171';
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" class="inline-block overflow-visible"><polyline fill="none" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" points="${coords}" /></svg>`;
}

function toggleStealthMode() {
  stealthMode = !stealthMode;
  document.querySelectorAll('.stealth-val').forEach(el => {
    if (!el.dataset.real) el.dataset.real = el.textContent;
    el.textContent = stealthMode ? 'R$ •••.•••,••' : el.dataset.real;
  });
  const btn = document.getElementById('btn-stealth-label');
  if (btn) btn.textContent = stealthMode ? 'Sigilo Ativo' : 'Modo Sigilo';
}

function openCommandPalette() {
  const m = document.getElementById('cmd-palette-modal');
  if (!m) return;
  m.classList.remove('hidden');
  m.classList.add('flex');
  const inp = document.getElementById('cmd-palette-input');
  if (inp) {
    inp.value = '';
    inp.focus();
    renderCommandResults('');
  }
}

function closeCommandPalette() {
  const m = document.getElementById('cmd-palette-modal');
  if (!m) return;
  m.classList.add('hidden');
  m.classList.remove('flex');
}

function renderCommandResults(q) {
  const box = document.getElementById('cmd-palette-results');
  if (!box) return;
  const query = (q || '').trim().toLowerCase();

  const actions = [
    { label: "Alocar Novo Aporte Mensal (Calculadora de Compras)", tag: "Ferramenta", fn: "closeCommandPalette(); switchView('allocator')" },
    { label: "Executar Stress-Test de Crise Fiscal vs. Queda da Selic", tag: "Simulação", fn: "closeCommandPalette(); switchView('dashboard'); document.getElementById('stress-test-panel').scrollIntoView({behavior:'smooth'})" },
    { label: "Abrir Estúdio 3D Larius & Diagrama Espacial GSAP", tag: "3D & Voz", fn: "closeCommandPalette(); switchView('larius')" },
    { label: "Simular Juros Compostos + Imposto de Renda vs. Bancos", tag: "Tributário", fn: "closeCommandPalette(); switchView('compound')" },
    { label: "Comparar Taxas de Corretoras (Íon Itaú, C6, Inter, BTG, XP)", tag: "Custos", fn: "closeCommandPalette(); switchView('brokers')" },
    { label: "Executar Motor Quantitativo Python 3.12 (Markowitz & Sharpe)", tag: "Python 3.12", fn: "closeCommandPalette(); switchView('python')" }
  ];

  const matchedAssets = [...ASSETS_DB, ...BEAR_DB].filter(a =>
    query === '' || a.ticker.toLowerCase().includes(query) || a.name.toLowerCase().includes(query) || a.sector.toLowerCase().includes(query)
  ).slice(0, 6);

  const matchedActions = actions.filter(a => query === '' || a.label.toLowerCase().includes(query));

  box.innerHTML = `
    <div class="text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-3 py-1">Ações Rápidas do Terminal</div>
    ${matchedActions.map(a => `
      <button onclick="${a.fn}" class="w-full text-left px-3 py-2 rounded-lg hover:bg-white/[0.06] flex items-center justify-between text-xs text-zinc-200 transition">
        <span>${a.label}</span>
        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-zinc-400">${a.tag}</span>
      </button>
    `).join('')}
    <div class="text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-3 py-1 mt-2">Ativos Auditados B3 (${matchedAssets.length})</div>
    ${matchedAssets.map(a => `
      <button onclick="closeCommandPalette(); openAssetInspector('${a.ticker}')" class="w-full text-left px-3 py-2 rounded-lg hover:bg-white/[0.06] flex items-center justify-between text-xs transition">
        <div>
          <span class="font-mono font-bold text-white">${a.ticker}</span>
          <span class="text-zinc-400 ml-2">${a.name}</span>
          <span class="text-[10px] text-zinc-500 ml-2">• ${a.sector}</span>
        </div>
        <div class="font-mono tabular-nums text-xs ${a.upside >= 0 ? 'text-emerald-400' : 'text-rose-400'}">
          R$ ${a.price.toFixed(2).replace('.', ',')} (${a.upside >= 0 ? '+' : ''}${a.upside}%)
        </div>
      </button>
    `).join('')}
  `;
}

window.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openCommandPalette();
  } else if (e.shiftKey && e.key.toLowerCase() === 'h' && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    toggleStealthMode();
  } else if (e.key === 'Escape') {
    closeCommandPalette();
    closeAssetInspector();
    closeVoiceCloneModal();
  }
});
