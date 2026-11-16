# D.investimentos — Terminal Patrimonial & Consultor Larius

Plataforma construída em **TypeScript (`frontend/`)** + **Python FastAPI (`backend/`)** com separação estrita entre a experiência pública do investidor (`/`) e o Modo Arquiteto (`/admin`), além de isolamento completo de voz no servidor.

## Arquitetura de Separação e Segurança
1. **Interface Pública (`/`):**
   - Exclusiva para o investidor (*Iniciante* ao *Sênior*): conversa por voz e texto com o **LARIUS**, ajusta perfil de risco (`Conservador`, `Moderado`, `Arrojado`) e visualiza recomendações B3/FIIs, simulações de juros compostos, IR regressivo e corretoras.
   - Zero controles de código, camadas de prompt, Voice IDs ou troca de modelo no DOM público.
2. **Modo Arquiteto / Admin (`/admin` ou `#/admin`):**
   - Protegido por autenticação contra `LARIUS_ADMIN_PRIVATE_KEY` (`backend/.env`) e sessão assinada HMAC-SHA256.
   - Permite calibrar o **Voice ID** do clone de voz, atualizar parâmetros macro/financeiros do motor, inspecionar as camadas de engenharia de prompt e monitorar logs do sistema.
3. **Isolamento de Voz (`/api/lariustts`):**
   - O front-end envia apenas o texto da resposta do Larius para `POST /api/lariustts`.
   - O `VOICE_CLONE_ID` e `VOICE_API_KEY` (ElevenLabs, Cartesia ou XTTS) ficam somente no back-end Python via `.env`.

## Configuração Rápida do Back-end
```bash
cd backend
cp .env.example .env
# Defina LARIUS_ADMIN_PRIVATE_KEY, VOICE_PROVIDER, VOICE_CLONE_ID e VOICE_API_KEY
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
