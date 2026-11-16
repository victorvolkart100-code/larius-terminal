# DESIGN.md — D.investimentos | Singularity & Accretion Gold

Alinhado estritamente com [rules.md](file:///c:/Users/Victo/Consultorinvestimentos/.antigravityrules/rules.md) e [tailwind.config.ts](file:///c:/Users/Victo/Consultorinvestimentos/tailwind.config.ts/tailwind.config.ts).

## 1. Paleta Singularity & Accretion Gold
- **Void Black (`#030305`) & Horizonte de Eventos (`#000000`):** Fundo principal e centro absoluto do buraco negro (`LariusBlackHole3D`).
- **Nebulosa Profunda (`#0D0905` → `#120D07` → `#17110A`):** Degradê radial de profundidade espacial.
- **Obsidian Glass HUD (`rgba(14, 12, 10, 0.68)`):** Cartões translúcidos com `backdrop-filter: blur(16px)` e sombra profunda.
- **Bordas HUD:** `rgba(245, 183, 79, 0.18)` em repouso e `rgba(255, 232, 179, 0.42)` em foco/hover.
- **Anel de Fótons (`#FFFDF5`) & Disco de Acreção (`#F5B74F` Solar Gold / `#D97706` Amber Core / `#78350F` Warm Bronze):** Shader GLSL relativístico acoplado à energia vocal do LARIUS e logo em losango (`D.` em `#F5B74F` + `investimentos` em `#F4EFE6`).
- **Dados & Semântica:** Texto primário `#F4EFE6`, secundário `#9E9282`, positivo `#4ADE80`, negativo `#F87171`.

## 2. Tipografia
- **Display & Logo (`font-display`):** `Space Grotesk` (tracking `-0.02em`).
- **Interface & Consultoria (`font-sans`):** `Plus Jakarta Sans`.
- **Telemetria Numérica (`font-mono`):** `JetBrains Mono` com `tabular-nums`.

## 3. Segurança & RBAC
- **`/` (Pública):** Apenas interação com LARIUS, seleção de perfil (`Conservador` / `Moderado` / `Arrojado`) e nível (`Iniciante` / `Intermediário` / `Sênior`) e painéis financeiros.
- **`/api/larius/tts` (e alias `/api/lariustts`):** Síntese isolada no servidor (`LARIUS_VOICE_ID` nunca exposto ao cliente).
- **`/admin`:** Rota de Arquiteto protegida por `ADMIN_SECRET_TOKEN` / `LARIUS_ADMIN_PRIVATE_KEY` no `.env`.
