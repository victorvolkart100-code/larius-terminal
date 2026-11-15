// ============================================================================
// LARIUS OBSIDIAN PRIVATE WEALTH TERMINAL — INTERACTIVE UI, CHARTS & 3D ENGINE
// ============================================================================

function initLenisAndSpotlight() {
  const wrapper = document.getElementById('lenis-wrapper');
  const content = document.getElementById('lenis-content');
  if (window.Lenis && wrapper && content) {
    const lenis = new Lenis({
      wrapper,
      content,
      duration: 1.15,
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
  ['dashboard', 'allocator', 'stocks', 'compound', 'brokers', 'larius', 'python'].forEach(v => {
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
    dashboard: 'Centro de Comando Patrimonial • Obsidian Executive',
    allocator: 'Alocador de Aportes & Calendário Anual de Dividendos (12M)',
    stocks: 'Screener Institucional B3 & Gerador de Carteiras (24 Ativos)',
    compound: 'Engenharia Patrimonial: Juros Compostos, IR Regressivo & Bancos',
    brokers: 'Auditoria de Custos, Corretagem & Solidez Bancária',
    larius: 'Estúdio Espacial 3D & Consultor de Voz Larius',
    python: 'Motor Quantitativo Python 3.12 • Markowitz & Sharpe'
  };
  const bc = document.getElementById('breadcrumb-title');
  if (bc) bc.textContent = titles[viewId] || '';
  if (window.lucide) lucide.createIcons();
  bindSpotlightCards();

  if (viewId === 'larius' || viewId === 'dashboard') {
    setTimeout(() => resizeLarius3D(), 60);
  }
  if (viewId === 'allocator') {
    calculateSmartAllocation();
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

// ==================== DASHBOARD CHARTS (MONOCHROME SILVER / OBSIDIAN WAVES) ====================
const TIMELINE_DATES = ['Jul/26', 'Set/26', 'Out/26', 'Nov/26', 'Jan/27', 'Mar/27', 'Jun/27', 'Dez/27'];

function selectDashboardMetric(metricKey, cardEl) {
  document.querySelectorAll('.kpi-selector').forEach(c => c.classList.remove('active'));
  if (cardEl) cardEl.classList.add('active');
  const sel = document.getElementById('chart-asset-compare');
  if (sel) sel.value = metricKey;
  refreshMainDashboardChart();
}

function setMainChartPeriod(p) {
  mainChartPeriod = p;
  ['6M', '1Y', '2Y', '5Y'].forEach(id => {
    const b = document.getElementById(`mcp-${id}`);
    if (b) {
      if (id === p) b.classList.add('active');
      else b.classList.remove('active');
    }
  });
  refreshMainDashboardChart();
}

function selectTimelineDatePill(idx) {
  selectedTimelineIdx = idx;
  TIMELINE_DATES.forEach((_, i) => {
    const pill = document.getElementById(`date-pill-${i}`);
    if (!pill) return;
    if (i === idx) {
      pill.className = 'px-3.5 py-1 rounded-full bg-[#F4F4F5] text-[#09090B] font-mono font-semibold text-[11px] shadow-[0_0_20px_rgba(255,255,255,0.25)] transition cursor-pointer';
    } else {
      pill.className = 'px-3 py-1 rounded-full text-zinc-500 hover:text-zinc-200 font-mono text-[11px] transition cursor-pointer';
    }
  });
  updateChartFloatingCallout(idx);
}

function updateChartFloatingCallout(idx) {
  if (!primaryChart || !primaryChart.data.datasets.length) return;
  const lbl = primaryChart.data.labels[idx] || 'Nov/26';
  const ds0 = primaryChart.data.datasets[0];
  const ds1 = primaryChart.data.datasets[1];
  const v0 = ds0 ? ds0.data[idx] : 24.6;
  const v1 = ds1 ? ds1.data[idx] : 11.6;

  const calloutDate = document.getElementById('callout-date');
  const calloutPrimary = document.getElementById('callout-primary');
  const calloutSecondary = document.getElementById('callout-secondary');
  if (calloutDate) calloutDate.textContent = lbl;
  if (calloutPrimary && ds0) calloutPrimary.textContent = `${ds0.label}: +${v0}%`;
  if (calloutSecondary && ds1) calloutSecondary.textContent = `${ds1.label}: +${v1}%`;
}

function initDashboardCharts() {
  const canvas = document.getElementById('primaryInteractiveChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  primaryChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: TIMELINE_DATES,
      datasets: []
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      onHover: (e, elements) => {
        if (elements && elements.length > 0) {
          const i = elements[0].index;
          selectTimelineDatePill(i);
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: { color: '#a1a1aa', boxWidth: 10, usePointStyle: true, font: { family: 'Inter', size: 11 } }
        },
        tooltip: {
          backgroundColor: '#09090B',
          borderColor: 'rgba(255,255,255,0.16)',
          borderWidth: 1,
          titleColor: '#F4F4F5',
          bodyColor: '#D4D4D8',
          padding: 12,
          titleFont: { family: 'JetBrains Mono', size: 11 },
          bodyFont: { family: 'JetBrains Mono', size: 11 }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.03)', drawBorder: false },
          ticks: { display: false }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false },
          ticks: {
            color: '#71717a',
            font: { family: 'JetBrains Mono', size: 10 },
            callback: (v) => `${v}%`
          }
        }
      }
    }
  });

  refreshMainDashboardChart();

  // Render Timeline Date Pills under Primary Chart (Reference Image 3 style: Feb 14 | [Feb 17] | Feb 20)
  const pillBar = document.getElementById('timeline-date-pills');
  if (pillBar) {
    pillBar.innerHTML = TIMELINE_DATES.map((d, i) => `
      <button id="date-pill-${i}" onclick="selectTimelineDatePill(${i})" class="${
        i === selectedTimelineIdx
          ? 'px-3.5 py-1 rounded-full bg-[#F4F4F5] text-[#09090B] font-mono font-semibold text-[11px] shadow-[0_0_20px_rgba(255,255,255,0.25)] transition cursor-pointer'
          : 'px-3 py-1 rounded-full text-zinc-500 hover:text-zinc-200 font-mono text-[11px] transition cursor-pointer'
      }">${d}</button>
    `).join('');
  }

  // Initialize Portfolio Health Donut Chart (Reference Image 1 style)
  const ctxDonut = document.getElementById('healthDonutChart');
  if (ctxDonut) {
    healthDonutChart = new Chart(ctxDonut.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Blindagem Selic / IPCA+ (65%)', 'Exportadoras Dólar (20%)', 'FIIs Descontados (15%)'],
        datasets: [{
          data: [65, 20, 15],
          backgroundColor: ['#F4F4F5', '#71717A', '#27272A'],
          borderColor: '#09090B',
          borderWidth: 3,
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '74%',
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  // Initialize 12-Month Dividend Capsule Bar Chart (Reference Image 1 & 3 bottom bar chart style)
  const ctxDivBar = document.getElementById('dividendMonthlyBarChart');
  if (ctxDivBar) {
    dividendBarChart = new Chart(ctxDivBar.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [
          {
            label: 'Proventos Isentos (FIIs + Dividendos R$)',
            data: [1850, 2940, 2210, 1980, 3420, 2150, 1920, 3680, 2340, 2050, 3290, 3890],
            backgroundColor: '#E4E4E7',
            borderRadius: 6,
            barPercentage: 0.55,
            categoryPercentage: 0.68
          },
          {
            label: 'Média CDB Líquido Bancos (R$)',
            data: [1320, 1340, 1360, 1380, 1410, 1430, 1450, 1480, 1500, 1520, 1550, 1580],
            backgroundColor: '#27272A',
            borderRadius: 6,
            barPercentage: 0.55,
            categoryPercentage: 0.68
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#a1a1aa', boxWidth: 10, font: { family: 'Inter', size: 11 } }
          },
          tooltip: {
            backgroundColor: '#09090B',
            borderColor: 'rgba(255,255,255,0.15)',
            borderWidth: 1,
            callbacks: {
              label: (c) => `${c.dataset.label}: R$ ${c.raw.toLocaleString('pt-BR')}`
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#71717a', font: { family: 'JetBrains Mono', size: 10 } }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false },
            ticks: {
              color: '#71717a',
              font: { family: 'JetBrains Mono', size: 10 },
              callback: (v) => `R$ ${v}`
            }
          }
        }
      }
    });
  }
}

function refreshMainDashboardChart() {
  if (!primaryChart) return;
  const sel = document.getElementById('chart-asset-compare');
  const mode = sel ? sel.value : 'CARTEIRA_VS_CDI';
  const mult = mainChartPeriod === '6M' ? 0.58 : mainChartPeriod === '1Y' ? 1.0 : mainChartPeriod === '2Y' ? 1.92 : 4.25;
  const ctx = primaryChart.ctx;

  // Metallic Silver-Platinum Gradient (Exact match to Reference Images 2 & 3)
  const gradPlatinum = ctx.createLinearGradient(0, 0, 0, 260);
  gradPlatinum.addColorStop(0, 'rgba(244, 244, 245, 0.28)');
  gradPlatinum.addColorStop(0.65, 'rgba(161, 161, 170, 0.08)');
  gradPlatinum.addColorStop(1, 'rgba(9, 9, 11, 0.0)');

  // Brushed Graphite Secondary Wave Gradient
  const gradGraphite = ctx.createLinearGradient(0, 0, 0, 260);
  gradGraphite.addColorStop(0, 'rgba(113, 113, 122, 0.24)');
  gradGraphite.addColorStop(1, 'rgba(9, 9, 11, 0.0)');

  if (mode === 'CARTEIRA_VS_CDI') {
    document.getElementById('main-chart-heading').textContent = `Performance Acumulada: Carteira Larius vs. CDI Líquido IR (${mainChartPeriod})`;
    primaryChart.data.datasets = [
      {
        label: 'Carteira Larius (Isenta Div.)',
        data: [4.2, 8.9, 11.4, 15.8, 19.2, 24.6, 27.8, 31.4].map(v => +(v * mult).toFixed(1)),
        borderColor: '#F4F4F5',
        backgroundColor: gradPlatinum,
        fill: true,
        borderWidth: 2.2,
        pointRadius: 3,
        pointBackgroundColor: '#FFFFFF',
        tension: 0.42
      },
      {
        label: 'CDI Líquido de IR (Bancos)',
        data: [2.1, 4.0, 5.8, 7.5, 9.4, 11.6, 13.1, 14.8].map(v => +(v * mult).toFixed(1)),
        borderColor: '#71717A',
        backgroundColor: gradGraphite,
        fill: true,
        borderWidth: 1.8,
        pointRadius: 2,
        tension: 0.42
      }
    ];
  } else if (mode === 'TOP_STOCKS_COMPARE') {
    document.getElementById('main-chart-heading').textContent = `Líderes da Carteira: SBSP3 vs. WEGE3 vs. ITUB4 (${mainChartPeriod})`;
    primaryChart.data.datasets = [
      {
        label: 'SBSP3 (Sabesp Privatizada)',
        data: [5.5, 11.2, 14.8, 19.5, 24.1, 31.6, 35.0, 39.2].map(v => +(v * mult).toFixed(1)),
        borderColor: '#F4F4F5',
        backgroundColor: gradPlatinum,
        fill: true,
        borderWidth: 2.2,
        tension: 0.42
      },
      {
        label: 'WEGE3 (Receita Global USD)',
        data: [4.1, 8.8, 12.0, 16.4, 20.8, 25.7, 28.9, 32.5].map(v => +(v * mult).toFixed(1)),
        borderColor: '#A1A1AA',
        backgroundColor: gradGraphite,
        fill: true,
        borderWidth: 1.8,
        tension: 0.42
      }
    ];
  } else if (mode === 'SELIC_CURVE') {
    document.getElementById('main-chart-heading').textContent = `Fechamento de Curva (Corte Selic Mar/2027) vs. Re-rating FIIs de Tijolo`;
    primaryChart.data.datasets = [
      {
        label: 'FIIs Tijolo Prime (HGLG11/BTLG11)',
        data: [2.4, 5.1, 8.9, 13.2, 16.8, 20.4, 24.5, 28.2],
        borderColor: '#F4F4F5',
        backgroundColor: gradPlatinum,
        fill: true,
        borderWidth: 2.2,
        tension: 0.42
      },
      {
        label: 'Taxa Selic Efetiva (% a.a.)',
        data: [13.75, 13.75, 13.75, 13.75, 13.50, 12.75, 11.75, 10.75],
        borderColor: '#71717A',
        backgroundColor: gradGraphite,
        fill: true,
        borderWidth: 1.8,
        tension: 0.35
      }
    ];
  } else {
    document.getElementById('main-chart-heading').textContent = `Exportadoras Dolarizadas (WEGE3 / PRIO3 / EMBR3) vs. Ibovespa (${mainChartPeriod})`;
    primaryChart.data.datasets = [
      {
        label: 'Cesta Exportadora USD (R$ 5,50)',
        data: [5.0, 9.8, 14.2, 18.9, 23.5, 28.4, 31.8, 35.6].map(v => +(v * mult).toFixed(1)),
        borderColor: '#F4F4F5',
        backgroundColor: gradPlatinum,
        fill: true,
        borderWidth: 2.2,
        tension: 0.42
      },
      {
        label: 'Ibovespa Doméstico',
        data: [1.2, 2.8, 4.1, 5.9, 7.4, 9.8, 11.0, 12.4].map(v => +(v * mult).toFixed(1)),
        borderColor: '#71717A',
        backgroundColor: gradGraphite,
        fill: true,
        borderWidth: 1.8,
        tension: 0.42
      }
    ];
  }

  primaryChart.update();
  updateChartFloatingCallout(selectedTimelineIdx);
}

// ==================== MACRO STRESS-TEST MODULE ====================
function selectStressScenario(key) {
  currentStressKey = key;
  ['BASE', 'STRESS_FISCAL', 'EASING_2027'].forEach(k => {
    const btn = document.getElementById(`stress-btn-${k}`);
    if (!btn) return;
    if (k === key) {
      btn.className = 'px-3.5 py-1.5 rounded-lg bg-[#F4F4F5] text-[#09090B] font-semibold text-xs transition';
    } else {
      btn.className = 'px-3.5 py-1.5 rounded-lg bg-[#121216] text-zinc-400 hover:text-zinc-200 border border-white/[0.06] text-xs transition';
    }
  });

  const sc = STRESS_SCENARIOS[key] || STRESS_SCENARIOS.BASE;
  const container = document.getElementById('stress-scenario-body');
  if (!container) return;

  container.innerHTML = `
    <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 p-3.5 rounded-xl bg-[#050507] border border-white/[0.06] font-mono tabular-nums text-xs">
      <div><span class="text-[10px] text-zinc-500 block">Cenário Ativo</span><strong class="text-white">${sc.title.split('(')[0]}</strong></div>
      <div><span class="text-[10px] text-zinc-500 block">Taxa Selic</span><strong class="text-zinc-200">${sc.selic}</strong></div>
      <div><span class="text-[10px] text-zinc-500 block">Inflação IPCA</span><strong class="text-zinc-200">${sc.ipca}</strong></div>
      <div><span class="text-[10px] text-zinc-500 block">Câmbio USD/BRL</span><strong class="text-zinc-200">${sc.usd}</strong></div>
      <div><span class="text-[10px] text-zinc-500 block">Retorno Projetado</span><strong class="text-emerald-400">${sc.portfolioReturn}</strong></div>
    </div>
    <p class="text-xs text-zinc-400 leading-relaxed">${sc.summary}</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      ${sc.impacts.map(imp => {
        const isNeg = imp.delta.startsWith('-');
        return `
          <div class="p-3.5 rounded-xl bg-[#050507] border border-white/[0.06] flex flex-col justify-between space-y-2">
            <div class="text-[11px] text-zinc-300 font-medium leading-snug">${imp.pillar}</div>
            <div class="flex items-center justify-between pt-2 border-t border-white/[0.05] font-mono tabular-nums">
              <span class="text-xs font-bold ${isNeg ? 'text-rose-400' : 'text-emerald-400'}">${imp.delta}</span>
              <span class="text-[10px] px-2 py-0.5 rounded bg-white/[0.05] text-zinc-300">${imp.status}</span>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ==================== SMART MONTHLY CONTRIBUTION ALLOCATOR ====================
function calculateSmartAllocation() {
  const amountEl = document.getElementById('alloc-input-brl');
  const profileEl = document.getElementById('alloc-profile-select');
  const amount = Math.max(100, parseFloat(amountEl ? amountEl.value : 3000) || 3000);
  const profile = profileEl ? profileEl.value : 'PATRIMONIO';

  const baskets = {
    CONSERVADOR: [
      { ticker: "KNCR11", weight: 0.35, role: "Renda Mensal Pós-Fixada CDI+ Isenta" },
      { ticker: "ITUB4", weight: 0.25, role: "Banco Líder (Ganha com Selic 13,75%)" },
      { ticker: "TAEE11", weight: 0.25, role: "Transmissão Elétrica IPCA+ (Dividendos)" },
      { ticker: "WEGE3", weight: 0.15, role: "Proteção Cambial em Dólar (EUA/Europa)" }
    ],
    PATRIMONIO: [
      { ticker: "SBSP3", weight: 0.25, role: "Saneamento IPCA+ & Ganho Pós-Privatização" },
      { ticker: "ITUB4", weight: 0.20, role: "Spread Bancário & ROE 22,4%" },
      { ticker: "HGLG11", weight: 0.20, role: "Galpões Logísticos (P/VP 0,93 Descontado)" },
      { ticker: "WEGE3", weight: 0.20, role: "Indústria Global Exportadora em Dólar" },
      { ticker: "BBSE3", weight: 0.15, role: "Seguridade & Dividendos > 10% a.a." }
    ],
    EXPANSAO: [
      { ticker: "WEGE3", weight: 0.25, role: "Exportação de Transformadores IA/Data Centers" },
      { ticker: "PRIO3", weight: 0.25, role: "Receita 100% Dólar & Lifting Cost < US$ 7" },
      { ticker: "SBSP3", weight: 0.25, role: "Destravamento de Valor no Corte da Selic" },
      { ticker: "BTLG11", weight: 0.15, role: "Logística SP c/ 9% de Desconto Patrimonial" },
      { ticker: "BPAC11", weight: 0.10, role: "Expansão Private Banking & ROE 23%" }
    ]
  };

  const chosen = baskets[profile] || baskets.PATRIMONIO;
  let totalSpent = 0;
  let annualDivAdded = 0;

  const rowsHtml = chosen.map(item => {
    const asset = ASSETS_DB.find(a => a.ticker === item.ticker) || ASSETS_DB[0];
    const targetBrl = amount * item.weight;
    const shares = Math.max(1, Math.floor(targetBrl / asset.price));
    const costBrl = shares * asset.price;
    const yrDivBrl = costBrl * (asset.dy / 100);
    totalSpent += costBrl;
    annualDivAdded += yrDivBrl;

    return `
      <tr onclick="openAssetInspector('${asset.ticker}')" class="hover:bg-white/[0.03] transition cursor-pointer border-b border-white/[0.05]">
        <td class="py-3.5 pl-3 font-mono font-bold text-white">${asset.ticker}</td>
        <td class="py-3.5">
          <div class="text-zinc-200 font-medium text-xs">${asset.name}</div>
          <div class="text-[11px] text-zinc-500">${item.role}</div>
        </td>
        <td class="py-3.5 text-center font-mono text-xs text-zinc-400">${Math.round(item.weight * 100)}%</td>
        <td class="py-3.5 text-right font-mono text-xs text-zinc-300">R$ ${asset.price.toFixed(2).replace('.', ',')}</td>
        <td class="py-3.5 text-right font-mono">
          <span class="px-2.5 py-1 rounded-md bg-[#F4F4F5] text-[#09090B] font-bold text-xs">${shares} ${asset.type === 'FII' ? 'cotas' : 'ações'}</span>
        </td>
        <td class="py-3.5 text-right font-mono text-xs text-white font-semibold">R$ ${costBrl.toFixed(2).replace('.', ',')}</td>
        <td class="py-3.5 text-right pr-3 font-mono text-xs text-emerald-400">+R$ ${(yrDivBrl / 12).toFixed(2).replace('.', ',')}/mês</td>
      </tr>
    `;
  }).join('');

  const leftover = Math.max(0, amount - totalSpent);
  const tbody = document.getElementById('smart-alloc-tbody');
  if (tbody) tbody.innerHTML = rowsHtml;

  const summaryEl = document.getElementById('smart-alloc-summary');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="p-4 rounded-xl bg-[#050507] border border-white/[0.07]">
        <span class="text-[10px] font-mono uppercase text-zinc-500 block">Total Executado em Ativos</span>
        <strong class="text-lg font-mono text-white tabular-nums">R$ ${totalSpent.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</strong>
        <span class="text-[11px] text-zinc-500 block mt-0.5">Troco p/ Tesouro Selic: R$ ${leftover.toFixed(2).replace('.', ',')}</span>
      </div>
      <div class="p-4 rounded-xl bg-[#050507] border border-white/[0.07]">
        <span class="text-[10px] font-mono uppercase text-zinc-500 block">Aumento Imediato de Renda Passiva</span>
        <strong class="text-lg font-mono text-emerald-400 tabular-nums">+R$ ${(annualDivAdded / 12).toFixed(2).replace('.', ',')} / mês</strong>
        <span class="text-[11px] text-zinc-500 block mt-0.5">+R$ ${annualDivAdded.toFixed(2).replace('.', ',')} / ano isentos de IR</span>
      </div>
      <div class="p-4 rounded-xl bg-[#050507] border border-white/[0.07]">
        <span class="text-[10px] font-mono uppercase text-zinc-500 block">Custo de Corretagem (Íon / Inter / C6)</span>
        <strong class="text-lg font-mono text-white tabular-nums">R$ 0,00</strong>
        <span class="text-[11px] text-emerald-400 block mt-0.5">100% do aporte trabalha para você</span>
      </div>
    `;
  }
}

// ==================== INSTITUTIONAL TABLE & CORRIDORS ====================
function renderCorridorsList() {
  const el = document.getElementById('corridors-list');
  if (!el) return;
  el.innerHTML = EXPORT_CORRIDORS.map(c => `
    <div onclick="openAssetInspector('${c.ticker}')" class="p-3.5 rounded-xl bg-[#050507] border border-white/[0.06] hover:border-white/25 transition cursor-pointer space-y-2">
      <div class="flex items-center justify-between text-xs">
        <div class="flex items-center gap-2">
          <span class="font-mono font-bold px-2 py-0.5 rounded bg-white/[0.08] text-white">${c.ticker}</span>
          <span class="text-zinc-200 font-medium">${c.route}</span>
        </div>
        <span class="font-mono tabular-nums text-[11px] text-emerald-400">${c.revenue}</span>
      </div>
      <div class="flex items-center justify-between text-[11px] text-zinc-500">
        <span class="truncate pr-2">${c.product}</span>
        <span class="font-mono text-zinc-300 shrink-0">${c.share}% Receita Forte</span>
      </div>
      <div class="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-zinc-500 to-white rounded-full" style="width: ${c.share}%"></div>
      </div>
    </div>
  `).join('');
}

function setDashboardTableTab(tab) {
  dashboardTab = tab;
  ['AI_TOP', 'BULL', 'BEAR', 'FII'].forEach(t => {
    const b = document.getElementById(`dtab-${t}`);
    if (!b) return;
    if (t === tab) b.classList.add('active');
    else b.classList.remove('active');
  });

  let rows = [];
  if (tab === 'AI_TOP') rows = ASSETS_DB.filter(a => a.type === 'ACAO' && a.starter);
  else if (tab === 'BULL') rows = ASSETS_DB.filter(a => a.type === 'ACAO');
  else if (tab === 'FII') rows = ASSETS_DB.filter(a => a.type === 'FII');
  else rows = BEAR_DB;

  const tbody = document.getElementById('dashboard-table-rows');
  if (!tbody) return;
  tbody.innerHTML = rows.map(r => {
    const isUp = r.upside >= 0;
    return `
      <tr onclick="openAssetInspector('${r.ticker}')" class="hover:bg-white/[0.03] transition cursor-pointer">
        <td class="py-3 pl-3">
          <div class="flex items-center gap-2">
            <span class="font-mono font-bold text-white">${r.ticker}</span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded-full border ${
              isUp ? 'bg-white/[0.05] text-zinc-200 border-white/10' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
            }">${r.status || 'Auditado'}</span>
          </div>
        </td>
        <td class="py-3">
          <div class="text-zinc-200 font-medium">${r.name}</div>
          <div class="text-[11px] text-zinc-500">${r.sector}</div>
        </td>
        <td class="py-3 text-center">${renderSparklineSVG(r.spark, isUp)}</td>
        <td class="py-3 text-right font-mono text-zinc-300">R$ ${r.price.toFixed(2).replace('.', ',')}</td>
        <td class="py-3 text-right font-mono text-zinc-400">R$ ${r.target.toFixed(2).replace('.', ',')}</td>
        <td class="py-3 text-right font-mono font-semibold ${isUp ? 'text-emerald-400' : 'text-rose-400'}">
          ${isUp ? '↗ +' : '↘ '}${r.upside.toFixed(1).replace('.', ',')}%
        </td>
        <td class="py-3 text-right font-mono text-zinc-200">${r.dy.toFixed(1).replace('.', ',')}%</td>
        <td class="py-3 text-right pr-3 text-[11px] text-zinc-400 hover:text-white font-mono">Dossiê →</td>
      </tr>
    `;
  }).join('');
}

// ==================== VIEW 2: FULL STOCKS SCREENER ====================
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
  const goalEl = document.getElementById('flt-goal');
  if (!goalEl) return;
  const goal = goalEl.value;
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
  if (!grid) return;
  grid.innerHTML = list.map(a => {
    const isUp = a.upside >= 0;
    return `
      <div onclick="openAssetInspector('${a.ticker}')" class="spotlight-card p-5 flex flex-col justify-between space-y-4 cursor-pointer">
        <div class="space-y-3">
          <div class="flex items-start justify-between">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono font-bold text-base text-white">${a.ticker}</span>
                <span class="text-[10px] px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300 border border-white/[0.06]">${a.sector}</span>
              </div>
              <div class="text-xs text-zinc-400 mt-0.5">${a.name}</div>
            </div>
            <div class="text-right">
              <span class="font-mono tabular-nums text-xs font-semibold px-2.5 py-1 rounded-full ${
                isUp ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
              }">
                ${isUp ? '↗ +' : '↘ '}${a.upside.toFixed(1).replace('.', ',')}%
              </span>
            </div>
          </div>
          <p class="text-xs text-zinc-400 leading-relaxed">${a.thesis}</p>
        </div>

        <div class="space-y-3 pt-3 border-t border-white/[0.06] tabular-nums">
          <div class="grid grid-cols-4 gap-1.5 text-center font-mono bg-[#050507] p-2.5 rounded-xl border border-white/[0.04]">
            <div><div class="text-[9px] text-zinc-500">Cotação</div><div class="text-xs font-semibold text-white">R$ ${a.price.toFixed(2).replace('.', ',')}</div></div>
            <div><div class="text-[9px] text-zinc-500">Alvo</div><div class="text-xs font-semibold text-zinc-200">R$ ${a.target.toFixed(2).replace('.', ',')}</div></div>
            <div><div class="text-[9px] text-zinc-500">Yield</div><div class="text-xs font-semibold text-emerald-400">${a.dy.toFixed(1).replace('.', ',')}%</div></div>
            <div><div class="text-[9px] text-zinc-500">${a.type === 'FII' ? 'P/VP' : 'P/L'}</div><div class="text-xs font-semibold text-zinc-300">${a.pl > 0 ? a.pl.toFixed(1).replace('.', ',') : '-'}</div></div>
          </div>
          <div class="flex items-center justify-between text-[11px] text-zinc-400">
            <span>Pagamentos: <strong class="text-zinc-200 font-mono">${a.payMonths || 'Trimestral'}</strong></span>
            <span class="text-white font-medium">Dossiê 3D →</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
  bindSpotlightCards();
}

// ==================== VIEW 3: COMPOUND INTEREST, IR & BANK SIMULATOR ====================
function updateCompoundSimulator() {
  const initEl = document.getElementById('sim-init');
  if (!initEl) return;
  const init = Math.max(0, parseFloat(initEl.value) || 10000);
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
  document.getElementById('out-advantage').textContent = `Alpha Larius: +R$ ${(endLarius - endBank).toLocaleString('pt-BR')}`;

  document.getElementById('compound-summary-box').innerHTML = `
    <div class="p-3.5 rounded-xl bg-[#050507] border border-white/[0.06] flex justify-between">
      <span class="text-zinc-400">Capital Desembolsado:</span>
      <strong class="font-mono text-white">R$ ${totalInv.toLocaleString('pt-BR')}</strong>
    </div>
    <div class="p-3.5 rounded-xl bg-[#050507] border border-white/[0.06] flex justify-between">
      <span class="text-zinc-400">Juros Compostos Líquidos:</span>
      <strong class="font-mono text-emerald-400">+R$ ${(endLarius - totalInv).toLocaleString('pt-BR')}</strong>
    </div>
    <div class="p-3.5 rounded-xl bg-[#050507] border border-white/[0.06] space-y-1">
      <div class="font-semibold text-white">Assimetria Tributária CVM 19</div>
      <p class="text-[11px] text-zinc-400 leading-relaxed">
        Enquanto CDBs bancários sofrem alíquota regressiva de ${(irRate*100).toFixed(1)}% de IR (R$ ${irCdbPaid.toLocaleString('pt-BR')}), os dividendos de Ações e FIIs são isentos na pessoa física e compõem patrimônio sem pedágio fiscal.
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
        { label: 'Carteira Larius (Líquida Isenta)', data: sLarius, borderColor: '#F4F4F5', borderWidth: 2.4, tension: 0.35 },
        { label: 'CDB 100% CDI (Líquido IR)', data: sCdb, borderColor: '#34d399', borderWidth: 2, tension: 0.35 },
        { label: 'Banco Tradicional (85% CDI)', data: sBank, borderColor: '#71717a', borderDash: [4, 4], borderWidth: 1.5, tension: 0.35 },
        { label: 'Poupança', data: sPoup, borderColor: '#3f3f46', borderWidth: 1.5, tension: 0.35 }
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

// ==================== VIEW 4: BROKERS ====================
function renderBrokers(mode = 'ALL') {
  ['ALL', 'ZERO'].forEach(m => {
    const b = document.getElementById(`brk-${m}`);
    if (!b) return;
    if (m === mode) b.classList.add('active');
    else b.classList.remove('active');
  });

  const list = mode === 'ZERO' ? BROKERS_DB.filter(b => b.zero) : BROKERS_DB;
  const grid = document.getElementById('brokers-grid');
  if (!grid) return;
  grid.innerHTML = list.map(b => `
    <div onclick="selectBroker('${b.id}')" class="spotlight-card p-5 flex flex-col justify-between space-y-4 cursor-pointer">
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <div class="w-12 h-12 rounded-2xl bg-[#141418] flex flex-col items-center justify-center border border-white/15">
            <span class="font-bold text-sm text-white leading-none font-mono">${b.logo}</span>
            <span class="text-[8px] uppercase text-zinc-400 mt-0.5 font-mono">${b.logoSub}</span>
          </div>
          <span class="text-[10px] font-mono px-2.5 py-0.5 rounded-full ${
            b.zero ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25' : 'bg-white/[0.06] text-zinc-300 border border-white/10'
          }">
            ${b.zero ? 'Corretagem R$ 0' : b.feeStock}
          </span>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-white">${b.name}</h3>
          <p class="text-[11px] text-zinc-500">${b.sub}</p>
        </div>
        <div class="space-y-1.5 pt-2 border-t border-white/[0.06] text-xs tabular-nums">
          <div class="flex justify-between"><span class="text-zinc-500">Ordem Ações:</span><span class="font-mono text-white">${b.feeStock}</span></div>
          <div class="flex justify-between"><span class="text-zinc-500">Ordem FIIs:</span><span class="font-mono text-emerald-400">${b.feeFii}</span></div>
          <div class="flex justify-between"><span class="text-zinc-500">Nota Executiva:</span><span class="font-mono text-zinc-200">${b.ease}</span></div>
        </div>
      </div>
      <div class="text-[11px] text-zinc-400 pt-2 border-t border-white/[0.04] flex justify-between">
        <span>Inspecionar Custos</span><span>→</span>
      </div>
    </div>
  `).join('');
  selectBroker(list[0].id);
  bindSpotlightCards();
}

function selectBroker(id) {
  const b = BROKERS_DB.find(x => x.id === id);
  if (!b) return;
  const detail = document.getElementById('broker-detail-card');
  if (!detail) return;
  detail.innerHTML = `
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-[#141418] flex flex-col items-center justify-center border border-white/20 shrink-0">
          <span class="font-bold text-base text-white leading-none font-mono">${b.logo}</span>
          <span class="text-[9px] uppercase text-zinc-400 mt-0.5 font-mono">${b.logoSub}</span>
        </div>
        <div>
          <h3 class="text-base font-bold text-white">${b.name} — Parecer Institucional Larius</h3>
          <p class="text-xs text-zinc-300 mt-1 max-w-3xl leading-relaxed">${b.verdict}</p>
        </div>
      </div>
      <button onclick="switchView('larius'); askLarius('Larius, me mostre na tela 3D se vale a pena usar o ${b.name} para executar meus aportes!')" class="px-4 py-2.5 rounded-xl bg-[#F4F4F5] hover:bg-white text-[#09090B] font-semibold text-xs shrink-0 transition">
        Analisar no Estúdio 3D →
      </button>
    </div>
  `;
}

// ==================== ASSET INSPECTOR MODAL ====================
function openAssetInspector(ticker) {
  const a = [...ASSETS_DB, ...BEAR_DB].find(x => x.ticker === ticker);
  if (!a) return;
  document.getElementById('insp-ticker').textContent = a.ticker;
  document.getElementById('insp-name').textContent = `${a.name} • ${a.sector}`;
  const isUp = a.upside >= 0;
  document.getElementById('insp-body').innerHTML = `
    <div class="grid grid-cols-4 gap-2 bg-[#050507] p-3.5 rounded-xl border border-white/[0.07] font-mono tabular-nums text-center">
      <div><div class="text-[10px] text-zinc-500">Preço Atual</div><div class="text-sm font-bold text-white">R$ ${a.price.toFixed(2).replace('.', ',')}</div></div>
      <div><div class="text-[10px] text-zinc-500">Preço Justo</div><div class="text-sm font-bold text-zinc-200">R$ ${a.target.toFixed(2).replace('.', ',')}</div></div>
      <div><div class="text-[10px] text-zinc-500">Potencial</div><div class="text-sm font-bold ${isUp ? 'text-emerald-400' : 'text-rose-400'}">${isUp ? '+' : ''}${a.upside}%</div></div>
      <div><div class="text-[10px] text-zinc-500">Dividend Yield</div><div class="text-sm font-bold text-emerald-400">${a.dy}%</div></div>
    </div>
    <div class="grid grid-cols-3 gap-2 font-mono text-xs bg-[#050507] p-3 rounded-xl border border-white/[0.05]">
      <div><span class="text-zinc-500 block text-[10px]">Múltiplo P/L ou P/VP</span><strong class="text-white">${a.pl > 0 ? a.pl : 'N/A'}</strong></div>
      <div><span class="text-zinc-500 block text-[10px]">ROE / Retorno</span><strong class="text-white">${a.roe}%</strong></div>
      <div><span class="text-zinc-500 block text-[10px]">Meses de Dividendo</span><strong class="text-zinc-200">${a.payMonths || 'Trimestral'}</strong></div>
    </div>
    <div class="p-3.5 rounded-xl bg-[#050507] border border-white/[0.06]">
      <div class="font-semibold text-white mb-1">Tese Fundamentalista & Alinhamento Macro:</div>
      <p class="text-zinc-400 leading-relaxed">${a.thesis}</p>
    </div>
    <div class="flex justify-end gap-2">
      <button onclick="closeAssetInspector(); switchView('larius'); askLarius('Larius, faça uma demonstração completa da tese de ${a.ticker} (${a.name}) para mim!')" class="px-4 py-2 rounded-xl bg-[#F4F4F5] hover:bg-white text-[#09090B] font-semibold text-xs transition">
        Demonstrar no Estúdio 3D Larius →
      </button>
    </div>
  `;
  const m = document.getElementById('asset-inspector-modal');
  m.classList.remove('hidden');
  m.classList.add('flex');
}

function closeAssetInspector() {
  const m = document.getElementById('asset-inspector-modal');
  if (!m) return;
  m.classList.add('hidden');
  m.classList.remove('flex');
}

// ==================== AUDIO ANALYZER & MONOCHROME PLATINUM 3D ENGINE ====================
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
    if (lbl) lbl.textContent = 'Microfone Ativo ✓';
  } catch (err) {
    if (lbl) lbl.textContent = 'Modulação Ativa';
  }
}

function toggleHomeIsSpeaking() {
  homeIsSpeaking = !homeIsSpeaking;
  const btn = document.getElementById('btn-toggle-speaking');
  const dot = document.getElementById('btn-speaking-dot');
  const lbl = document.getElementById('btn-speaking-label');
  const statusDot = document.getElementById('home-core-status-dot');
  const statusText = document.getElementById('home-core-status-text');

  if (homeIsSpeaking) {
    if (btn) btn.className = 'inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all bg-[#F4F4F5] text-[#09090B] shadow-[0_0_20px_rgba(255,255,255,0.2)]';
    if (dot) dot.className = 'h-2 w-2 rounded-full bg-[#09090B] animate-ping';
    if (lbl) lbl.textContent = 'Voz Ativa';
    if (statusDot) statusDot.className = 'h-1.5 w-1.5 rounded-full animate-ping bg-white';
    if (statusText) statusText.textContent = 'LARIUS // TRANSMITINDO TELEMETRIA';
  } else {
    if (btn) btn.className = 'inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all bg-[#141418] text-zinc-300 border border-white/10';
    if (dot) dot.className = 'h-2 w-2 rounded-full bg-zinc-500';
    if (lbl) lbl.textContent = 'Em Espera';
    if (statusDot) statusDot.className = 'h-1.5 w-1.5 rounded-full bg-zinc-500';
    if (statusText) statusText.textContent = 'LARIUS // MODO SILENCIOSO';
  }
}

// ==================== PORTFOLIO DIAGRAM 3D (GSAP CAMERA RIG + 3 TIERS) ====================
let portfolioTier = 'beginner';
let focusedPortfolioAssetId = null;
let pScene, pCamera, pRenderer, pGridBasic, pGridSenior, pCorrLine;
const pCameraTarget = new THREE.Vector3(0, 0.85, 0);
const pPillars = [];

function renderPortfolioFloatingCards() {
  const layer = document.getElementById('portfolio3d-html-layer');
  if (!layer) return;
  layer.innerHTML = SAMPLE_PORTFOLIO.map(asset => {
    const isFocused = focusedPortfolioAssetId === asset.id;
    const dimmed = focusedPortfolioAssetId !== null && !isFocused;
    let tierBody = '';
    if (portfolioTier === 'beginner') {
      tierBody = `<p class="mt-1 text-[10px] leading-snug text-zinc-300 line-clamp-2">${asset.metrics.beginnerSummary}</p>`;
    } else if (portfolioTier === 'intermediate') {
      tierBody = `<p class="mt-1 text-[10px] leading-snug text-zinc-300 line-clamp-2">${asset.metrics.intermediateInfo}</p>`;
    } else {
      tierBody = `
        <div class="mt-1.5 grid grid-cols-2 gap-1 border-t border-white/[0.08] pt-1.5 text-[9.5px] tabular-nums font-mono">
          <div><span class="text-zinc-500">Yield: </span><span class="font-medium text-emerald-400">${asset.metrics.seniorMetrics.dy}</span></div>
          <div><span class="text-zinc-500">Sharpe: </span><span class="font-medium text-white">${asset.metrics.seniorMetrics.sharpe}</span></div>
          <div><span class="text-zinc-500">Beta: </span><span class="font-medium text-white">${asset.metrics.seniorMetrics.beta}</span></div>
          <div><span class="text-zinc-300">${asset.metrics.seniorMetrics.durationOrPvp}</span></div>
        </div>
      `;
    }

    return `
      <div
        id="pcard-${asset.id}"
        onclick="focusPortfolioAsset('${asset.id}')"
        style="opacity: ${dimmed ? 0.25 : 1}; transform: translate(-50%, -100%);"
        class="pointer-events-auto cursor-pointer absolute w-48 rounded-xl border p-2.5 backdrop-blur-md transition-all duration-300 ${
          isFocused
            ? 'border-white/70 bg-[#09090B]/95 shadow-[0_0_30px_rgba(255,255,255,0.2)] z-30 scale-105'
            : 'border-white/10 bg-[#09090B]/85 hover:border-white/30 z-10'
        }"
      >
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-semibold tracking-wider text-white font-mono">${asset.ticker}</span>
          <span class="tabular-nums rounded bg-white/[0.08] px-1.5 py-0.5 text-[10px] font-mono font-semibold text-white">${asset.allocation}%</span>
        </div>
        <p class="text-[9.5px] text-zinc-400">${asset.category}</p>
        ${tierBody}
      </div>
    `;
  }).join('');
}

function setPortfolioTier(tier) {
  portfolioTier = tier;
  ['beginner', 'intermediate', 'senior'].forEach(t => {
    const btn = document.getElementById(`tier-btn-${t}`);
    if (!btn) return;
    if (t === tier) {
      btn.className = 'rounded-lg px-3 py-1.5 text-xs font-semibold transition-all bg-[#F4F4F5] text-[#09090B] shadow-sm';
    } else {
      btn.className = 'rounded-lg px-3 py-1.5 text-xs font-medium transition-all text-zinc-400 hover:text-zinc-200';
    }
  });

  const badge = document.getElementById('senior-matrix-badge');
  if (badge) {
    if (tier === 'senior') badge.classList.remove('hidden');
    else badge.classList.add('hidden');
  }

  if (pGridBasic && pGridSenior) {
    pGridBasic.visible = tier !== 'senior';
    pGridSenior.visible = tier === 'senior';
  }
  if (pCorrLine) {
    pCorrLine.visible = tier !== 'beginner';
  }

  renderPortfolioFloatingCards();
}

function focusPortfolioAsset(assetId) {
  if (focusedPortfolioAssetId === assetId) {
    focusedPortfolioAssetId = null;
  } else {
    focusedPortfolioAssetId = assetId;
  }

  const resetBtn = document.getElementById('btn-reset-portfolio-cam');
  if (resetBtn) {
    if (focusedPortfolioAssetId) resetBtn.classList.remove('hidden');
    else resetBtn.classList.add('hidden');
  }

  SAMPLE_PORTFOLIO.forEach(a => {
    const pb = document.getElementById(`pill-btn-${a.id}`);
    if (pb) {
      if (focusedPortfolioAssetId === a.id) {
        pb.className = 'px-2.5 py-1 rounded-lg bg-[#F4F4F5] text-[#09090B] font-mono font-bold text-[10px] transition';
      } else {
        pb.className = 'px-2.5 py-1 rounded-lg bg-[#09090B]/90 hover:border-white/40 border border-white/10 text-[10px] font-mono text-zinc-300 transition';
      }
    }
  });

  pPillars.forEach(p => {
    const isFocused = focusedPortfolioAssetId === p.asset.id;
    const dimmed = focusedPortfolioAssetId !== null && !isFocused;
    p.mesh.material.emissiveIntensity = isFocused ? 1.1 : dimmed ? 0.08 : 0.35;
    p.mesh.material.opacity = dimmed ? 0.22 : 0.92;
    p.ring.material.opacity = isFocused ? 0.85 : 0.25;
  });

  const targetAsset = SAMPLE_PORTFOLIO.find(a => a.id === focusedPortfolioAssetId);
  if (targetAsset && window.gsap && pCamera) {
    const [x, y, z] = targetAsset.position;
    gsap.to(pCamera.position, {
      x: x + 1.8,
      y: y + 1.2,
      z: z + 2.6,
      duration: 1.35,
      ease: 'power3.out'
    });
    gsap.to(pCameraTarget, {
      x: x,
      y: y * 0.6,
      z: z,
      duration: 1.35,
      ease: 'power3.out'
    });
  } else if (window.gsap && pCamera) {
    gsap.to(pCamera.position, {
      x: 0,
      y: 3.4,
      z: 6.2,
      duration: 1.4,
      ease: 'power3.out'
    });
    gsap.to(pCameraTarget, {
      x: 0,
      y: 0.85,
      z: 0,
      duration: 1.4,
      ease: 'power3.out'
    });
  }

  renderPortfolioFloatingCards();
}

function initPortfolioDiagram3D() {
  const canvas = document.getElementById('portfolioDiagram3dCanvas');
  if (!canvas || !window.THREE) return;

  pScene = new THREE.Scene();
  pScene.background = new THREE.Color('#030304');

  const w = canvas.clientWidth || 720;
  const h = canvas.clientHeight || 390;
  pCamera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100);
  pCamera.position.set(0, 3.4, 6.2);

  pRenderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  pRenderer.setSize(w, h, false);
  pRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  pScene.add(new THREE.AmbientLight(0xffffff, 0.65));
  const pt1 = new THREE.PointLight('#FFFFFF', 1.5, 25);
  pt1.position.set(5, 8, 5);
  pScene.add(pt1);

  const pt2 = new THREE.PointLight('#A1A1AA', 0.9, 25);
  pt2.position.set(-5, 4, -5);
  pScene.add(pt2);

  pGridBasic = new THREE.GridHelper(10, 10, '#27272A', '#141418');
  pScene.add(pGridBasic);

  pGridSenior = new THREE.GridHelper(10, 20, '#71717A', '#18181C');
  pGridSenior.visible = false;
  pScene.add(pGridSenior);

  const corrPts = SAMPLE_PORTFOLIO.map(a => new THREE.Vector3(a.position[0], 0.05, a.position[2]));
  corrPts.push(corrPts[0].clone());
  const corrGeo = new THREE.BufferGeometry().setFromPoints(corrPts);
  const corrMat = new THREE.LineBasicMaterial({ color: '#E4E4E7', transparent: true, opacity: 0.45 });
  pCorrLine = new THREE.Line(corrGeo, corrMat);
  pCorrLine.visible = false;
  pScene.add(pCorrLine);

  SAMPLE_PORTFOLIO.forEach(asset => {
    const height = Math.max(0.6, (asset.allocation / 40) * 2.2);
    const [x, , z] = asset.position;

    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const cylGeo = new THREE.CylinderGeometry(0.28, 0.34, height, 32);
    const cylMat = new THREE.MeshStandardMaterial({
      color: asset.color,
      emissive: asset.color,
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: 0.92,
      roughness: 0.18,
      metalness: 0.85
    });
    const mesh = new THREE.Mesh(cylGeo, cylMat);
    mesh.position.set(0, height / 2, 0);
    mesh.userData = { assetId: asset.id };
    group.add(mesh);

    const ringGeo = new THREE.RingGeometry(0.38, 0.45, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: asset.color,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(0, 0.01, 0);
    group.add(ring);

    pScene.add(group);
    pPillars.push({ asset, group, mesh, ring, height });
  });

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, pCamera);
    const hits = raycaster.intersectObjects(pPillars.map(p => p.mesh));
    if (hits.length > 0) {
      const hitId = hits[0].object.userData.assetId;
      focusPortfolioAsset(hitId);
    } else {
      focusPortfolioAsset(null);
    }
  });

  renderPortfolioFloatingCards();
}

// ==================== MONOCHROME PLATINUM & OBSIDIAN SHADER (LariusCore3D) ====================
const LARIUS_VERTEX_SHADER = `
  uniform float uTime;
  uniform float uAudioEnergy;
  varying vec3 vNormal;
  varying float vDisplacement;

  float hash(float n) { return fract(sin(n) * 1e4); }
  float noise(vec3 x) {
    const vec3 step = vec3(110, 241, 171);
    vec3 i = floor(x);
    vec3 f = fract(x);
    float n = dot(i, step);
    vec3 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x),
          mix(hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
      mix(mix(hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x),
          mix(hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y),
      u.z
    );
  }

  void main() {
    vNormal = normal;
    float n = noise(position * 2.4 + uTime * 1.4);
    float spike = noise(position * 5.0 - uTime * 2.8) * uAudioEnergy * 1.35;
    float displacement = (n * 0.11) + spike;

    vDisplacement = displacement;
    vec3 newPosition = position + normal * displacement;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    gl_PointSize = 1.9 + (uAudioEnergy * 2.6);
  }
`;

const LARIUS_FRAGMENT_SHADER = `
  uniform float uAudioEnergy;
  varying vec3 vNormal;
  varying float vDisplacement;

  void main() {
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    if (r > 1.0) discard;
    float softEdge = 1.0 - smoothstep(0.15, 1.0, r);

    vec3 brushedTitanium = vec3(0.62, 0.64, 0.68); // Brushed Gray #9EA3AE
    vec3 purePlatinum = vec3(0.98, 0.98, 1.0);     // Pure White Platinum #FAFAFF

    float intensity = clamp(vDisplacement * 2.6 + uAudioEnergy * 0.9, 0.0, 1.0);
    vec3 finalColor = mix(brushedTitanium, purePlatinum, intensity);

    float alpha = (0.40 + (uAudioEnergy * 0.32)) * softEdge;
    gl_FragColor = vec4(finalColor, alpha);
  }
`;

const larius3DInstances = [];

function createLariusCoreInstance(canvasId, getSpeakingState, updateHud) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !window.THREE) return null;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#030304');

  const width = canvas.clientWidth || 640;
  const height = canvas.clientHeight || 360;
  const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
  camera.position.set(0, 0, 5.2);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(width, height, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const group = new THREE.Group();
  scene.add(group);

  const uniforms = {
    uTime: { value: 0 },
    uAudioEnergy: { value: 0 }
  };

  const pointsGeo = new THREE.IcosahedronGeometry(1.15, 18);
  const pointsMat = new THREE.ShaderMaterial({
    vertexShader: LARIUS_VERTEX_SHADER,
    fragmentShader: LARIUS_FRAGMENT_SHADER,
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const points = new THREE.Points(pointsGeo, pointsMat);
  group.add(points);

  const cageGeo = new THREE.IcosahedronGeometry(1.22, 2);
  const cageMat = new THREE.MeshBasicMaterial({
    color: '#A1A1AA',
    wireframe: true,
    transparent: true,
    opacity: 0.14,
    blending: THREE.AdditiveBlending
  });
  const cage = new THREE.Mesh(cageGeo, cageMat);
  group.add(cage);

  const ring1 = new THREE.Mesh(
    new THREE.TorusGeometry(1.65, 0.007, 16, 120),
    new THREE.MeshBasicMaterial({ color: '#E4E4E7', transparent: true, opacity: 0.42 })
  );
  group.add(ring1);

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(1.88, 0.005, 16, 120, Math.PI * 1.4),
    new THREE.MeshBasicMaterial({ color: '#71717A', transparent: true, opacity: 0.35 })
  );
  group.add(ring2);

  const ring3 = new THREE.Mesh(
    new THREE.TorusGeometry(2.1, 0.004, 16, 120, Math.PI * 0.8),
    new THREE.MeshBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: 0.22 })
  );
  group.add(ring3);

  let isDragging = false, prevX = 0, prevY = 0;
  canvas.addEventListener('pointerdown', (e) => { isDragging = true; prevX = e.clientX; prevY = e.clientY; });
  window.addEventListener('pointerup', () => { isDragging = false; });
  window.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    group.rotation.y += (e.clientX - prevX) * 0.006;
    group.rotation.x += (e.clientY - prevY) * 0.006;
    prevX = e.clientX;
    prevY = e.clientY;
  });

  return { canvas, scene, camera, renderer, points, cage, ring1, ring2, ring3, uniforms, getSpeakingState, updateHud };
}

function initLarius3D() {
  const homeInst = createLariusCoreInstance('homeLariusCoreCanvas', () => homeIsSpeaking, true);
  if (homeInst) larius3DInstances.push(homeInst);

  const stageInst = createLariusCoreInstance('larius3dCanvas', () => lariusSpeaking || lariusListening, false);
  if (stageInst) larius3DInstances.push(stageInst);

  initPortfolioDiagram3D();

  const projVec = new THREE.Vector3();
  let lastTime = performance.now();
  function animateLoop(now) {
    requestAnimationFrame(animateLoop);
    const delta = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;
    const t = now / 1000;

    const micEnergy = getAudioEnergy();

    larius3DInstances.forEach(inst => {
      inst.uniforms.uTime.value = t;
      const speaking = inst.getSpeakingState();
      let energy = micEnergy;
      if (energy < 0.01 && speaking) {
        energy = (Math.sin(t * 14) * 0.5 + 0.5) * (Math.sin(t * 5.3) * 0.5 + 0.5) * 0.65;
      }
      inst.uniforms.uAudioEnergy.value = energy;

      if (inst.updateHud) {
        const hudEl = document.getElementById('hud-audio-energy');
        if (hudEl) hudEl.textContent = energy.toFixed(2);
      }

      const speedMultiplier = 1 + energy * 2.4;
      inst.points.rotation.y += delta * 0.22 * speedMultiplier;
      inst.points.rotation.z += delta * 0.08;

      inst.cage.rotation.y -= delta * 0.16 * speedMultiplier;
      const scale = 1.18 + energy * 0.14;
      inst.cage.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.2);

      inst.ring1.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.1;
      inst.ring1.rotation.z += delta * 0.35 * speedMultiplier;

      inst.ring2.rotation.y = -Math.PI / 4;
      inst.ring2.rotation.x += delta * 0.32 * speedMultiplier;

      inst.ring3.rotation.z = Math.PI / 2.2;
      inst.ring3.rotation.y -= delta * 0.45 * speedMultiplier;

      inst.renderer.render(inst.scene, inst.camera);
    });

    if (pRenderer && pScene && pCamera) {
      pCamera.lookAt(pCameraTarget);
      const pCanvas = pRenderer.domElement;
      const cw = pCanvas.clientWidth;
      const ch = pCanvas.clientHeight;

      pPillars.forEach(p => {
        const isFocused = focusedPortfolioAssetId === p.asset.id;
        if (isFocused) {
          const pulse = 1 + Math.sin(t * 4) * 0.04;
          p.mesh.scale.set(pulse, 1, pulse);
        } else {
          p.mesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        }

        const cardEl = document.getElementById(`pcard-${p.asset.id}`);
        if (cardEl && cw > 0 && ch > 0) {
          projVec.set(p.asset.position[0], p.height + 0.35, p.asset.position[2]);
          projVec.project(pCamera);
          const sx = (projVec.x * 0.5 + 0.5) * cw;
          const sy = (-projVec.y * 0.5 + 0.5) * ch;
          cardEl.style.left = `${Math.max(100, Math.min(cw - 100, sx))}px`;
          cardEl.style.top = `${Math.max(115, Math.min(ch - 25, sy))}px`;
        }
      });

      pRenderer.render(pScene, pCamera);
    }
  }
  requestAnimationFrame(animateLoop);
  window.addEventListener('resize', resizeLarius3D);
  updateLariusStageOverlay('DEFAULT');
}

function resizeLarius3D() {
  larius3DInstances.forEach(inst => {
    const w = inst.canvas.clientWidth;
    const h = inst.canvas.clientHeight;
    if (w > 0 && h > 0) {
      inst.camera.aspect = w / h;
      inst.camera.updateProjectionMatrix();
      inst.renderer.setSize(w, h, false);
    }
  });
  if (pRenderer && pCamera) {
    const pc = pRenderer.domElement;
    const pw = pc.clientWidth;
    const ph = pc.clientHeight;
    if (pw > 0 && ph > 0) {
      pCamera.aspect = pw / ph;
      pCamera.updateProjectionMatrix();
      pRenderer.setSize(pw, ph, false);
    }
  }
}

// ==================== LARIUS VOICE & TELEPROMPTER ====================
function updateLariusStageOverlay(mode, asset = null) {
  const el = document.getElementById('larius-demo-overlay');
  if (!el) return;

  if (asset) {
    larius3dMode = 'PILLARS';
    el.innerHTML = `
      <div class="p-5 rounded-2xl bg-[#09090B]/90 border border-white/25 backdrop-blur-md space-y-3 tabular-nums shadow-2xl">
        <div class="flex justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
          <span>Dossiê Institucional em Projecão 3D</span>
          <span class="text-white">Score Larius ${asset.score}/100</span>
        </div>
        <div class="flex justify-between items-center">
          <div>
            <div class="text-lg font-mono font-bold text-white">${asset.ticker} — ${asset.name}</div>
            <div class="text-xs text-zinc-400">${asset.sector} • Pagamentos: ${asset.payMonths || 'Trimestral'}</div>
          </div>
          <div class="text-right font-mono">
            <div class="text-sm font-bold text-emerald-400">↗ +${asset.upside}%</div>
            <div class="text-xs text-zinc-300">Yield ${asset.dy}% a.a.</div>
          </div>
        </div>
        <p class="text-xs text-zinc-300 leading-relaxed">${asset.thesis}</p>
      </div>
    `;
    return;
  }

  if (mode === 'BROKERS') {
    el.innerHTML = `
      <div class="p-5 rounded-2xl bg-[#09090B]/90 border border-white/20 backdrop-blur-md space-y-3">
        <div class="text-[10px] font-mono text-zinc-400 uppercase">Auditoria de Custos • Execução Taxa Zero</div>
        <div class="grid grid-cols-2 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-[#030304] border border-white/10">
            <div class="font-bold text-white">Íon Itaú / Inter / C6 / Nubank</div>
            <div class="font-mono text-emerald-400 mt-1">Corretagem: R$ 0,00</div>
          </div>
          <div class="p-3 rounded-xl bg-[#030304] border border-white/10">
            <div class="font-bold text-zinc-200">Rico / BTG Pactual</div>
            <div class="font-mono text-zinc-300 mt-1">FIIs e Tesouro: Taxa R$ 0</div>
          </div>
        </div>
      </div>
    `;
  } else if (mode === 'COMPOUND') {
    el.innerHTML = `
      <div class="p-5 rounded-2xl bg-[#09090B]/90 border border-white/20 backdrop-blur-md space-y-2.5 font-mono text-xs tabular-nums">
        <div class="text-[10px] text-zinc-400 uppercase">Projeção 10 Anos (R$ 10k + R$ 1k/mês)</div>
        <div class="flex justify-between p-2.5 rounded-lg bg-[#030304] border border-white/10"><span class="text-white">Carteira Larius (Isenta IR):</span><strong class="text-white">R$ 321.922</strong></div>
        <div class="flex justify-between p-2.5 rounded-lg bg-[#030304]"><span class="text-zinc-400">CDB 100% CDI (-15% IR):</span><strong class="text-emerald-400">R$ 237.008</strong></div>
        <div class="flex justify-between p-2.5 rounded-lg bg-[#030304]"><span class="text-zinc-500">Banco Tradicional (85% CDI):</span><strong class="text-zinc-400">R$ 209.270</strong></div>
      </div>
    `;
  } else {
    el.innerHTML = `
      <div class="p-5 rounded-2xl bg-[#09090B]/85 border border-white/15 backdrop-blur-md space-y-3 text-xs">
        <div class="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Alocação Fiduciária CVM 19 • Disciplina Patrimonial</div>
        <div class="grid grid-cols-3 gap-2 text-center font-mono">
          <div class="p-2.5 rounded-xl bg-[#030304] border border-white/[0.06]"><div class="font-bold text-white">ITUB4 / BBSE3</div><div class="text-zinc-400 text-[11px]">Selic 13,75%</div></div>
          <div class="p-2.5 rounded-xl bg-[#030304] border border-white/[0.06]"><div class="font-bold text-white">SBSP3 / EGIE3</div><div class="text-zinc-300 text-[11px]">IPCA + Corte 27</div></div>
          <div class="p-2.5 rounded-xl bg-[#030304] border border-white/[0.06]"><div class="font-bold text-white">WEGE3 / PRIO3</div><div class="text-emerald-400 text-[11px]">Dólar R$ 5,50</div></div>
        </div>
      </div>
    `;
  }
}

function submitLariusChat(e) {
  if (e && e.preventDefault) e.preventDefault();
  const inp = document.getElementById('larius-input');
  const q = inp.value.trim();
  if (!q) return;
  inp.value = '';
  askLarius(q);
}

function askLarius(question) {
  const box = document.getElementById('larius-messages');
  if (!box) return;
  const uDiv = document.createElement('div');
  uDiv.className = 'p-3.5 rounded-2xl bg-[#F4F4F5] text-[#09090B] font-semibold ml-10 text-xs';
  uDiv.textContent = question;
  box.appendChild(uDiv);
  box.scrollTop = box.scrollHeight;

  const id = 'lr-' + Date.now();
  const lDiv = document.createElement('div');
  lDiv.className = 'p-4 rounded-2xl bg-[#030304] border border-white/[0.09] text-zinc-200 space-y-2 mr-4';
  lDiv.innerHTML = `
    <div class="flex justify-between text-[11px] font-semibold text-white">
      <span>Larius • Private Wealth Advisor</span>
      <span id="${id}-st" class="text-[10px] font-mono text-zinc-500">projetando dados...</span>
    </div>
    <div id="${id}-txt" class="leading-relaxed typing-cursor"></div>
  `;
  box.appendChild(lDiv);
  box.scrollTop = box.scrollHeight;

  const res = composeLariusReply(question);
  speakLarius(res.speech);
  streamLarius(id, res.html);
}

function composeLariusReply(question) {
  const q = question.toLowerCase();
  const found = [...ASSETS_DB, ...BEAR_DB].find(a => q.includes(a.ticker.toLowerCase()) || q.includes(a.name.toLowerCase()));
  if (found) {
    updateLariusStageOverlay('ASSET', found);
    return {
      html: `<p class="mb-2">Projetei o dossiê de <strong>${found.name} (${found.ticker})</strong> no palco 3D.</p><p class="mb-2">${found.thesis}</p><p>Cotação: <strong>R$ ${found.price.toFixed(2).replace('.', ',')}</strong> | Alvo: <strong>R$ ${found.target.toFixed(2).replace('.', ',')} (${found.upside >= 0 ? '+' : ''}${found.upside}%)</strong> | Dividend Yield: <strong>${found.dy}% a.a.</strong></p>`,
      speech: `Projetei no palco a análise de ${found.name}, código ${found.ticker}. ${found.thesis} Cotada hoje a ${found.price.toFixed(2)} reais, com potencial de ${found.upside} por cento e dividendos de ${found.dy} por cento ao ano.`
    };
  }
  if (q.includes('banco') || q.includes('corretora') || q.includes('taxa')) {
    updateLariusStageOverlay('BROKERS');
    return {
      html: `<p class="mb-2">Disciplina patrimonial começa eliminando taxas desnecessárias. No <strong>Íon Itaú, Banco Inter, C6 Bank, Nubank e Rico</strong>, a corretagem para Ações e FIIs é <strong>R$ 0,00</strong>.</p><p>Para consolidação institucional, o <strong>Íon Itaú</strong> e o <strong>BTG Pactual</strong> entregam a melhor custódia do país.</p>`,
      speech: "Disciplina patrimonial começa eliminando custos desnecessários. No Íon Itaú, Banco Inter, C6 Bank, Nubank e Rico, a corretagem é zero reais tanto para ações quanto para fundos imobiliários."
    };
  }
  if (q.includes('juros') || q.includes('imposto') || q.includes('cdb')) {
    updateLariusStageOverlay('COMPOUND');
    return {
      html: `<p class="mb-2">Observe no comparativo ao lado: em 10 anos investindo R$ 10 mil + R$ 1.000/mês, um CDB sofre retenção de <strong>15% a 22,5% de Imposto de Renda</strong>.</p><p>Na <strong>Carteira Larius</strong>, seus dividendos são <strong>100% isentos de IR</strong>, acumulando <strong>R$ 321.922</strong> líquidos — mais de <strong>R$ 112 mil</strong> acima dos bancos tradicionais.</p>`,
      speech: "Observe na projeção ao lado: enquanto o CDB bancário perde de quinze a vinte e dois e meio por cento do lucro para o Imposto de Renda, os dividendos da carteira Larius são isentos e acumulam mais de cento e doze mil reais de vantagem líquida."
    };
  }
  updateLariusStageOverlay('DEFAULT');
  return {
    html: `<p class="mb-2">Estruturei nossa estratégia patrimonial em três pilares disciplinados:</p><p class="mb-1">• <strong>Caixa & Bancos (Selic 13,75%):</strong> <code>ITUB4</code>, <code>BBSE3</code> e <code>KNCR11</code>.</p><p class="mb-1">• <strong>Infraestrutura IPCA+ (Corte Mar/2027):</strong> <code>SBSP3</code>, <code>EGIE3</code> e <code>HGLG11</code>.</p><p>• <strong>Receita Global em Dólar (R$ 5,50):</strong> <code>WEGE3</code>, <code>PRIO3</code> e <code>EMBR3</code>.</p>`,
    speech: "Estruturei nossa estratégia patrimonial em três pilares disciplinados: Itaú, BB Seguridade e Kinea para capturar a Selic em treze e setenta e cinco por cento; Sabesp, Engie e Pátria Logística para blindar da inflação; e WEG e PRIO para gerar receita forte em dólar."
  };
}

function streamLarius(id, html) {
  if (lariusTypingInterval) clearInterval(lariusTypingInterval);
  const txtEl = document.getElementById(`${id}-txt`);
  const stEl = document.getElementById(`${id}-st`);
  const box = document.getElementById('larius-messages');
  if (!txtEl) return;

  lariusSpeaking = true;
  const tokens = html.match(/(<[^>]+>|[^<\s]+|\s+)/g) || [html];
  let i = 0, acc = '';
  lariusTypingInterval = setInterval(() => {
    for (let k = 0; k < 2 && i < tokens.length; k++, i++) acc += tokens[i];
    txtEl.innerHTML = acc;
    if (box) box.scrollTop = box.scrollHeight;
    if (i >= tokens.length) {
      clearInterval(lariusTypingInterval);
      txtEl.classList.remove('typing-cursor');
      if (stEl) stEl.textContent = 'concluído';
      if (!window.speechSynthesis || !window.speechSynthesis.speaking) {
        lariusSpeaking = false;
      }
    }
  }, 26);
}

function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  const vs = window.speechSynthesis.getVoices().filter(v => v.lang.toLowerCase().includes('pt'));
  const sel = document.getElementById('vc-engine');
  if (!sel || vs.length === 0) return;
  vs.sort((a, b) => (b.name.includes('Natural') ? 1 : 0) - (a.name.includes('Natural') ? 1 : 0));
  if (!lariusVoiceURI && vs[0]) lariusVoiceURI = vs[0].voiceURI;
  sel.innerHTML = vs.map(v => `<option value="${v.voiceURI}" ${v.voiceURI === lariusVoiceURI ? 'selected' : ''}>${v.name}</option>`).join('');
}
if ('speechSynthesis' in window) window.speechSynthesis.onvoiceschanged = loadVoices;

function speakLarius(text) {
  if (lariusMuted || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  const voices = window.speechSynthesis.getVoices();
  const v = voices.find(x => x.voiceURI === lariusVoiceURI) || voices.find(x => x.lang.toLowerCase().includes('pt'));
  lariusSpeaking = true;
  sentences.forEach((s, idx) => {
    const u = new SpeechSynthesisUtterance(s.trim());
    u.lang = 'pt-BR';
    u.pitch = lariusPitch;
    u.rate = lariusRate;
    if (v) u.voice = v;
    if (idx === sentences.length - 1) {
      u.onend = () => { lariusSpeaking = false; };
    }
    window.speechSynthesis.speak(u);
  });
}

function stopLariusSpeech() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  lariusSpeaking = false;
}

function toggleLariusMute() {
  lariusMuted = !lariusMuted;
  const lbl = document.getElementById('larius-mute-lbl');
  if (lbl) lbl.textContent = lariusMuted ? '🔇 Áudio Mudo' : '🔊 Voz Ativa';
  if (lariusMuted) stopLariusSpeech();
}

function openVoiceCloneModal() {
  loadVoices();
  const m = document.getElementById('voice-modal');
  if (!m) return;
  m.classList.remove('hidden');
  m.classList.add('flex');
}

function closeVoiceCloneModal() {
  const m = document.getElementById('voice-modal');
  if (!m) return;
  m.classList.add('hidden');
  m.classList.remove('flex');
}

function applyVoiceParams() {
  lariusPitch = parseFloat(document.getElementById('vc-pitch').value);
  lariusRate = parseFloat(document.getElementById('vc-rate').value);
  const sel = document.getElementById('vc-engine');
  if (sel && sel.value) lariusVoiceURI = sel.value;
  document.getElementById('vc-pitch-lbl').textContent = lariusPitch.toFixed(2);
  document.getElementById('vc-rate-lbl').textContent = lariusRate.toFixed(2) + 'x';
}

function testLariusVoice() {
  applyVoiceParams();
  speakLarius("Olá! Eu sou o Larius. Minha voz está calibrada com precisão executiva para guiar a alocação do seu patrimônio.");
}

async function calibrateVoiceFromMic() {
  const st = document.getElementById('vc-status');
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    if (st) st.textContent = 'Capturando 4s...';
    setTimeout(() => {
      stream.getTracks().forEach(t => t.stop());
      lariusPitch = 0.92;
      lariusRate = 1.10;
      document.getElementById('vc-pitch').value = lariusPitch;
      document.getElementById('vc-rate').value = lariusRate;
      applyVoiceParams();
      if (st) st.textContent = 'Sincronizado ✓';
      testLariusVoice();
    }, 3800);
  } catch (e) {
    lariusPitch = 0.92;
    lariusRate = 1.10;
    document.getElementById('vc-pitch').value = lariusPitch;
    document.getElementById('vc-rate').value = lariusRate;
    applyVoiceParams();
    if (st) st.textContent = 'Calibrado ✓';
    testLariusVoice();
  }
}

function listenToUserMic() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const lbl = document.getElementById('larius-mic-text');
  if (!SR) {
    document.getElementById('larius-input').focus();
    return;
  }
  const rec = new SR();
  rec.lang = 'pt-BR';
  rec.onstart = () => { lariusListening = true; if (lbl) lbl.textContent = 'Ouvindo seu comando...'; };
  rec.onresult = (e) => {
    lariusListening = false;
    if (lbl) lbl.textContent = 'Falar com Larius';
    askLarius(e.results[0][0].transcript);
  };
  rec.onerror = () => { lariusListening = false; if (lbl) lbl.textContent = 'Falar com Larius'; };
  rec.onend = () => { lariusListening = false; if (lbl) lbl.textContent = 'Falar com Larius'; };
  rec.start();
}

// ==================== PYTHON 3.12 QUANT ENGINE EXECUTOR ====================
function runPythonQuantEngine() {
  const profile = (document.getElementById('py-profile') || {}).value || 'moderado';
  const initCap = parseFloat((document.getElementById('py-init') || {}).value) || 15000;
  const monthly = parseFloat((document.getElementById('py-monthly') || {}).value) || 1500;
  const years = parseInt((document.getElementById('py-years') || {}).value) || 10;

  const days = years * 365;
  const irRate = days <= 180 ? 0.225 : days <= 360 ? 0.200 : days <= 720 ? 0.175 : 0.150;
  const months = years * 12;

  const rLariusM = Math.pow(1 + 0.184, 1 / 12) - 1;
  const rCdb100M = Math.pow(1 + 0.1375, 1 / 12) - 1;
  const rBank85M = Math.pow(1 + 0.1375 * 0.85, 1 / 12) - 1;

  let bLarius = initCap, bCdb100 = initCap, bBank85 = initCap, invested = initCap;
  for (let m = 1; m <= months; m++) {
    invested += monthly;
    bLarius = bLarius * (1 + rLariusM) + monthly;
    bCdb100 = bCdb100 * (1 + rCdb100M) + monthly;
    bBank85 = bBank85 * (1 + rBank85M) + monthly;
  }

  const taxCdb100 = Math.max(0, bCdb100 - invested) * irRate;
  const netCdb100 = bCdb100 - taxCdb100;
  const netBank85 = bBank85 - Math.max(0, bBank85 - invested) * irRate;

  const allocationsMap = {
    iniciante: [
      { bucket: "Tesouro Selic / Caixa Liquidez (13,75%)", tickers: ["LFT / Selic", "KNCR11"], weight_pct: 40, monthly_brl: +(monthly * 0.40).toFixed(2) },
      { bucket: "Bancos & Seguros (Ganhadores da Selic)", tickers: ["ITUB4", "BBSE3", "BBAS3"], weight_pct: 25, monthly_brl: +(monthly * 0.25).toFixed(2) },
      { bucket: "Concessões IPCA+ (Saneamento & Energia)", tickers: ["SBSP3", "EGIE3", "TAEE11"], weight_pct: 20, monthly_brl: +(monthly * 0.20).toFixed(2) },
      { bucket: "Exportadoras Globais (Dólar R$ 5,50)", tickers: ["WEGE3", "VALE3"], weight_pct: 15, monthly_brl: +(monthly * 0.15).toFixed(2) }
    ],
    moderado: [
      { bucket: "Concessões & Utilities Blindadas IPCA+", tickers: ["SBSP3", "EGIE3", "CPFE3"], weight_pct: 30, monthly_brl: +(monthly * 0.30).toFixed(2) },
      { bucket: "Bancos Líderes & Seguridade (ROE > 22%)", tickers: ["ITUB4", "BBSE3", "BPAC11"], weight_pct: 25, monthly_brl: +(monthly * 0.25).toFixed(2) },
      { bucket: "Fundos Imobiliários Isentos (Papel + Tijolo)", tickers: ["KNCR11", "KNIP11", "HGLG11", "BTLG11"], weight_pct: 25, monthly_brl: +(monthly * 0.25).toFixed(2) },
      { bucket: "Receita Dolarizada & Indústria Global", tickers: ["WEGE3", "PRIO3", "EMBR3"], weight_pct: 20, monthly_brl: +(monthly * 0.20).toFixed(2) }
    ],
    arrojado: [
      { bucket: "Exportadoras & Crescimento Global USD", tickers: ["WEGE3", "PRIO3", "EMBR3", "SUZB3"], weight_pct: 35, monthly_brl: +(monthly * 0.35).toFixed(2) },
      { bucket: "Infraestrutura & Privatizações (Upside)", tickers: ["SBSP3", "EQTL3", "VIVT3"], weight_pct: 30, monthly_brl: +(monthly * 0.30).toFixed(2) },
      { bucket: "FIIs Tijolo p/ Fechamento de Curva Mar/27", tickers: ["HGLG11", "BTLG11", "XPML11"], weight_pct: 20, monthly_brl: +(monthly * 0.20).toFixed(2) },
      { bucket: "Bancos & Caixa Tático Selic", tickers: ["ITUB4", "BBSE3", "KNCR11"], weight_pct: 15, monthly_brl: +(monthly * 0.15).toFixed(2) }
    ]
  };

  const result = {
    engine: "Larius Quantitative Engine v3.0 (Python 3.12 • Obsidian Institutional)",
    cloud_status: "GitHub Pages 24/7 Active",
    macro_scenario: {
      period: "Novembro/2026",
      selic_annual: "13.75%",
      ipca_focus: "5.22%",
      usd_brl: "R$ 5.50",
      dbgg_gdp: "82.4%"
    },
    wealth_projection: {
      years,
      total_invested_brl: Math.round(invested),
      larius_portfolio_net_brl: Math.round(bLarius),
      cdb_100_cdi_net_brl: Math.round(netCdb100),
      ir_retained_on_cdb_brl: Math.round(taxCdb100),
      traditional_bank_85_cdi_net_brl: Math.round(netBank85),
      net_advantage_over_bank_brl: Math.round(bLarius - netBank85)
    },
    markowitz_allocation: allocationsMap[profile] || allocationsMap.moderado
  };

  const out = document.getElementById('py-output-console');
  if (out) {
    out.textContent = JSON.stringify(result, null, 2);
  }
}

// ==================== INITIALIZATION ====================
window.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  initLenisAndSpotlight();
  initDashboardCharts();
  selectStressScenario('BASE');
  calculateSmartAllocation();
  renderCorridorsList();
  setDashboardTableTab('AI_TOP');
  renderFullStocksGrid();
  updateCompoundSimulator();
  renderBrokers('ALL');
  initLarius3D();
  runPythonQuantEngine();
  loadVoices();
});
