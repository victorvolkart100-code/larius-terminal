import React, { useEffect, useState } from 'react';
import { AllocationResponse, Asset, MacroGroup, RiskProfile } from '../types/investimentos';
import { requestAllocation } from '../services/api';

interface PortfolioMatrixViewProps {
  assets: Asset[];
  stealthMode: boolean;
  riskProfile: RiskProfile;
  onChangeRiskProfile: (profile: RiskProfile) => void;
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
      <polyline fill="none" stroke={positive ? '#4ADE80' : '#F87171'} strokeWidth="1.5" points={pts} />
    </svg>
  );
};

export const PortfolioMatrixView: React.FC<PortfolioMatrixViewProps> = ({
  assets,
  stealthMode,
  riskProfile,
  onChangeRiskProfile,
  onInspectAssetWithLarius,
}) => {
  const [amountBrl, setAmountBrl] = useState<number>(3000);
  const [allocation, setAllocation] = useState<AllocationResponse | null>(null);
  const [groupFilter, setGroupFilter] = useState<'ALL' | MacroGroup>('ALL');

  useEffect(() => {
    let mounted = true;
    void requestAllocation(amountBrl, riskProfile).then((res) => {
      if (mounted) setAllocation(res);
    });
    return () => {
      mounted = false;
    };
  }, [amountBrl, riskProfile]);

  const filteredAssets = assets.filter((a) => groupFilter === 'ALL' || a.group === groupFilter);

  return (
    <section className="pointer-events-auto mx-auto max-w-[1440px] space-y-6 px-5 pb-16 pt-[88px] md:px-[36px] xl:pl-[84px]">
      <div className="space-y-5 rounded-xl border border-hud-border bg-hud-surface p-6 shadow-hud backdrop-blur-[16px]">
        <div className="flex flex-col justify-between gap-4 border-b border-hud-border pb-4 md:flex-row md:items-center">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accretion-gold">
              RECOMENDAÇÃO DISCRETA DE COMPRA // CORRETAGEM ZERO
            </div>
            <h2 className="font-display text-lg font-medium text-text-primary">
              Alocador Inteligente de Aporte Mensal
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="border border-hud-border bg-void/85 px-3 py-2">
              <label className="block font-mono text-[9.5px] uppercase text-text-muted">Aporte Hoje (R$)</label>
              <input
                type="number"
                min={100}
                step={250}
                value={amountBrl}
                onChange={(e) => setAmountBrl(Math.max(100, Number(e.target.value) || 100))}
                className="w-32 bg-transparent font-mono text-sm font-bold text-accretion-photon focus:outline-none tabular-nums"
              />
            </div>

            <div className="border border-hud-border bg-void/85 px-3 py-2">
              <label className="block font-mono text-[9.5px] uppercase text-text-muted">Perfil de Risco</label>
              <select
                value={riskProfile}
                onChange={(e) => onChangeRiskProfile(e.target.value as RiskProfile)}
                className="bg-void font-mono text-xs font-medium text-accretion-gold focus:outline-none"
              >
                <option value="CONSERVADOR">Conservador (Foco Renda & Selic)</option>
                <option value="MODERADO">Moderado (Equilíbrio IPCA + Dividendos)</option>
                <option value="ARROJADO">Arrojado (Dólar & Crescimento)</option>
              </select>
            </div>
          </div>
        </div>

        {allocation && (
          <>
            <div className="grid grid-cols-1 gap-4 font-mono tabular-nums sm:grid-cols-3">
              <div className="border border-hud-border bg-void/80 p-4">
                <span className="block text-[10px] uppercase text-text-muted">Total Alocado em Ativos</span>
                <strong className="mt-1 block text-lg text-accretion-photon">
                  {stealthMode
                    ? 'R$ •••••'
                    : `R$ ${allocation.total_allocated_brl.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                </strong>
                <span className="text-[11px] text-text-muted">
                  Troco Tesouro Selic: R$ {allocation.cash_reserve_selic_brl.toFixed(2)}
                </span>
              </div>

              <div className="border border-hud-border bg-void/80 p-4">
                <span className="block text-[10px] uppercase text-text-muted">Nova Renda Passiva Mensal</span>
                <strong className="mt-1 block text-lg text-signal-positive">
                  +R$ {allocation.added_monthly_income_brl.toFixed(2)} / mês
                </strong>
                <span className="text-[11px] text-text-muted">
                  +R$ {allocation.added_annual_income_brl.toFixed(2)}/ano isentos de IR
                </span>
              </div>

              <div className="border border-hud-border bg-void/80 p-4">
                <span className="block text-[10px] uppercase text-text-muted">Corretagem Prevista</span>
                <strong className="mt-1 block text-lg text-accretion-gold">R$ 0,00</strong>
                <span className="text-[11px] text-signal-positive">Via Íon Itaú / Inter / C6</span>
              </div>
            </div>

            <div className="overflow-x-auto border border-hud-border bg-void/80">
              <table className="w-full border-collapse text-left tabular-nums">
                <thead>
                  <tr className="border-b border-hud-border font-mono text-[10.5px] uppercase text-text-muted">
                    <th className="px-4 py-3">Ativo</th>
                    <th className="px-4 py-3">Função na Carteira</th>
                    <th className="px-4 py-3 text-center">Peso</th>
                    <th className="px-4 py-3 text-right">Cotação</th>
                    <th className="px-4 py-3 text-right">Quantidade</th>
                    <th className="px-4 py-3 text-right">Subtotal</th>
                    <th className="px-4 py-3 text-right">Renda/Mês</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-accretion-gold/[0.08] text-xs">
                  {allocation.items.map((item) => (
                    <tr key={item.ticker} className="transition-colors hover:bg-accretion-gold/[0.04]">
                      <td className="px-4 py-3 font-mono font-bold text-accretion-gold">{item.ticker}</td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-text-primary">{item.name}</div>
                        <div className="text-[11px] text-text-muted">{item.role}</div>
                      </td>
                      <td className="px-4 py-3 text-center font-mono text-text-muted">{item.weight_pct}%</td>
                      <td className="px-4 py-3 text-right font-mono text-text-primary">R$ {item.unit_price.toFixed(2)}</td>
                      <td className="px-4 py-3 text-right font-mono">
                        <span className="bg-accretion-gold px-2.5 py-1 text-[11px] font-bold text-void">
                          {item.quantity} {item.asset_type === 'FII' ? 'cotas' : 'ações'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-semibold text-text-primary">
                        {stealthMode ? 'R$ ••••' : `R$ ${item.subtotal_brl.toFixed(2)}`}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-signal-positive">
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

      <div className="space-y-4 border border-hud-border bg-hud-surface p-6 shadow-hud backdrop-blur-[16px]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-accretion-gold">
              UNIVERSO MONITORADO B3 & FIIs
            </div>
            <h2 className="font-display text-lg font-medium text-text-primary">Recomendações & Indicadores</h2>
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
                    ? 'border-hud-borderActive bg-accretion-gold font-semibold text-void'
                    : 'border-hud-border bg-void/80 text-text-muted hover:border-hud-borderActive hover:text-text-primary'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto border border-hud-border bg-void/80">
          <table className="w-full border-collapse text-left tabular-nums">
            <thead>
              <tr className="border-b border-hud-border font-mono text-[10.5px] uppercase text-text-muted">
                <th className="px-4 py-3">Ativo</th>
                <th className="px-4 py-3">Setor</th>
                <th className="px-4 py-3 text-center">Tendência</th>
                <th className="px-4 py-3 text-right">Preço</th>
                <th className="px-4 py-3 text-right">Alvo</th>
                <th className="px-4 py-3 text-right">Upside</th>
                <th className="px-4 py-3 text-right">Yield</th>
                <th className="px-4 py-3 text-right">ROE</th>
                <th className="px-4 py-3 text-right">Consultor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-accretion-gold/[0.08] text-xs">
              {filteredAssets.map((a) => {
                const pos = a.upside >= 0;
                return (
                  <tr key={a.ticker} className="transition-colors hover:bg-accretion-gold/[0.04]">
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-accretion-photon">
                          {a.ticker.replace('_AVOID', '')}
                        </span>
                        <span
                          className={`border px-1.5 py-0.5 font-mono text-[9.5px] ${
                            pos
                              ? 'border-hud-border bg-accretion-gold/10 text-accretion-gold'
                              : 'border-signal-negative/35 bg-signal-negative/10 text-signal-negative'
                          }`}
                        >
                          {a.status}
                        </span>
                      </div>
                      <div className="mt-0.5 text-[11px] text-text-muted">{a.name}</div>
                    </td>
                    <td className="px-4 py-3.5 text-text-primary/85">{a.sector}</td>
                    <td className="px-4 py-3.5 text-center">
                      <Sparkline data={a.spark} positive={pos} />
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono text-text-primary">R$ {a.price.toFixed(2)}</td>
                    <td className="px-4 py-3.5 text-right font-mono text-text-muted">R$ {a.target.toFixed(2)}</td>
                    <td
                      className={`px-4 py-3.5 text-right font-mono font-semibold ${
                        pos ? 'text-signal-positive' : 'text-signal-negative'
                      }`}
                    >
                      {pos ? '+' : ''}
                      {a.upside.toFixed(1)}%
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono text-accretion-gold">{a.dy.toFixed(1)}%</td>
                    <td className="px-4 py-3.5 text-right font-mono text-text-muted">{a.roe.toFixed(1)}%</td>
                    <td className="px-4 py-3.5 text-right">
                      <button
                        onClick={() => onInspectAssetWithLarius(a.ticker)}
                        className="border border-hud-border bg-hud-surface px-2.5 py-1 font-mono text-[10.5px] text-accretion-gold transition-colors hover:border-hud-borderActive hover:text-accretion-photon"
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
