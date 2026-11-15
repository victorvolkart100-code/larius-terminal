# Larius Terminal — Consultoria Patrimonial Fiduciária (CVM 19)

Terminal institucional de consultoria de investimentos com **Motor Quantitativo em Python 3.12 (`larius_quant_engine.py`)**, arquitetura visual **MotionSites (`data-signal` + `iris-assistant`)**, núcleo holográfico 3D reativo à voz (`LariusCore3D`) e diagrama espacial 3D de carteira com câmera GSAP (`PortfolioDiagram3D`).

## 🌐 Execução 24/7 na Nuvem (Mesmo com o Computador Desligado)
- **Repositório Oficial:** [https://github.com/victorvolkart100-code/larius-terminal](https://github.com/victorvolkart100-code/larius-terminal)
- **GitHub Pages (Acesso 24/7):** [https://victorvolkart100-code.github.io/larius-terminal/](https://victorvolkart100-code.github.io/larius-terminal/)

## 🐍 Arquitetura Híbrida (Python 3.12 + TypeScript / Three.js / GSAP)
1. **[`larius_quant_engine.py`](larius_quant_engine.py):** Motor quantitativo em **Python 3.12** que calcula Índice de Sharpe líquido, Beta, Score Quantitativo Larius (0–100), otimização de carteira por perfil (*Iniciante*, *Moderado*, *Arrojado*) e simulação patrimonial com tabela regressiva de Imposto de Renda (`22,5%` a `15,0%`) vs. isenção de dividendos/FIIs.
2. **[`src/components/LariusCore3D.tsx`](src/components/LariusCore3D.tsx) & [`src/hooks/useAudioAnalyzer.ts`](src/hooks/useAudioAnalyzer.ts):** Esfera de partículas com GLSL `vertexShader`/`fragmentShader` reativa à energia da voz (`uAudioEnergy`), gaiola geodésica e 3 anéis giroscópicos estilo J.A.R.V.I.S.
3. **[`src/components/three/PortfolioDiagram3D.tsx`](src/components/three/PortfolioDiagram3D.tsx) & [`src/types/portfolio.ts`](src/types/portfolio.ts):** Diagrama espacial 3D da carteira com deslizamento cinematográfico de câmera via **GSAP (`gsap.to`)** e cartões holográficos adaptáveis por nível (*Iniciante*, *Intermediário*, *Sênior*).
4. **[`DESIGN.md`](DESIGN.md):** Sistema de design derivado do **MotionSites MCP** (`data-signal` + `iris-assistant`).
