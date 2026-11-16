import React, { useEffect, useState } from 'react';
import { AllocationProfile, AllocationResponse, Asset, MacroGroup } from '../types/investimentos';
import { requestAllocation } from '../services/api';

interface PortfolioMatrixViewProps {
  assets: Asset[];
  stealthMode: boolean;
  onInspectAssetWithLarius: (ticker: string) => void;
}

const Sparkline: React.FC<{ data: number[]; positive: boolean }> = ({ data, positive }) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data
    .map((v, i) => {
      const x = (i / Math.max(data.length - 1, 1)) * 78 + 2;
      const y = 20 - ((v - min) / range) * 16;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
  return (
    <svg width="82" height="22" viewBox="0 0 82 22" className="inline-block">
      <polyline
        fill="none"
        stroke={positive ? '#34D399' : '#F87171'}
        strokeWidth="1.5"
        points={pts}
      />
    </svg>
  );
};

export const PortfolioMatrixView: React.FC<PortfolioMatrixViewProps> = ({
  assets,
  stealthMode,
  onInspectAssetWithLarius,
}) => {
  const [amountBrl, setAmountBrl] = useState<number>(3000);
  const [profile, setProfile] = useState<AllocationProfile>('PATRIMONIO');
  const [allocation, setAllocation] = useState<AllocationResponse | null>(null);
  const [groupFilter, setGroupFilter] = useState<'ALL' | MacroGroup>('ALL');

  useEffect(() => {
    let mounted = true;
    void requestAllocation(amountBrl, profile).then((res) => {
      if (mounted) setAllocation(res);
    });
    return () => {
      mounted = false;
    };
  }, [amountBrl, profile]);

  const filteredAssets = assets.filter((a) => groupFilter === 'ALL' || a.group === groupFilter);

  return (
    <section className="mx-auto max-w-[1380px] space-y-6 px-5 pb-16 pt-[96px] md:px-[36px]">
      {/* Smart Monthly Lot Allocator */}
      <div className="space-y-5 border border-white/[0.08] bg-[#09090B]/90 p-6 backdrop-blur-md">
        <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-4 md:flex-row md:items-center">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
              EXECUÇÃO POR LOTE DISCRETO // TAXA ZERO
            </div>
            <h2 className="font-display text-lg font-medium text-white">
              Alocador Inteligente de Aporte Mensal
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="border border-white/[0.1] bg-[#030304] px-3 py-2">
              <label className="block font-mono text-[9.5px] uppercase text-zinc-500">Aporte Hoje (R$)</label>
              <input
                type="number"
                min={100}
                step={250}
                value={amountBrl}
                onChange={(e) => setAmountBrl(Math.max(100, Number(e.target.value) || 100))}
                className="w-32 bg-transparent font-mono text-sm font-bold text-white focus:outline-none tabular-nums"
              />
            </div>

            <div className="border border-white/[0.1] bg-[#030304] px-3 py-2">
              <label className="block font-mono text-[9.5px] uppercase text-zinc-500">Diretriz</label>
              <select
                value={profile}
                onChange={(e) => setProfile(e.target.value as AllocationProfile)}
                className="bg-[#030304] font-mono text-xs font-medium text-white focus:outline-none"
              >
                <option value="CONSERVADOR">Conservadora (Selic 13,75%)</option>
                <option value="PATRIMONIO">Patrimônio & Renda Isenta</option>
                <option value="EXPANSAO">Expansão & Dólar R$ 5,50</option>
              </select>
            </div>
          </div>
        </div>

        {allocation && (
          <>
            <div className="grid grid-cols-1 gap-4 font-mono tabular-nums sm:grid-cols-3">
              <div className="border border-white/[0.07] bg-[#030304] p-4">
                <span className="block text-[10px] uppercase text-zinc-500">Executado em Ativos B3</span>
                <strong className="mt-1 block text-lg text-white">
                  {stealthMode ? 'R$ •••••' : `R$ ${allocation.total_allocated_brl.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                </strong>
                <span className="text-[11px] text-zinc-500">
                  Troco Tesouro Selic: R$ {allocation.cash_reserve_selic_brl.toFixed(2)}
                </span>
              </div>

              <div className="border border-white/[0.07] bg-[#030304] p-4">
                <span className="block text-[10px] uppercase text-zinc-500">Nova Renda Passiva Mensal</span>
                <strong className="mt-1 block text-lg text-emerald-400">
                  +R$ {allocation.added_monthly_income_brl.toFixed(2)} / mês
                </strong>
                <span className="text-[11px] text-zinc-500">
                  +R$ {allocation.added_annual_income_brl.toFixed(2)}/ano isentos de IR
                </span>
              </div>

              <div className="border border-white/[0.07] bg-[#030304] p-4">
                <span className="block text-[10px] uppercase text-zinc-500">Corretagem Prevista</span>
                <strong className="mt-1 block text-lg text-white">R$ 0,00</strong>
                <span className="text-[11px] text-emerald-400">Via Íon Itaú / Inter / C6</span>
              </div>
            </div>

            <div className="overflow-x-auto border border-white/[0.07] bg-[#030304]">
              <table className="w-full border-collapse text-left tabular-nums">
                <thead>
                  <tr className="border-b border-white/[0.07] font-mono text-[10.5px] uppercase text-zinc-500">
                    <th className="px-4 py-3">Ativo</th>
                    <th className="px-4 py-3">Tese de Proteção</th>
                    <th className="px-4 py-3 text-center">Peso</th>
                    <th className="px-4 py-3 text-right">Cotação</th>
                    <th className="px-4 py-3 text-right">Quantidade</th>
                    <th className="px-4 py-3 text-right">Subtotal</th>
                    <th className="px-4 py-3 text-right">Dividendo/Mês</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05] text-xs">
                  {allocation.items.map((item) => (
                    <tr key={item.ticker} className="hover:bg-white/[0.03]">
                      <td className="px-4 py-3 font-mono font-bold text-white">{item.ticker}</td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-zinc-200">{item.name}</div>
                        <div className="text-[11px] text-zinc-500">{item.role}</div>
                      </td>
                      <td className="px-4 py-3 text-center font-mono text-zinc-400">{item.weight_pct}%</td>
                      <td className="px-4 py-3 text-right font-mono text-zinc-300">R$ {item.unit_price.toFixed(2)}</td>
                      <td className="px-4 py-3 text-right font-mono">
                        <span className="bg-[#F4F4F5] px-2.5 py-1 text-[11px] font-bold text-[#030304]">
                          {item.quantity} {item.asset_type === 'FII' ? 'cotas' : 'ações'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-semibold text-white">
                        {stealthMode ? 'R$ ••••' : `R$ ${item.subtotal_brl.toFixed(2)}`}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-emerald-400">
                        +R$ {item.monthly_dividend_brl.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* Institutional Asset Screener Table */}
      <div className="space-y-4 border border-white/[0.08] bg-[#09090B]/90 p-6 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
              UNIVERSO AUDITADO B3 & FIIs
            </div>
            <h2 className="font-display text-lg font-medium text-white">Matriz Fundamentalista</h2>
          </div>

          <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
            {(
              [
                ['ALL', 'Todos'],
                ['SELIC', 'Ganhadores Selic'],
                ['IPCA', 'Blindagem IPCA+'],
                ['DOLLAR', 'Receita Dólar'],
                ['FII', 'FIIs Isentos'],
                ['AVOID', 'Evitados'],
              ] as Array<['ALL' | MacroGroup, string]>
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setGroupFilter(key)}
                className={`border px-3 py-1.5 transition-colors ${
                  groupFilter === key
                    ? 'border-white/50 bg-[#F4F4F5] font-semibold text-[#030304]'
                    : 'border-white/[0.08] bg-[#030304] text-zinc-400 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto border border-white/[0.07] bg-[#030304]">
          <table className="w-full border-collapse text-left tabular-nums">
            <thead>
              <tr className="border-b border-white/[0.07] font-mono text-[10.5px] uppercase text-zinc-500">
                <th className="px-4 py-3">Ativo</th>
                <th className="px-4 py-3">Setor</th>
                <th className="px-4 py-3 text-center">6M Trend</th>
                <th className="px-4 py-3 text-right">Preço</th>
                <th className="px-4 py-3 text-right">Alvo</th>
                <th className="px-4 py-3 text-right">Upside</th>
                <th className="px-4 py-3 text-right">Yield</th>
                <th className="px-4 py-3 text-right">ROE</th>
                <th className="px-4 py-3 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05] text-xs">
              {filteredAssets.map((a) => {
                const pos = a.upside >= 0;
                return (
                  <tr key={a.ticker} className="hover:bg-white/[0.03]">
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-white">{a.ticker.replace('_AVOID', '')}</span>
                        <span
                          className={`border px-1.5 py-0.5 font-mono text-[9.5px] ${
                            pos
                              ? 'border-white/15 bg-white/[0.04] text-zinc-300'
                              : 'border-rose-400/30 bg-rose-400/10 text-rose-300'
                          }`}
                        >
                          {a.status}
                        </span>
                      </div>
                      <div className="mt-0.5 text-[11px] text-zinc-500">{a.name}</div>
                    </td>
                    <td className="px-4 py-3.5 text-zinc-300">{a.sector}</td>
                    <td className="px-4 py-3.5 text-center">
                      <Sparkline data={a.spark} positive={pos} />
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono text-zinc-200">R$ {a.price.toFixed(2)}</td>
                    <td className="px-4 py-3.5 text-right font-mono text-zinc-400">R$ {a.target.toFixed(2)}</td>
                    <td className={`px-4 py-3.5 text-right font-mono font-semibold ${pos ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {pos ? '+' : ''}
                      {a.upside.toFixed(1)}%
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono text-zinc-200">{a.dy.toFixed(1)}%</td>
                    <td className="px-4 py-3.5 text-right font-mono text-zinc-400">{a.roe.toFixed(1)}%</td>
                    <td className="px-4 py-3.5 text-right">
                      <button
                        onClick={() => onInspectAssetWithLarius(a.ticker)}
                        className="border border-white/15 bg-[#09090B] px-2.5 py-1 font-mono text-[10.5px] text-white hover:border-white/50"
                      >
                        Ouvir Larius →
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
