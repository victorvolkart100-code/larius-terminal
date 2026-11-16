# DESIGN.md — D.investimentos | Arquitetura HUD, Three.js/GLSL & Consultor Larius

## 1. Síntese dos 5 Prompts MotionSites
| Origem MotionSites | Pilar Extraído | Aplicação no D.investimentos |
|---|---|---|
| **`aurex-finance`** *(Prompt Completo)* | Design System Dark HUD & Grade Arquitetônica | Grade estrutural `1px` (`rgba(255,255,255,0.045)`), cruzamentos `+` (`10×10px`), bordas chanfradas via SVG (`polygon` com `vectorEffect="non-scaling-stroke"`), navegação numerada (`01.`–`05.`), chips de telemetria e curvas expo-out `cubic-bezier(0.16, 1, 0.3, 1)`. |
| **`iris-assistant`** *(Prompt Completo)* | UX Conversacional & Engenharia de Prompt | Shell limpo de consultoria financeira, esfera central fundida ao fundo via máscara radial (sem caixas quadradas visíveis), cartões de intenção rápida, alternância instantânea Chat/Visão Geral e gatilho vocal. |
| **`data-signal`** *(Prompt Completo)* | Escala Óptica & Coreografia Cinemática | Viewport de entrada travada (`100vh`) sem excesso de scroll, tipografia fluida por `clamp()`, superfícies translúcidas (`backdrop-filter: blur(14px)`) e entrada escalonada determinística. |
| **`axon`** *(WebGL Particle Sphere)* | Núcleo 3D em Three.js & GLSL Shaders | Esfera icosaédrica de partículas WebGL em tempo real controlada por `ShaderMaterial` customizado (`vertexShader` com ruído simplex 3D + `fragmentShader` Fresnel em Platina e Titânio). |
| **`vocari-hero`** *(AI Agent + Audio Waveform)* | Telemetria Vocal & Agente HUD | Barra de onda vocal reativa acoplada às respostas do consultor Larius e aos perfis de engenharia de prompt. |

## 2. Paleta Disciplinar (Phantom Black, Obsidian & Titânio)
- **Phantom Black (`#030304`)**: Canvas principal sem bordas visíveis.
- **Obsidian (`#09090B`)**: Superfícies translúcidas HUD com blur e specular border `1px`.
- **Grafite (`#141418`)**: Estados ativos e botões de controle.
- **Platina (`#F4F4F5` / `#FFFFFF`)**: Tipografia primária, linha de curva principal e traço chanfrado HUD.
- **Titânio Escovado (`#A1A1AA` / `#71717A`)**: Curvas de benchmark, coordenadas, labels técnicos em `JetBrains Mono`.
- **Sinais Financeiros Restritos**: Esmeralda sóbria (`#34D399`) apenas para alfa/dividendos isentos e Rosa sóbrio (`#F87171`) apenas para alertas de risco/IR.

## 3. Stack Oficial
- **Front-end (`frontend/`):** TypeScript + React + Vite + Tailwind CSS + Three.js (GLSL Custom Shaders).
- **Back-end (`backend/`):** Python 3.12 + FastAPI + Pydantic v2 (motor quantitativo B3, cálculo regressivo de IR e camada modular de engenharia de prompt CVM 19 para o consultor Larius).
