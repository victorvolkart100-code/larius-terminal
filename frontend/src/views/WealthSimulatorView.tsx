import React, { useEffect, useState } from 'react';
import { requestCompoundSimulation } from '../services/api';
import { Broker, CompoundSimulationResponse } from '../types/investimentos';
import { SvgCompoundChart } from '../components/charts/SvgCompoundChart';

interface WealthSimulatorViewProps {
  brokers: Broker[];
  stealthMode: boolean;
  onAskBrokerWithLarius: (brokerName: string) => void;
}

export const WealthSimulatorView: React.FC<WealthSimulatorViewProps> = ({
  brokers,
  stealthMode,
  onAskBrokerWithLarius,
}) => {
  const [initialCapital, setInitialCapital] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [years, setYears] = useState(10);
  const [expectedRatePct, setExpectedRatePct] = useState(16.2);
  const [reinvest, setReinvest] = useState(true);
  const [sim, setSim] = useState<CompoundSimulationResponse | null>(null);
  const [zeroOnly, setZeroOnly] = useState(false);

  useEffect(() => {
    let active = true;
    void requestCompoundSimulation({
      initialCapital,
      monthlyContribution,
      years,
      expectedRatePct,
      reinvest,
    }).then((res) => {
      if (active) setSim(res);
    });
    return () => {
      active = false;
    };
  }, [initialCapital, monthlyContribution, years, expectedRatePct, reinvest]);

  const displayedBrokers = brokers.filter((b) => !zeroOnly || b.zero_fee);

  return (
    <section className="mx-auto max-w-[1380px] space-y-6 px-5 pb-16 pt-[96px] md:px-[36px]">
      {/* Compound Interest + Regressive IR Tax Simulator */}
      <div className="space-y-6 border border-white/[0.08] bg-[#09090B]/90 p-6 backdrop-blur-md">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
            PROJEÇÃO TRIBUTÁRIA // TABELA REGRESSIVA IR (22,5% A 15%)
          </div>
          <h2 className="font-display text-lg font-medium text-white">
            Simulador Patrimonial: Juros Compostos, Imposto de Renda & Bancos
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="border border-white/[0.08] bg-[#030304] p-3.5">
            <label className="block font-mono text-[10px] uppercase text-zinc-500">Capital Inicial (R$)</label>
            <input
              type="number"
              min={0}
              step={1000}
              value={initialCapital}
              onChange={(e) => setInitialCapital(Math.max(0, Number(e.target.value) || 0))}
              className="mt-1 w-full bg-transparent font-mono text-base font-bold text-white focus:outline-none"
            />
          </div>

          <div className="border border-white/[0.08] bg-[#030304] p-3.5">
            <label className="block font-mono text-[10px] uppercase text-zinc-500">Aporte Mensal (R$)</label>
            <input
              type="number"
              min={0}
              step={250}
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Math.max(0, Number(e.target.value) || 0))}
              className="mt-1 w-full bg-transparent font-mono text-base font-bold text-white focus:outline-none"
            />
          </div>

          <div className="border border-white/[0.08] bg-[#030304] p-3.5">
            <label className="block font-mono text-[10px] uppercase text-zinc-500">
              Horizonte: <span className="text-white">{years} anos</span>
            </label>
            <input
              type="range"
              min={1}
              max={30}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="mt-3 w-full accent-white"
            />
          </div>

          <div className="border border-white/[0.08] bg-[#030304] p-3.5">
            <label className="block font-mono text-[10px] uppercase text-zinc-500">Taxa Alvo (% a.a.)</label>
            <input
              type="number"
              min={4}
              max={35}
              step={0.5}
              value={expectedRatePct}
              onChange={(e) => setExpectedRatePct(Number(e.target.value) || 16.2)}
              className="mt-1 w-full bg-transparent font-mono text-base font-bold text-emerald-400 focus:outline-none"
            />
          </div>

          <div className="border border-white/[0.08] bg-[#030304] p-3.5">
            <label className="block font-mono text-[10px] uppercase text-zinc-500">Reinvestimento</label>
            <select
              value={reinvest ? 'yes' : 'no'}
              onChange={(e) => setReinvest(e.target.value === 'yes')}
              className="mt-1.5 w-full bg-[#030304] font-mono text-xs font-semibold text-white focus:outline-none"
            >
              <option value="yes">Sim (Compor Bola de Neve)</option>
              <option value="no">Não (Sacar Dividendos)</option>
            </select>
          </div>
        </div>

        {sim && (
          <>
            <div className="grid grid-cols-1 gap-4 font-mono tabular-nums sm:grid-cols-2 lg:grid-cols-4">
              <div className="border border-white/25 bg-[#030304] p-4">
                <span className="text-[11px] text-zinc-400">Carteira Larius (Isenta IR)</span>
                <div className="mt-1 text-xl font-bold text-white">
                  {stealthMode ? 'R$ ••••••' : `R$ ${sim.end_larius_net.toLocaleString('pt-BR')}`}
                </div>
                <span className="text-[10.5px] text-emerald-400">IR s/ Dividendos: R$ 0</span>
              </div>

              <div className="border border-white/[0.08] bg-[#030304] p-4">
                <span className="text-[11px] text-zinc-400">CDB 100% CDI (Líquido IR)</span>
                <div className="mt-1 text-xl font-bold text-zinc-200">
                  {stealthMode ? 'R$ ••••••' : `R$ ${sim.end_cdb_100_net.toLocaleString('pt-BR')}`}
                </div>
                <span className="text-[10.5px] text-rose-400">
                  -R$ {sim.ir_retained_cdb.toLocaleString('pt-BR')} retidos ({sim.ir_rate_pct}% IR)
                </span>
              </div>

              <div className="border border-white/[0.08] bg-[#030304] p-4">
                <span className="text-[11px] text-zinc-400">Banco Varejo (85% CDI Líq.)</span>
                <div className="mt-1 text-xl font-bold text-zinc-300">
                  {stealthMode ? 'R$ ••••••' : `R$ ${sim.end_bank_85_net.toLocaleString('pt-BR')}`}
                </div>
                <span className="text-[10.5px] text-zinc-500">Spread + pedágio fiscal</span>
              </div>

              <div className="border border-white/[0.08] bg-[#030304] p-4">
                <span className="text-[11px] text-zinc-400">Vantagem Líquida Larius</span>
                <div className="mt-1 text-xl font-bold text-emerald-400">
                  {stealthMode ? '+R$ ••••••' : `+R$ ${sim.alpha_over_bank.toLocaleString('pt-BR')}`}
                </div>
                <span className="text-[10.5px] text-zinc-500">Acima do banco tradicional</span>
              </div>
            </div>

            <div className="border border-white/[0.07] bg-[#030304] p-5">
              <SvgCompoundChart series={sim.series} />
            </div>
          </>
        )}
      </div>

      {/* Bank & Broker Transparency Audit */}
      <div className="space-y-5 border border-white/[0.08] bg-[#09090B]/90 p-6 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
              AUDITORIA DE CUSTÓDIA & TAXAS
            </div>
            <h2 className="font-display text-lg font-medium text-white">
              Comparativo Interativo de Bancos & Corretoras
            </h2>
          </div>

          <div className="flex gap-1.5 font-mono text-[11px]">
            <button
              onClick={() => setZeroOnly(false)}
              className={`border px-3 py-1.5 ${
                !zeroOnly ? 'border-white/50 bg-[#F4F4F5] font-semibold text-[#030304]' : 'border-white/[0.1] bg-[#030304] text-zinc-400'
              }`}
            >
              Todas ({brokers.length})
            </button>
            <button
              onClick={() => setZeroOnly(true)}
              className={`border px-3 py-1.5 ${
                zeroOnly ? 'border-white/50 bg-[#F4F4F5] font-semibold text-[#030304]' : 'border-white/[0.1] bg-[#030304] text-zinc-400'
              }`}
            >
              Taxa Zero Real
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {displayedBrokers.map((b) => (
            <div
              key={b.id}
              className="flex flex-col justify-between space-y-4 border border-white/[0.08] bg-[#030304] p-5 transition-colors hover:border-white/25"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-white/20 bg-[#141418] font-mono text-xs font-bold text-white">
                      {b.short_code}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{b.name}</h3>
                      <p className="text-[11px] text-zinc-500">{b.subtitle}</p>
                    </div>
                  </div>
                  <span
                    className={`border px-2 py-0.5 font-mono text-[10px] ${
                      b.zero_fee
                        ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                        : 'border-white/10 bg-white/[0.04] text-zinc-300'
                    }`}
                  >
                    {b.zero_fee ? 'Taxa R$ 0' : b.fee_stock}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-zinc-400">{b.verdict}</p>

                <div className="grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-3 font-mono text-[11px] tabular-nums">
                  <div>
                    <span className="block text-[9.5px] text-zinc-500">Ações</span>
                    <strong className="text-white">{b.fee_stock}</strong>
                  </div>
                  <div>
                    <span className="block text-[9.5px] text-zinc-500">FIIs</span>
                    <strong className="text-emerald-400">{b.fee_fii}</strong>
                  </div>
                  <div>
                    <span className="block text-[9.5px] text-zinc-500">CDB Padrão</span>
                    <strong className="text-zinc-200">{b.cdb_rate}</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onAskBrokerWithLarius(b.name)}
                className="w-full border border-white/[0.12] bg-[#09090B] py-2 font-mono text-[11px] text-zinc-200 transition-colors hover:border-white/40 hover:text-white"
              >
                Consultar Larius sobre {b.name} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
