    // 1. DATASET: 22 RECOMMENDED ASSETS + 4 AVOIDED + 6 EXPORT CORRIDORS
    const ASSETS_DB = [
      { ticker: "ITUB4", name: "Itaú Unibanco", type: "ACAO", group: "SELIC", starter: true, sector: "Bancos", price: 36.40, target: 44.50, upside: 22.3, dy: 8.6, pl: 7.8, roe: 22.4, score: 96, thesis: "Ganha diretamente com a Selic em 13,75% a.a. na margem financeira e paga dividendos constantes isentos de IR." },
      { ticker: "BBSE3", name: "BB Seguridade", type: "ACAO", group: "SELIC", starter: true, sector: "Seguros", price: 34.80, target: 41.80, upside: 20.1, dy: 10.4, pl: 8.4, roe: 74.0, score: 95, thesis: "Zero dívida e reservas técnicas rendendo 13,75% a.a., distribuindo mais de 85% do lucro em dividendos." },
      { ticker: "WEGE3", name: "WEG S.A.", type: "ACAO", group: "DOLLAR", starter: true, sector: "Indústria Global", price: 52.90, target: 66.50, upside: 25.7, dy: 2.4, pl: 27.5, roe: 35.6, score: 95, thesis: "Mais de 55% da receita em Dólar/Euro exportando transformadores e motores para EUA e Europa. Caixa líquido." },
      { ticker: "SBSP3", name: "Sabesp", type: "ACAO", group: "IPCA", starter: true, sector: "Saneamento", price: 94.20, target: 124.00, upside: 31.6, dy: 3.8, pl: 11.2, roe: 16.5, score: 94, thesis: "Demanda inelástica com tarifa corrigida pela inflação e forte corte de custos pós-privatização." },
      { ticker: "EGIE3", name: "Engie Brasil", type: "ACAO", group: "IPCA", starter: true, sector: "Energia Elétrica", price: 42.10, target: 51.00, upside: 21.1, dy: 7.9, pl: 9.8, roe: 34.2, score: 93, thesis: "Contratos longos corrigidos pelo IPCA (5,22%) e forte destravamento na queda da Selic em março de 2027." },
      { ticker: "BBAS3", name: "Banco do Brasil", type: "ACAO", group: "SELIC", starter: true, sector: "Bancos / Agro", price: 26.80, target: 34.00, upside: 26.9, dy: 10.8, pl: 4.3, roe: 20.1, score: 92, thesis: "Negocia a apenas 4,3x lucro (ampla margem de segurança) com dividendos acima de 10,5% a.a." },
      { ticker: "TAEE11", name: "Taesa", type: "ACAO", group: "IPCA", starter: true, sector: "Transmissão", price: 35.20, target: 40.50, upside: 15.1, dy: 9.6, pl: 8.9, roe: 19.3, score: 91, thesis: "Receita garantida por disponibilidade das linhas e reajustada por IPCA/IGP-M." },
      { ticker: "VIVT3", name: "Vivo (Telefônica)", type: "ACAO", group: "IPCA", starter: true, sector: "Telecom", price: 51.80, target: 62.00, upside: 19.7, dy: 7.5, pl: 13.8, roe: 9.1, score: 90, thesis: "Balanço quase sem dívida, baixa oscilação e payout de 100% do lucro líquido." },
      { ticker: "PRIO3", name: "PRIO S.A.", type: "ACAO", group: "DOLLAR", starter: false, sector: "Óleo & Gás", price: 43.50, target: 58.50, upside: 34.5, dy: 3.2, pl: 6.4, roe: 30.4, score: 91, thesis: "Receita 100% em dólar, custo de extração < US$ 7/barril e entrada do campo de Wahoo." },
      { ticker: "SUZB3", name: "Suzano S.A.", type: "ACAO", group: "DOLLAR", starter: false, sector: "Celulose", price: 56.40, target: 71.00, upside: 25.9, dy: 4.1, pl: 7.9, roe: 20.3, score: 89, thesis: "Líder mundial em celulose de eucalipto, colhendo frutos do dólar a R$ 5,50 pós-Projeto Cerrado." },
      { ticker: "CPFE3", name: "CPFL Energia", type: "ACAO", group: "IPCA", starter: true, sector: "Energia", price: 34.90, target: 41.50, upside: 18.9, dy: 8.8, pl: 7.6, roe: 26.8, score: 90, thesis: "Concessões de distribuição e geração com forte geração de caixa e dividendos elevados." },
      { ticker: "BPAC11", name: "BTG Pactual", type: "ACAO", group: "SELIC", starter: false, sector: "Banco Invest.", price: 33.80, target: 42.90, upside: 26.9, dy: 4.2, pl: 10.5, roe: 23.1, score: 91, thesis: "Expansão acelerada em Wealth Management e crédito corporativo High Grade com ROE de 23%." },
      { ticker: "VALE3", name: "Vale S.A.", type: "ACAO", group: "DOLLAR", starter: false, sector: "Mineração", price: 61.20, target: 74.50, upside: 21.7, dy: 8.9, pl: 5.8, roe: 21.5, score: 88, thesis: "Exportadora de minério de alta pureza em dólar negociando a múltiplo descontado." },
      { ticker: "PETR4", name: "Petrobras PN", type: "ACAO", group: "DOLLAR", starter: false, sector: "Petróleo", price: 37.90, target: 45.00, upside: 18.7, dy: 12.4, pl: 4.4, roe: 28.0, score: 87, thesis: "Geração de caixa massiva no Pré-Sal e dividendos acima de 12% a.a." },
      { ticker: "EMBR3", name: "Embraer S.A.", type: "ACAO", group: "DOLLAR", starter: false, sector: "Aeroespacial", price: 54.10, target: 68.00, upside: 25.7, dy: 1.5, pl: 18.4, roe: 17.8, score: 89, thesis: "Carteira recorde de US$ 22,7 bilhões em jatos exportados para EUA e Europa." },
      { ticker: "SAPR11", name: "Sanepar", type: "ACAO", group: "IPCA", starter: true, sector: "Saneamento", price: 28.40, target: 35.20, upside: 23.9, dy: 8.2, pl: 5.5, roe: 15.9, score: 89, thesis: "Múltiplo P/L muito barato (5,5x) com receita corrigida pela inflação." },
      { ticker: "KNCR11", name: "Kinea Rendimentos", type: "FII", group: "FII", starter: true, sector: "FII Papel CDI+", price: 104.50, target: 110.20, upside: 5.5, dy: 13.4, pl: 1.01, roe: 13.4, score: 95, thesis: "FII de Papel High Grade atrelado a CDI+ (Selic 13,75%). Paga 13,4% a.a. líquido de IR." },
      { ticker: "KNIP11", name: "Kinea Índices IPCA", type: "FII", group: "FII", starter: true, sector: "FII Papel IPCA+", price: 91.80, target: 102.00, upside: 11.2, dy: 12.1, pl: 0.94, roe: 12.1, score: 93, thesis: "Blindagem contra o IPCA de 5,22% negociando com 6% de desconto sobre o VP." },
      { ticker: "HGCR11", name: "Pátria Recebíveis", type: "FII", group: "FII", starter: true, sector: "FII Papel Misto", price: 98.40, target: 106.30, upside: 8.0, dy: 12.8, pl: 0.97, roe: 12.8, score: 92, thesis: "Equilíbrio entre indexadores CDI+ e IPCA+ para renda mensal imediata." },
      { ticker: "HGLG11", name: "Pátria Logística", type: "FII", group: "FII", starter: true, sector: "FII Tijolo Logística", price: 152.00, target: 180.00, upside: 18.5, dy: 8.9, pl: 0.93, roe: 8.9, score: 94, thesis: "Galpões logísticos Prime com P/VP de 0,93 — forte ganho de capital com o corte da Selic em 2027." },
      { ticker: "BTLG11", name: "BTG Logística", type: "FII", group: "FII", starter: true, sector: "FII Tijolo SP", price: 96.20, target: 115.80, upside: 20.4, dy: 9.5, pl: 0.91, roe: 9.5, score: 93, thesis: "Galpões no raio de 30km de SP com 9% de desconto patrimonial e vacância de 1,8%." },
      { ticker: "XPML11", name: "XP Malls", type: "FII", group: "FII", starter: true, sector: "FII Shoppings", price: 105.80, target: 126.10, upside: 19.2, dy: 9.8, pl: 0.92, roe: 9.8, score: 92, thesis: "Shoppings dominantes de alta renda com P/VP descontado em 0,92." }
    ];

    const BEAR_DB = [
      { ticker: "MGLU3", name: "Varejo Eletro", type: "AVOID", group: "AVOID", sector: "Varejo Cíclico", price: 8.40, target: 6.90, upside: -17.8, dy: 0.0, pl: 42.0, score: 24, thesis: "Penalizada pela Selic em 13,75% a.a. (crédito caro e alta despesa financeira)." },
      { ticker: "BHIA3", name: "Crediário & Varejo", type: "AVOID", group: "AVOID", sector: "Consumo", price: 4.90, target: 3.80, upside: -22.4, dy: 0.0, pl: -1.0, score: 18, thesis: "Dívida cara atrelada ao CDI comprime geração de caixa." },
      { ticker: "MRVE3", name: "Construção Cíclica", type: "AVOID", group: "AVOID", sector: "Incorporação", price: 6.20, target: 5.40, upside: -12.9, dy: 0.0, pl: 19.5, score: 31, thesis: "Custos pressionados pela inflação e rolagem de dívida cara." },
      { ticker: "AZUL4", name: "Aviação Comercial", type: "AVOID", group: "AVOID", sector: "Aéreas", price: 4.10, target: 3.20, upside: -21.9, dy: 0.0, pl: -1.0, score: 19, thesis: "Custos em Dólar (R$ 5,50) contra receitas domésticas em Real." }
    ];

    const EXPORT_CORRIDORS = [
      { ticker: "WEGE3", route: "Brasil (SC) → EUA & Europa", product: "Transformadores & Subestações Elétricas", share: 56, revenue: "US$ 3,4 Bi/ano" },
      { ticker: "EMBR3", route: "Brasil (SP) → Companhias Aéreas EUA", product: "Jatos Comerciais E175/E2 e Executivos", share: 93, revenue: "US$ 22,7 Bi Backlog" },
      { ticker: "PRIO3", route: "Bacia de Campos (RJ) → Roterdã / Global", product: "Petróleo Brent (Custo < US$ 7/barril)", share: 100, revenue: "+100k barris/dia" },
      { ticker: "SUZB3", route: "Mato Grosso do Sul → Xangai & Europa", product: "Celulose de Fibra Curta (Projeto Cerrado)", share: 82, revenue: "12M toneladas/ano" },
      { ticker: "VALE3", route: "Carajás (PA) → China & Japão", product: "Minério de Ferro Alta Pureza (65% Fe)", share: 95, revenue: "315M toneladas/ano" }
    ];

    const BROKERS_DB = [
      { id: "itau_ion", name: "Íon Itaú", sub: "App de Investimentos do Itaú", zero: true, feeStock: "R$ 0,00", feeFii: "R$ 0,00", cdb: "100% CDI", ease: "9.8/10", grad: "from-[#FF6200] to-[#b84600]", logo: "íon", logoSub: "itaú", verdict: "Escolha número 1 para iniciantes: une a segurança máxima do Itaú com taxa zero em Ações, FIIs e Tesouro." },
      { id: "c6", name: "C6 Bank", sub: "Conta + C6 Invest", zero: true, feeStock: "R$ 0,00", feeFii: "R$ 0,00", cdb: "102% CDI", ease: "9.5/10", grad: "from-zinc-700 to-zinc-950", logo: "C6", logoSub: "BANK", verdict: "Excelente para concentrar conta corrente, CDB pós-fixado de 102% do CDI e ações sem corretagem." },
      { id: "inter", name: "Banco Inter", sub: "Super App Inter Invest", zero: true, feeStock: "R$ 0,00", feeFii: "R$ 0,00", cdb: "100% CDI", ease: "9.6/10", grad: "from-[#FF7A00] to-[#cc6200]", logo: "inter", logoSub: "invest", verdict: "Home Broker super intuitivo no celular para comprar ações no mercado fracionário com taxa zero." },
      { id: "nubank", name: "Nubank", sub: "Investimentos no App", zero: true, feeStock: "R$ 0,00", feeFii: "R$ 0,00", cdb: "100% CDI", ease: "9.7/10", grad: "from-[#820AD1] to-[#4e067d]", logo: "nu", logoSub: "invest", verdict: "O mais simples para quem nunca comprou uma ação na vida, direto no aplicativo do Nubank." },
      { id: "rico", name: "Rico (Grupo XP)", sub: "Corretora Taxa Zero da XP", zero: true, feeStock: "R$ 0,00", feeFii: "R$ 0,00", cdb: "100% CDI", ease: "9.3/10", grad: "from-[#FF5500] to-[#ad3900]", logo: "rico", logoSub: "xp inc", verdict: "Toda a estrutura da XP Investimentos, mas com corretagem R$ 0,00 para compra de ações." },
      { id: "agora", name: "Ágora / Bradesco", sub: "Corretora do Bradesco", zero: true, feeStock: "R$ 0,00", feeFii: "R$ 0,00", cdb: "100% CDI", ease: "8.8/10", grad: "from-[#CC092F] to-[#80051d]", logo: "Ágora", logoSub: "bradesco", verdict: "Integrada para correntistas do Bradesco com corretagem zero em Ações e FIIs." },
      { id: "xp", name: "XP Investimentos", sub: "Corretora Independente", zero: false, feeStock: "R$ 4,90/ordem", feeFii: "R$ 0,00", cdb: "100% CDI", ease: "8.5/10", grad: "from-amber-500 to-yellow-700", logo: "XP", logoSub: "invest", verdict: "Ótima para FIIs (taxa zero) e grandes patrimônios, mas cobra R$ 4,90 por ordem de ação no plano básico." },
      { id: "btg", name: "BTG Pactual", sub: "Maior Banco de Investimentos", zero: false, feeStock: "R$ 4,50/ordem", feeFii: "R$ 0,00", cdb: "101% CDI", ease: "8.9/10", grad: "from-[#001E62] to-[#003399]", logo: "BTG", logoSub: "pactual", verdict: "Aplicativo e relatórios de elite; excelente para FIIs ou carteiras maiores." }
    ];

    let primaryChart = null;
    let bubbleChart = null;
    let compoundChartObj = null;
    let mainChartPeriod = '1Y';
    let dashboardTab = 'AI_TOP';
    let lariusMuted = false;
    let lariusSpeaking = false;
    let lariusListening = false;
    let lariusPitch = 0.94;
    let lariusRate = 1.08;
    let lariusVoiceURI = '';
    let lariusTypingInterval = null;
    let larius3dMode = 'WAVE';

    function initLenisAndSpotlight() {
      const wrapper = document.getElementById('lenis-wrapper');
      const content = document.getElementById('lenis-content');
      if (window.Lenis && wrapper && content) {
        const lenis = new Lenis({
          wrapper,
          content,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true
        });
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }
      bindSpotlightCards();
    }

    function bindSpotlightCards() {
      document.querySelectorAll('.spotlight-card').forEach(card => {
        card.onmousemove = (e) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
          card.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
          card.style.setProperty('--spot-opacity', '1');
        };
        card.onmouseleave = () => {
          card.style.setProperty('--spot-opacity', '0');
        };
      });
    }

    function switchView(viewId) {
      ['dashboard', 'stocks', 'compound', 'brokers', 'larius', 'python'].forEach(v => {
        const sec = document.getElementById(`view-${v}`);
        const nav = document.getElementById(`nav-${v}`);
        if (v === viewId) {
          if (sec) sec.classList.remove('hidden');
          if (nav) nav.classList.add('active');
        } else {
          if (sec) sec.classList.add('hidden');
          if (nav) nav.classList.remove('active');
        }
      });

      const titles = {
        dashboard: 'Visão Geral & Gráficos Interativos (MotionSites + 3D)',
        stocks: 'Ações & Gerador de Recomendações (24 Ativos)',
        compound: 'Simulador de Juros Compostos, Imposto de Renda & Bancos',
        brokers: 'Comparativo de Corretoras, Bancos & Taxas',
        larius: 'Larius — Consultor de Investimentos IA (Palco 3D & Voz)',
        python: 'Motor Quantitativo em Python 3.12 (larius_quant_engine.py • GitHub Cloud 24/7)'
      };
      document.getElementById('breadcrumb-title').textContent = titles[viewId] || '';
      lucide.createIcons();
      bindSpotlightCards();

      if (viewId === 'larius' || viewId === 'dashboard') {
        setTimeout(() => resizeLarius3D(), 60);
      }
      if (viewId === 'python') {
        runPythonQuantEngine();
      }
    }

    function handleSearch(q) {
      if (q.trim().length > 0) {
        switchView('stocks');
        renderFullStocksGrid(q.trim());
      } else {
        renderFullStocksGrid('');
      }
    }

    function selectDashboardMetric(metricKey, cardEl) {
      document.querySelectorAll('.kpi-selector').forEach(c => c.classList.remove('active'));
      if (cardEl) cardEl.classList.add('active');
      document.getElementById('chart-asset-compare').value = metricKey;
      refreshMainDashboardChart();
    }

    function setMainChartPeriod(p) {
      mainChartPeriod = p;
      ['6M', '1Y', '2Y', '5Y'].forEach(id => {
        const b = document.getElementById(`mcp-${id}`);
        if (id === p) b.classList.add('active');
        else b.classList.remove('active');
      });
      refreshMainDashboardChart();
    }

    function initDashboardCharts() {
      const ctx = document.getElementById('primaryInteractiveChart').getContext('2d');
      primaryChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Mar', 'Mai', 'Jul', 'Set', 'Nov/26', 'Jan/27', 'Mar/27'],
          datasets: []
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          onHover: (e, elements) => {
            if (elements && elements.length > 0) {
              const i = elements[0].index;
              const lbl = primaryChart.data.labels[i];
              const ds = primaryChart.data.datasets;
              if (ds[0]) document.getElementById('tel-s1').textContent = `${lbl} • ${ds[0].label}: ${ds[0].data[i]}%`;
              if (ds[1]) document.getElementById('tel-s2').textContent = `${lbl} • ${ds[1].label}: ${ds[1].data[i]}%`;
              if (ds[2]) document.getElementById('tel-s3').textContent = `${lbl} • ${ds[2].label}: ${ds[2].data[i]}%`;
            }
          },
          plugins: {
            legend: { labels: { color: '#a1a1aa', font: { size: 11 } } },
            tooltip: {
              backgroundColor: '#0A0A0E',
              borderColor: 'rgba(255,107,0,0.4)',
              borderWidth: 1,
              padding: 10
            }
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#71717a', font: { size: 11 } } },
            y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#71717a', font: { size: 11 } } }
          }
        }
      });

      refreshMainDashboardChart();

      const ctxBubble = document.getElementById('bubbleMatrixChart').getContext('2d');
      const bubbleItems = ASSETS_DB.slice(0, 12);
      bubbleChart = new Chart(ctxBubble, {
        type: 'bubble',
        data: {
          datasets: [{
            label: 'Ações & FIIs Recomendados',
            data: bubbleItems.map(a => ({
              x: a.dy,
              y: a.upside,
              r: Math.max(6, (a.score - 82) * 0.9),
              ticker: a.ticker,
              name: a.name
            })),
            backgroundColor: bubbleItems.map(a => a.starter ? 'rgba(255, 107, 0, 0.75)' : 'rgba(52, 211, 153, 0.65)'),
            borderColor: '#ffffff',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          onClick: (e, elements) => {
            if (elements && elements.length > 0) {
              const idx = elements[0].index;
              const pt = bubbleChart.data.datasets[0].data[idx];
              openAssetInspector(pt.ticker);
            }
          },
          onHover: (e, elements) => {
            if (elements && elements.length > 0) {
              const pt = bubbleChart.data.datasets[0].data[elements[0].index];
              document.getElementById('bubble-selected-info').innerHTML = `
                <div>
                  <span class="font-mono font-bold text-[#FF6B00]">${pt.ticker}</span>
                  <span class="text-zinc-300 ml-1.5">${pt.name} • DY ${pt.x}% • Alta +${pt.y}%</span>
                </div>
                <button onclick="openAssetInspector('${pt.ticker}')" class="text-[#FF6B00] hover:underline font-medium">Abrir →</button>
              `;
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.raw.ticker}: DY ${ctx.raw.x}% | Upside +${ctx.raw.y}%`
              }
            }
          },
          scales: {
            x: {
              title: { display: true, text: 'Dividend Yield (% a.a.)', color: '#71717a', font: { size: 10 } },
              grid: { color: 'rgba(255,255,255,0.04)' },
              ticks: { color: '#71717a', font: { size: 10 } }
            },
            y: {
              title: { display: true, text: 'Potencial de Alta / Upside (%)', color: '#71717a', font: { size: 10 } },
              grid: { color: 'rgba(255,255,255,0.04)' },
              ticks: { color: '#71717a', font: { size: 10 } }
            }
          }
        }
      });
    }

    function refreshMainDashboardChart() {
      if (!primaryChart) return;
      const mode = document.getElementById('chart-asset-compare').value;
      const mult = mainChartPeriod === '6M' ? 0.55 : mainChartPeriod === '1Y' ? 1.0 : mainChartPeriod === '2Y' ? 1.95 : 4.5;
      const ctx = primaryChart.ctx;
      const gradOrange = ctx.createLinearGradient(0, 0, 0, 250);
      gradOrange.addColorStop(0, 'rgba(255, 107, 0, 0.28)');
      gradOrange.addColorStop(1, 'rgba(255, 107, 0, 0.0)');

      if (mode === 'CARTEIRA_VS_CDI') {
        document.getElementById('main-chart-heading').textContent = `Carteira Larius vs. CDI Líquido vs. Varejo (${mainChartPeriod})`;
        primaryChart.data.datasets = [
          { label: 'Carteira Larius', data: [0, +(4*mult).toFixed(1), +(8.5*mult).toFixed(1), +(13*mult).toFixed(1), +(17.5*mult).toFixed(1), +(21*mult).toFixed(1), +(23*mult).toFixed(1), +(24.6*mult).toFixed(1)], borderColor: '#FF6B00', backgroundColor: gradOrange, fill: true, borderWidth: 2.5, tension: 0.4 },
          { label: 'CDI Líquido IR', data: [0, +(1.8*mult).toFixed(1), +(3.5*mult).toFixed(1), +(5.4*mult).toFixed(1), +(7.2*mult).toFixed(1), +(9.0*mult).toFixed(1), +(10.3*mult).toFixed(1), +(11.6*mult).toFixed(1)], borderColor: '#34d399', borderDash: [4, 4], borderWidth: 2, tension: 0.4 },
          { label: 'Varejo Alavancado', data: [0, -(2.5*mult).toFixed(1), -(5.8*mult).toFixed(1), -(9.2*mult).toFixed(1), -(12.5*mult).toFixed(1), -(15.1*mult).toFixed(1), -(16.8*mult).toFixed(1), -(18.4*mult).toFixed(1)], borderColor: '#f43f5e', borderWidth: 1.8, tension: 0.4 }
        ];
      } else if (mode === 'TOP_STOCKS_COMPARE') {
        document.getElementById('main-chart-heading').textContent = `Comparativo Direto: SBSP3 vs. WEGE3 vs. ITUB4 (${mainChartPeriod})`;
        primaryChart.data.datasets = [
          { label: 'SBSP3 (Sabesp)', data: [0, +(5*mult).toFixed(1), +(11*mult).toFixed(1), +(16*mult).toFixed(1), +(22*mult).toFixed(1), +(26*mult).toFixed(1), +(29*mult).toFixed(1), +(31.6*mult).toFixed(1)], borderColor: '#FF6B00', backgroundColor: gradOrange, fill: true, borderWidth: 2.5, tension: 0.4 },
          { label: 'WEGE3 (WEG)', data: [0, +(4*mult).toFixed(1), +(9*mult).toFixed(1), +(14*mult).toFixed(1), +(18*mult).toFixed(1), +(21*mult).toFixed(1), +(23.5*mult).toFixed(1), +(25.7*mult).toFixed(1)], borderColor: '#34d399', borderWidth: 2, tension: 0.4 },
          { label: 'ITUB4 (Itaú)', data: [0, +(3.5*mult).toFixed(1), +(7.2*mult).toFixed(1), +(11*mult).toFixed(1), +(15*mult).toFixed(1), +(18*mult).toFixed(1), +(20.4*mult).toFixed(1), +(22.3*mult).toFixed(1)], borderColor: '#e4e4e7', borderWidth: 2, tension: 0.4 }
        ];
      } else if (mode === 'SELIC_CURVE') {
        document.getElementById('main-chart-heading').textContent = `Ciclo de Corte da Selic (Mar/2027) vs. Valorização dos FIIs de Tijolo`;
        primaryChart.data.datasets = [
          { label: 'FIIs Tijolo (HGLG11/BTLG11)', data: [0, 2.5, 5.2, 8.8, 12.4, 15.6, 17.8, 19.5], borderColor: '#FF6B00', backgroundColor: gradOrange, fill: true, borderWidth: 2.5, tension: 0.4 },
          { label: 'Taxa Selic (% a.a.)', data: [13.75, 13.75, 13.75, 13.25, 12.75, 12.00, 11.25, 10.75], borderColor: '#34d399', borderWidth: 2, tension: 0.3 }
        ];
      } else if (mode === 'EXPORT_ROUTES') {
        document.getElementById('main-chart-heading').textContent = `Exportadoras em Dólar (WEGE3, PRIO3, EMBR3) vs. Ibovespa (${mainChartPeriod})`;
        primaryChart.data.datasets = [
          { label: 'Cesta Exportadora USD', data: [0, +(5.2*mult).toFixed(1), +(10.8*mult).toFixed(1), +(16.4*mult).toFixed(1), +(21.2*mult).toFixed(1), +(24.8*mult).toFixed(1), +(26.9*mult).toFixed(1), +(28.4*mult).toFixed(1)], borderColor: '#FF6B00', backgroundColor: gradOrange, fill: true, borderWidth: 2.5, tension: 0.4 },
          { label: 'Ibovespa Médio', data: [0, +(1.5*mult).toFixed(1), +(3.1*mult).toFixed(1), +(4.8*mult).toFixed(1), +(6.2*mult).toFixed(1), +(7.9*mult).toFixed(1), +(8.9*mult).toFixed(1), +(9.8*mult).toFixed(1)], borderColor: '#71717a', borderWidth: 2, tension: 0.4 }
        ];
      } else {
        document.getElementById('main-chart-heading').textContent = `Blindagem Inflacionária: Concessões IPCA+ vs. IPCA Acumulado`;
        primaryChart.data.datasets = [
          { label: 'Concessões (SBSP3/EGIE3/TAEE11)', data: [0, +(4.2*mult).toFixed(1), +(8.8*mult).toFixed(1), +(13.5*mult).toFixed(1), +(17.8*mult).toFixed(1), +(20.4*mult).toFixed(1), +(22.1*mult).toFixed(1), +(23.8*mult).toFixed(1)], borderColor: '#FF6B00', backgroundColor: gradOrange, fill: true, borderWidth: 2.5, tension: 0.4 },
          { label: 'Inflação IPCA Focus', data: [0, +(0.9*mult).toFixed(1), +(1.8*mult).toFixed(1), +(2.6*mult).toFixed(1), +(3.5*mult).toFixed(1), +(4.3*mult).toFixed(1), +(4.8*mult).toFixed(1), +(5.22*mult).toFixed(1)], borderColor: '#f43f5e', borderDash: [4, 4], borderWidth: 2, tension: 0.4 }
        ];
      }
      primaryChart.update();
    }

    function renderCorridorsList() {
      const el = document.getElementById('corridors-list');
      el.innerHTML = EXPORT_CORRIDORS.map(c => `
        <div onclick="openAssetInspector('${c.ticker}')" class="p-3 rounded-xl bg-[#050507] border border-white/[0.06] hover:border-[#FF6B00]/40 transition cursor-pointer space-y-1.5">
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span class="font-mono font-bold text-[#FF6B00]">${c.ticker}</span>
              <span class="text-zinc-200 font-medium">${c.route}</span>
            </div>
            <span class="font-mono tabular-nums text-[11px] text-emerald-400">${c.revenue}</span>
          </div>
          <div class="flex items-center justify-between text-[11px] text-zinc-500">
            <span class="truncate pr-2">${c.product}</span>
            <span class="font-mono text-zinc-300 shrink-0">${c.share}% USD</span>
          </div>
          <div class="w-full h-1 bg-white/[0.05] rounded-full overflow-hidden">
            <div class="h-full bg-[#FF6B00]" style="width: ${c.share}%"></div>
          </div>
        </div>
      `).join('');
    }

    function setDashboardTableTab(tab) {
      dashboardTab = tab;
      ['AI_TOP', 'BULL', 'BEAR', 'FII'].forEach(t => {
        const b = document.getElementById(`dtab-${t}`);
        if (t === tab) b.classList.add('active');
        else b.classList.remove('active');
      });

      let rows = [];
      if (tab === 'AI_TOP') rows = ASSETS_DB.filter(a => a.type === 'ACAO' && a.starter);
      else if (tab === 'BULL') rows = ASSETS_DB.filter(a => a.type === 'ACAO');
      else if (tab === 'FII') rows = ASSETS_DB.filter(a => a.type === 'FII');
      else rows = BEAR_DB;

      const tbody = document.getElementById('dashboard-table-rows');
      tbody.innerHTML = rows.map(r => {
        const isUp = r.upside >= 0;
        return `
          <tr onclick="openAssetInspector('${r.ticker}')" class="hover:bg-white/[0.03] transition cursor-pointer">
            <td class="py-3 pl-2 font-mono font-bold text-white">${r.ticker}</td>
            <td class="py-3">
              <div class="text-zinc-200 font-medium">${r.name}</div>
              <div class="text-[11px] text-zinc-500">${r.sector}</div>
            </td>
            <td class="py-3 text-right font-mono text-zinc-300">R$ ${r.price.toFixed(2).replace('.', ',')}</td>
            <td class="py-3 text-right font-mono text-zinc-400">R$ ${r.target.toFixed(2).replace('.', ',')}</td>
            <td class="py-3 text-right font-mono font-semibold ${isUp ? 'text-emerald-400' : 'text-rose-400'}">
              ${isUp ? '↗ +' : '↘ '}${r.upside.toFixed(1).replace('.', ',')}%
            </td>
            <td class="py-3 text-right font-mono text-[#FF6B00]">${r.dy.toFixed(1).replace('.', ',')}%</td>
            <td class="py-3 text-right pr-2 text-[11px] text-zinc-400 hover:text-white">Raio-X →</td>
          </tr>
        `;
      }).join('');
    }

    function applyStockFilters(preset) {
      if (preset === 'STARTER') {
        document.getElementById('flt-goal').value = 'ALL';
        document.getElementById('flt-dy').value = '7';
      } else {
        document.getElementById('flt-goal').value = 'ALL';
        document.getElementById('flt-dy').value = '0';
      }
      renderFullStocksGrid();
    }

    function renderFullStocksGrid(search = '') {
      const goal = document.getElementById('flt-goal').value;
      const minDy = parseFloat(document.getElementById('flt-dy').value) || 0;
      const sort = document.getElementById('flt-sort').value;

      let list = [];
      if (goal === 'AVOID') list = [...BEAR_DB];
      else if (goal === 'FII') list = ASSETS_DB.filter(a => a.type === 'FII');
      else if (goal === 'ALL') list = [...ASSETS_DB];
      else list = ASSETS_DB.filter(a => a.group === goal);

      if (minDy > 0) list = list.filter(a => a.dy >= minDy);

      if (search !== '') {
        const q = search.toLowerCase();
        list = [...ASSETS_DB, ...BEAR_DB].filter(a =>
          a.ticker.toLowerCase().includes(q) ||
          a.name.toLowerCase().includes(q) ||
          a.sector.toLowerCase().includes(q)
        );
      }

      list.sort((a, b) => {
        if (sort === 'upside') return b.upside - a.upside;
        if (sort === 'dy') return b.dy - a.dy;
        if (sort === 'pl') return (a.pl > 0 ? a.pl : 999) - (b.pl > 0 ? b.pl : 999);
        return (b.score || 0) - (a.score || 0);
      });

      const grid = document.getElementById('full-stocks-grid');
      grid.innerHTML = list.map(a => {
        const isUp = a.upside >= 0;
        return `
          <div onclick="openAssetInspector('${a.ticker}')" class="spotlight-card p-5 flex flex-col justify-between space-y-4 cursor-pointer">
            <div class="space-y-2.5">
              <div class="flex items-start justify-between">
                <div>
                  <div class="flex items-center gap-2">
                    <span class="font-mono font-bold text-base text-white">${a.ticker}</span>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300">${a.sector}</span>
                  </div>
                  <div class="text-xs text-zinc-400 mt-0.5">${a.name}</div>
                </div>
                <span class="font-mono tabular-nums text-xs font-semibold px-2.5 py-1 rounded-full ${isUp ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}">
                  ${isUp ? '↗ +' : '↘ '}${a.upside.toFixed(1).replace('.', ',')}%
                </span>
              </div>
              <p class="text-xs text-zinc-400 leading-relaxed">${a.thesis}</p>
            </div>
            <div class="space-y-3 pt-3 border-t border-white/[0.06] tabular-nums">
              <div class="grid grid-cols-4 gap-1.5 text-center font-mono bg-[#050507] p-2.5 rounded-xl">
                <div><div class="text-[9px] text-zinc-500">Preço</div><div class="text-xs font-semibold text-white">R$ ${a.price.toFixed(2).replace('.', ',')}</div></div>
                <div><div class="text-[9px] text-zinc-500">Alvo</div><div class="text-xs font-semibold text-[#FF6B00]">R$ ${a.target.toFixed(2).replace('.', ',')}</div></div>
                <div><div class="text-[9px] text-zinc-500">DY</div><div class="text-xs font-semibold text-emerald-400">${a.dy.toFixed(1).replace('.', ',')}%</div></div>
                <div><div class="text-[9px] text-zinc-500">${a.type === 'FII' ? 'P/VP' : 'P/L'}</div><div class="text-xs font-semibold text-zinc-200">${a.pl > 0 ? a.pl.toFixed(1).replace('.', ',') : '-'}</div></div>
              </div>
              <div class="flex items-center justify-between text-[11px] text-zinc-400">
                <span>Score Larius: <strong class="text-white font-mono">${a.score}/100</strong></span>
                <span class="text-[#FF6B00] font-medium">Demonstrar no Larius 3D →</span>
              </div>
            </div>
          </div>
        `;
      }).join('');
      bindSpotlightCards();
    }

    function updateCompoundSimulator() {
      const init = Math.max(0, parseFloat(document.getElementById('sim-init').value) || 10000);
      const month = Math.max(0, parseFloat(document.getElementById('sim-month').value) || 1000);
      const yrs = parseInt(document.getElementById('sim-years').value) || 10;
      const rate = (parseFloat(document.getElementById('sim-rate').value) || 16.2) / 100;
      const reinvest = document.getElementById('sim-reinvest').value === 'yes';

      document.getElementById('sim-yr-label').textContent = `${yrs} ${yrs === 1 ? 'ano' : 'anos'}`;

      const irRate = yrs <= 1 ? 0.20 : yrs === 2 ? 0.175 : 0.15;
      const effLarius = reinvest ? rate : rate * 0.62;
      const cdb100Gross = 0.122;
      const bank85Gross = 0.098;
      const poupRate = 0.074;

      const labels = [];
      const sLarius = [], sCdb = [], sBank = [], sPoup = [];

      for (let y = 0; y <= yrs; y++) {
        labels.push(`Ano ${y}`);
        const m = y * 12;
        const inv = init + month * m;
        const fv = (r) => {
          const rm = Math.pow(1 + r, 1 / 12) - 1;
          return m === 0 ? init : init * Math.pow(1 + rm, m) + month * ((Math.pow(1 + rm, m) - 1) / rm);
        };

        sLarius.push(Math.round(fv(effLarius)));
        const gCdb = fv(cdb100Gross);
        sCdb.push(Math.round(gCdb - Math.max(0, gCdb - inv) * irRate));
        const gBank = fv(bank85Gross);
        sBank.push(Math.round(gBank - Math.max(0, gBank - inv) * irRate));
        sPoup.push(Math.round(fv(poupRate)));
      }

      const totalInv = init + month * 12 * yrs;
      const endLarius = sLarius[sLarius.length - 1];
      const endCdb = sCdb[sCdb.length - 1];
      const endBank = sBank[sBank.length - 1];
      const endPoup = sPoup[sPoup.length - 1];

      const rmC = Math.pow(1 + cdb100Gross, 1 / 12) - 1;
      const grossEndCdb = init * Math.pow(1 + rmC, yrs * 12) + month * ((Math.pow(1 + rmC, yrs * 12) - 1) / rmC);
      const irCdbPaid = Math.round((grossEndCdb - totalInv) * irRate);

      document.getElementById('out-larius').textContent = 'R$ ' + endLarius.toLocaleString('pt-BR');
      document.getElementById('out-cdb100').textContent = 'R$ ' + endCdb.toLocaleString('pt-BR');
      document.getElementById('out-cdb100-ir').textContent = `-R$ ${irCdbPaid.toLocaleString('pt-BR')} retidos de IR (${(irRate*100).toFixed(1)}%)`;
      document.getElementById('out-bank85').textContent = 'R$ ' + endBank.toLocaleString('pt-BR');
      document.getElementById('out-poup').textContent = 'R$ ' + endPoup.toLocaleString('pt-BR');
      document.getElementById('out-advantage').textContent = `Vantagem Larius: +R$ ${(endLarius - endBank).toLocaleString('pt-BR')}`;

      document.getElementById('compound-summary-box').innerHTML = `
        <div class="p-3.5 rounded-xl bg-[#050507] border border-white/[0.06] flex justify-between">
          <span class="text-zinc-400">Total saído do seu bolso:</span>
          <strong class="font-mono text-white">R$ ${totalInv.toLocaleString('pt-BR')}</strong>
        </div>
        <div class="p-3.5 rounded-xl bg-[#050507] border border-white/[0.06] flex justify-between">
          <span class="text-zinc-400">Juros Compostos Puros (Larius):</span>
          <strong class="font-mono text-emerald-400">+R$ ${(endLarius - totalInv).toLocaleString('pt-BR')}</strong>
        </div>
        <div class="p-3.5 rounded-xl bg-[#050507] border border-white/[0.06] space-y-1">
          <div class="font-semibold text-[#FF6B00]">Por que a Carteira Larius vence os bancos?</div>
          <p class="text-[11px] text-zinc-400 leading-relaxed">
            Enquanto o CDB sofre retenção obrigatória de ${(irRate*100).toFixed(1)}% de IR (R$ ${irCdbPaid.toLocaleString('pt-BR')}), os dividendos de Ações e FIIs são 100% isentos e reinvestidos integralmente todo mês.
          </p>
        </div>
      `;

      const ctx = document.getElementById('compoundCurveChart').getContext('2d');
      if (compoundChartObj) compoundChartObj.destroy();
      compoundChartObj = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            { label: 'Carteira Larius (Líquida)', data: sLarius, borderColor: '#FF6B00', borderWidth: 2.5, tension: 0.35 },
            { label: 'CDB 100% CDI (Líquido IR)', data: sCdb, borderColor: '#34d399', borderWidth: 2, tension: 0.35 },
            { label: 'Banco Tradicional (85% CDI)', data: sBank, borderColor: '#a1a1aa', borderDash: [4, 4], borderWidth: 1.5, tension: 0.35 },
            { label: 'Poupança', data: sPoup, borderColor: '#52525b', borderWidth: 1.5, tension: 0.35 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: { legend: { labels: { color: '#a1a1aa', font: { size: 11 } } } },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#71717a', font: { size: 10 } } },
            y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#71717a', font: { size: 10 } } }
          }
        }
      });
    }

    function renderBrokers(mode = 'ALL') {
      ['ALL', 'ZERO'].forEach(m => {
        const b = document.getElementById(`brk-${m}`);
        if (m === mode) b.classList.add('active');
        else b.classList.remove('active');
      });

      const list = mode === 'ZERO' ? BROKERS_DB.filter(b => b.zero) : BROKERS_DB;
      document.getElementById('brokers-grid').innerHTML = list.map(b => `
        <div onclick="selectBroker('${b.id}')" class="spotlight-card p-5 flex flex-col justify-between space-y-4 cursor-pointer">
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br ${b.grad} flex flex-col items-center justify-center shadow-lg border border-white/15">
                <span class="font-bold text-sm text-white leading-none">${b.logo}</span>
                <span class="text-[8px] uppercase text-white/80 mt-0.5">${b.logoSub}</span>
              </div>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-full ${b.zero ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'}">
                ${b.zero ? 'Taxa Zero' : b.feeStock}
              </span>
            </div>
            <div>
              <h3 class="text-sm font-semibold text-white">${b.name}</h3>
              <p class="text-[11px] text-zinc-500">${b.sub}</p>
            </div>
            <div class="space-y-1 pt-2 border-t border-white/[0.06] text-xs tabular-nums">
              <div class="flex justify-between"><span class="text-zinc-500">Corretagem Ações:</span><span class="font-mono text-white">${b.feeStock}</span></div>
              <div class="flex justify-between"><span class="text-zinc-500">Corretagem FIIs:</span><span class="font-mono text-emerald-400">${b.feeFii}</span></div>
              <div class="flex justify-between"><span class="text-zinc-500">Facilidade App:</span><span class="font-mono text-[#FF6B00]">${b.ease}</span></div>
            </div>
          </div>
          <div class="text-[11px] text-zinc-400 pt-2 border-t border-white/[0.04] flex justify-between">
            <span>Ver análise completa</span><span>→</span>
          </div>
        </div>
      `).join('');
      selectBroker(list[0].id);
      bindSpotlightCards();
    }

    function selectBroker(id) {
      const b = BROKERS_DB.find(x => x.id === id);
      if (!b) return;
      document.getElementById('broker-detail-card').innerHTML = `
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${b.grad} flex flex-col items-center justify-center shadow-xl border border-white/20 shrink-0">
              <span class="font-bold text-base text-white leading-none">${b.logo}</span>
              <span class="text-[9px] uppercase text-white/80 mt-0.5">${b.logoSub}</span>
            </div>
            <div>
              <h3 class="text-base font-bold text-white">${b.name} — Veredito do Larius</h3>
              <p class="text-xs text-zinc-300 mt-1 max-w-3xl">${b.verdict}</p>
            </div>
          </div>
          <button onclick="switchView('larius'); askLarius('Larius, me mostre na tela 3D se vale a pena usar o ${b.name} para comprar minhas primeiras ações!')" class="px-4 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#ff7b1a] text-[#050507] font-semibold text-xs shrink-0">
            Demonstrar no Larius 3D →
          </button>
        </div>
      `;
    }

    function openAssetInspector(ticker) {
      const a = [...ASSETS_DB, ...BEAR_DB].find(x => x.ticker === ticker);
      if (!a) return;
      document.getElementById('insp-ticker').textContent = a.ticker;
      document.getElementById('insp-name').textContent = `${a.name} • ${a.sector}`;
      const isUp = a.upside >= 0;
      document.getElementById('insp-body').innerHTML = `
        <div class="grid grid-cols-4 gap-2 bg-[#050507] p-3.5 rounded-xl border border-white/[0.07] font-mono tabular-nums text-center">
          <div><div class="text-[10px] text-zinc-500">Cotação</div><div class="text-sm font-bold text-white">R$ ${a.price.toFixed(2).replace('.', ',')}</div></div>
          <div><div class="text-[10px] text-zinc-500">Alvo Larius</div><div class="text-sm font-bold text-[#FF6B00]">R$ ${a.target.toFixed(2).replace('.', ',')}</div></div>
          <div><div class="text-[10px] text-zinc-500">Upside</div><div class="text-sm font-bold ${isUp ? 'text-emerald-400' : 'text-rose-400'}">${isUp ? '+' : ''}${a.upside}%</div></div>
          <div><div class="text-[10px] text-zinc-500">Dividendos</div><div class="text-sm font-bold text-emerald-400">${a.dy}%</div></div>
        </div>
        <div class="p-3.5 rounded-xl bg-[#050507] border border-white/[0.06]">
          <div class="font-semibold text-white mb-1">Tese Fundamentalista (Nov/2026):</div>
          <p class="text-zinc-400">${a.thesis}</p>
        </div>
        <div class="flex justify-end gap-2">
          <button onclick="closeAssetInspector(); switchView('larius'); askLarius('Larius, faça uma demonstração completa da ação ${a.ticker} (${a.name}) para mim!')" class="px-4 py-2 rounded-xl bg-[#FF6B00] text-[#050507] font-semibold text-xs">
            Ouvir Explicação do Larius em 3D →
          </button>
        </div>
      `;
      const m = document.getElementById('asset-inspector-modal');
      m.classList.remove('hidden');
      m.classList.add('flex');
    }

    function closeAssetInspector() {
      const m = document.getElementById('asset-inspector-modal');
      m.classList.add('hidden');
      m.classList.remove('flex');
    }

    let homeIsSpeaking = true;
    let audioContextRef = null;
    let analyserRef = null;
    let dataArrayRef = null;
    let smoothedEnergyRef = 0;

    function connectAudioSource(sourceNode) {
      if (!audioContextRef) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        audioContextRef = new AudioCtx();
      }
      if (audioContextRef.state === 'suspended') audioContextRef.resume();

      const analyser = audioContextRef.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.75;

      if (sourceNode instanceof HTMLAudioElement) {
        const source = audioContextRef.createMediaElementSource(sourceNode);
        source.connect(analyser);
        analyser.connect(audioContextRef.destination);
      } else {
        const source = audioContextRef.createMediaStreamSource(sourceNode);
        source.connect(analyser);
      }

      analyserRef = analyser;
      dataArrayRef = new Uint8Array(analyser.frequencyBinCount);
    }

    function getAudioEnergy() {
      if (!analyserRef || !dataArrayRef) return 0;
      analyserRef.getByteFrequencyData(dataArrayRef);
      let sum = 0;
      const voiceBins = 30;
      for (let i = 2; i < voiceBins + 2; i++) {
        sum += dataArrayRef[i];
      }
      const rawEnergy = sum / (voiceBins * 255);
      smoothedEnergyRef += (rawEnergy - smoothedEnergyRef) * 0.25;
      return smoothedEnergyRef;
    }

    async function connectMicToAnalyzer() {
      const lbl = document.getElementById('btn-mic-analyzer-lbl');
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        connectAudioSource(stream);
        if (lbl) lbl.textContent = 'Microfone Conectado ✓';
      } catch (err) {
        if (lbl) lbl.textContent = 'Simulação Ativa';
      }
    }

    function toggleHomeIsSpeaking() {
      homeIsSpeaking = !homeIsSpeaking;
      const propVal = document.getElementById('home-prop-val');
      const btn = document.getElementById('btn-toggle-speaking');
      const dot = document.getElementById('btn-speaking-dot');
      const lbl = document.getElementById('btn-speaking-label');
      const statusDot = document.getElementById('home-core-status-dot');
      const statusText = document.getElementById('home-core-status-text');
      const card = document.getElementById('home-larius-spotlight');

      if (propVal) propVal.textContent = homeIsSpeaking ? 'true' : 'false';
      if (card) {
        if (homeIsSpeaking) card.classList.add('active');
        else card.classList.remove('active');
      }

      if (homeIsSpeaking) {
        btn.className = 'inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition-all border bg-[#FF6B00] text-[#050507] border-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.4)]';
        dot.className = 'h-2 w-2 rounded-full bg-[#050507] animate-ping';
        lbl.textContent = 'isSpeaking: true';
        statusDot.className = 'h-1.5 w-1.5 rounded-full animate-ping bg-[#FF6B00]';
        statusText.textContent = 'LARIUS // TRANSMITINDO';
      } else {
        btn.className = 'inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition-all border bg-[#0A0A0E] text-zinc-300 border-white/[0.12] hover:border-[#FF6B00]/50';
        dot.className = 'h-2 w-2 rounded-full bg-zinc-500';
        lbl.textContent = 'isSpeaking: false';
        statusDot.className = 'h-1.5 w-1.5 rounded-full bg-zinc-500';
        statusText.textContent = 'LARIUS // STANDBY';
      }
    }

    const SAMPLE_PORTFOLIO = [
      {
        id: 'tesouro_selic',
        ticker: 'LFT / Selic',
        name: 'Tesouro Selic Pós-Fixado',
        category: 'Renda Fixa',
        allocation: 40,
        position: [-1.8, 1.4, -0.9],
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
        position: [-0.5, 2.2, 0.7],
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
        position: [0.95, 1.8, -0.2],
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
        position: [2.1, 2.6, 0.95],
        color: '#38BDF8',
        metrics: {
          beginnerSummary: 'Grandes empresas brasileiras com receitas em dólar, protegendo seu patrimônio contra variações cambiais.',
          intermediateInfo: 'Hedge natural contra risco fiscal doméstico e exposição ao ciclo global de commodities/indústria.',
          seniorMetrics: { dy: '7,8% a.a.', sharpe: 1.12, beta: 1.15, durationOrPvp: 'P/VP: 1.85' },
        },
      },
    ];
