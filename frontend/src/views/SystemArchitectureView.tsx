import React from 'react';
import { DEFAULT_PROMPT_LAYERS } from '../data/quantData';
import { LARIUS_CORE_FRAGMENT_SHADER, LARIUS_CORE_VERTEX_SHADER } from '../shaders/lariusCoreShader';
import { ShaderUniformParams } from '../types/investimentos';
import { LariusShaderCanvas } from '../components/three/LariusShaderCanvas';

interface SystemArchitectureViewProps {
  shaderParams: ShaderUniformParams;
  onChangeShaderParams: (next: ShaderUniformParams) => void;
  getAudioEnergy: () => number;
  backendMode: 'FASTAPI' | 'LOCAL_TS';
}

const MOTIONSITES_SYNTHESIS = [
  { id: 'aurex-finance', role: 'Design System HUD', status: 'Prompt Completo Aplicado', extract: 'Grade 1px com cruzamentos +, borda chanfrada SVG e nav numerada.' },
  { id: 'iris-assistant', role: 'UX Consultor Financeiro IA', status: 'Prompt Completo Aplicado', extract: 'Esfera sem borda quadrada com máscara radial e ações rápidas financeiras.' },
  { id: 'data-signal', role: 'Escala Óptica & Vidro', status: 'Prompt Completo Aplicado', extract: 'Viewport 100vh limpa, vinheta escura #030304 e coreografia expo-out.' },
  { id: 'axon', role: 'Three.js Particle Sphere', status: 'Card Referência Catalogado', extract: 'Campo de partículas GLSL reativo a movimento e frequência.' },
  { id: 'vocari-hero', role: 'Waveform & Voz Agente', status: 'Card Referência Catalogado', extract: 'Modulação harmônica visual sincronizada à voz em PT-BR.' },
];

export const SystemArchitectureView: React.FC<SystemArchitectureViewProps> = ({
  shaderParams,
  onChangeShaderParams,
  getAudioEnergy,
  backendMode,
}) => {
  return (
    <section className="mx-auto max-w-[1380px] space-y-6 px-5 pb-16 pt-[96px] md:px-[36px]">
      {/* GLSL Shader Uniform Lab */}
      <div className="grid grid-cols-1 gap-6 border border-white/[0.08] bg-[#09090B]/90 p-6 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
              WEBGL THREE.JS // CUSTOM GLSL SHADER LAB
            </div>
            <h2 className="font-display text-lg font-medium text-white">
              Controle de Uniforms do Núcleo GLSL
            </h2>
            <p className="mt-1 text-xs text-zinc-400">
              Ajuste os parâmetros do <code className="text-zinc-200">ShaderMaterial</code> em tempo real.
            </p>
          </div>

          <div className="space-y-3 border border-white/[0.07] bg-[#030304] p-4 font-mono text-xs">
            {(
              [
                ['audioEnergy', 'uAudioEnergy', 0, 1, 0.02],
                ['turbulence', 'uTurbulence (Simplex)', 0.2, 2.4, 0.05],
                ['displacement', 'uDisplacement', 0.05, 0.75, 0.02],
                ['pointSize', 'uPointSize', 1.0, 4.5, 0.1],
                ['coreOpacity', 'uCoreOpacity', 0.2, 1.0, 0.05],
              ] as Array<[keyof ShaderUniformParams, string, number, number, number]>
            ).map(([key, label, min, max, step]) => (
              <div key={key} className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-zinc-400">{label}</span>
                  <strong className="text-white">{shaderParams[key].toFixed(2)}</strong>
                </div>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={shaderParams[key]}
                  onChange={(e) =>
                    onChangeShaderParams({ ...shaderParams, [key]: Number(e.target.value) })
                  }
                  className="w-full accent-white"
                />
              </div>
            ))}
          </div>

          <div className="border border-white/[0.07] bg-[#030304] p-3.5 font-mono text-[10.5px] text-zinc-400">
            <div className="mb-1 font-semibold text-white">GLSL Vertex / Fragment Ativo:</div>
            <pre className="max-h-36 overflow-auto text-[10px] leading-relaxed text-zinc-400">
              {LARIUS_CORE_VERTEX_SHADER.slice(0, 440)}
              {'\n...\n'}
              {LARIUS_CORE_FRAGMENT_SHADER.slice(0, 260)}
            </pre>
          </div>
        </div>

        <div className="relative min-h-[380px] overflow-hidden border border-white/[0.07] bg-[#030304] lg:col-span-7">
          <LariusShaderCanvas
            isSpeaking={shaderParams.audioEnergy > 0.2}
            shaderParams={shaderParams}
            getAudioEnergy={getAudioEnergy}
            className="h-full w-full"
          />
          <div className="pointer-events-none absolute bottom-3 left-4 font-mono text-[10px] text-zinc-500">
            FBM_3D + FRESNEL_PLATINUM // 60 FPS RENDER
          </div>
        </div>
      </div>

      {/* MotionSites 5-Prompt Extraction + FastAPI Prompt Engineering */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="space-y-3 border border-white/[0.08] bg-[#09090B]/90 p-6 lg:col-span-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
            MOTIONSITES MCP // SÍNTESE DE 5 PROMPTS
          </div>
          <h3 className="font-display text-base font-medium text-white">Base Extraída para o D.investimentos</h3>
          <div className="space-y-2.5 pt-1">
            {MOTIONSITES_SYNTHESIS.map((item) => (
              <div key={item.id} className="border border-white/[0.07] bg-[#030304] p-3.5">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <strong className="text-white">{item.id}</strong>
                  <span className="text-zinc-400">{item.role}</span>
                </div>
                <p className="mt-1 text-xs text-zinc-400">{item.extract}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 border border-white/[0.08] bg-[#09090B]/90 p-6 lg:col-span-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
                PYTHON FASTAPI // ENGENHARIA DE PROMPT CVM 19
              </div>
              <h3 className="font-display text-base font-medium text-white">Arquitetura de Camadas do Consultor Larius</h3>
            </div>
            <span className="border border-white/15 bg-[#030304] px-2.5 py-1 font-mono text-[10px] text-zinc-300">
              STATUS: {backendMode === 'FASTAPI' ? 'FASTAPI :8000' : 'TS FALLBACK'}
            </span>
          </div>

          <div className="space-y-2.5 pt-1">
            {DEFAULT_PROMPT_LAYERS.map((layer) => (
              <div key={layer.layer_id} className="border border-white/[0.07] bg-[#030304] p-3.5">
                <div className="font-mono text-[11px] font-semibold text-white">{layer.title}</div>
                <div className="mt-0.5 text-[11px] text-zinc-500">{layer.purpose}</div>
                <div className="mt-1.5 font-mono text-[11px] text-zinc-300">{layer.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
