# Larius Terminal — Design System (MotionSites Data Signal + Glass Iris Architecture)

## 1. Visual Philosophy & MotionSites Integration
Combines two curated **MotionSites.ai** architectural paradigms adapted to institutional fiduciary wealth management (CVM Resolution 19):
- **`data-signal` (Vantage Analytics):** Full-bleed dark obsidian canvas (`#050507`), cinematic ambient video backdrop with radial vignette, chiseled display typography (`letter-spacing: -0.022em`), live macro telemetry bar, and specular glass surface cards (`inset 0 1px 0 rgba(255,255,255,0.12)`).
- **`iris-assistant` (Glass Iris AI Finance Dashboard):** Compact left navigation rail, segmented workspace switcher, living 3D audio-reactive orb (`LariusCore3D`) paired with spatial 3D portfolio pillars (`PortfolioDiagram3D`), quick-action fiduciary prompts, and multi-mode composer (`Normal`, `Deep Quant Python`, `Voz Natural`).

## 2. Color Tokens
- `--bg-obsidian`: `#050507`
- `--surface-card`: `#0A0A0E`
- `--surface-elevated`: `#12121A`
- `--accent-amber`: `#FF6B00` (Terminal Safety Amber)
- `--accent-emerald`: `#10B981` (Liquidity / Positive Yield)
- `--accent-cyan`: `#38BDF8` (USD Export / Quantitative Telemetry)
- `--border-subtle`: `rgba(255, 255, 255, 0.07)`

## 3. Typography & Numeric Discipline
- **UI & Headlines:** `Inter` (`letter-spacing: -0.022em` on display metrics)
- **Telemetry, Tickers & Python Output:** `JetBrains Mono` with mandatory `font-variant-numeric: tabular-nums` (`.tabular-nums`).

## 4. Dual-Runtime Architecture (Python 3.12 + TypeScript/Three.js)
- **Quantitative Engine (`larius_quant_engine.py`):** Written in **Python 3.12** and executed both in the cloud and directly inside the browser so all financial calculations work 24/7 on GitHub Pages even when the user's computer is turned off.
- **3D & Motion Layer:** Three.js GLSL Shaders (`LariusCore3D`), GSAP Camera Rig (`PortfolioDiagram3D`), Lenis Smooth Scroll (`SmoothScroll`), and cursor-tracking radial lighting (`SpotlightCard`).
