# D.INVESTIMENTOS & LARIUS — REGRAS ARQUITETURAIS E DESIGN SYSTEM (INVIOLÁVEIS)

## 1. USO OBRIGATÓRIO DE MCPs (EXECUTAR ANTES DE CODAR)
- **MCP de Prompts:** Consulte padrões de "GLSL Black Hole Raymarching/Accretion Disk", "Web Audio API Frequency Reactivity" e "Adaptive Financial Advisor System Prompt".
- **MCP do GitHub:** Busque referências de `@react-three/fiber` com custom shaders e organize commits em branches isoladas (`feat/design-system`, `feat/larius-core-3d`, `feat/hud-advisor`).

## 2. PALETA DE CORES EXATA ("SINGULARITY & ACCRETION GOLD")
Proibido usar cores padrão do Tailwind (indigo, blue, purple, slate). Utilize estritamente estas variáveis CSS/Tailwind:
- **Fundo Universo & Horizonte de Eventos (Void Black):** `#030305` (Fundo principal) e `#000000` (Esfera central do buraco negro).
- **Nebulosa Profunda (Deep Space Brown/Black):** `#0D0905` a `#17110A` (Degradê radial de fundo).
- **Superfície dos Cards HUD (Obsidian Glass):** `rgba(14, 12, 10, 0.68)` com `backdrop-filter: blur(16px)`.
- **Bordas HUD Ultrafinas:** `rgba(245, 183, 79, 0.18)` (1px solid) e `rgba(255, 232, 179, 0.38)` (estado ativo/hover).
- **Brilho de Fótons (Photon Ring White-Gold):** `#FFFDF5` (Anel interno incandescente ao redor do horizonte de eventos).
- **Disco de Acreção Primário (Solar Gold):** `#F5B74F` (Destaques principais, letra "D" da logo, gráficos, ondas sonoras).
- **Plasma Intenso (Amber Core):** `#D97706` (Botões selecionados, badges ativos como "Moderado" / "Sênior").
- **Poeira Gravitacional (Warm Bronze):** `#78350F` (Sombras do disco, partículas periféricas).
- **Tipografia & Dados:**
  - Texto Primário: `#F4EFE6`
  - Texto Secundário / Labels: `#9E9282`
  - Alta / Positivo (B3/Cotações): `#4ADE80`
  - Baixa / Negativo: `#F87171`

## 3. TIPOGRAFIA (ANTI-PADRÃO IA)
- **Logo e Títulos (`font-display`):** `'Space Grotesk'`, sans-serif (Peso 600/700, tracking `-0.02em`). Na logo `D.investimentos`, o `"D."` é sempre em `#F5B74F` e `"investimentos"` em `#F4EFE6`.
- **Interface e Consultoria (`font-sans`):** `'Plus Jakarta Sans'`, sans-serif.
- **Números, Cotações, Taxas e Status (`font-mono`):** `'JetBrains Mono'`, monospace (`font-variant-numeric: tabular-nums`).

## 4. TRAVAS DE SEGURANÇA E ESCOPO (RBAC)
1. **Rota Pública (`/`):**
   - PROIBIDO renderizar qualquer seletor de voz, input de API Key, editor de prompt ou configuração de código no front-end público.
   - O cliente interage apenas com: Microfone/Voz do LARIUS, Seletor de Perfil de Risco (`Conservador`, `Moderado`, `Arrojado`), Seletor de Nível (`Iniciante`, `Intermediário`, `Sênior`) e painéis financeiros.
2. **Isolamento de Voz Clonada:**
   - O `LARIUS_VOICE_ID` (voz clonada do proprietário) fica exclusivamente no servidor (`process.env.LARIUS_VOICE_ID` via rota `/api/larius/tts`). O cliente nunca recebe nem altera esse ID.
3. **Rota de Arquiteto (`/admin`):**
   - Protegida por middleware de autenticação (`ADMIN_SECRET_TOKEN`). Única rota onde parâmetros do motor e calibração de voz podem ser inspecionados pelo criador.
