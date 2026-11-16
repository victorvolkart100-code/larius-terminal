"""Server-side configuration, .env loader, and in-memory audit log store."""

from __future__ import annotations

import os
import secrets
from collections import deque
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Literal

BASE_DIR = Path(__file__).resolve().parent.parent
ENV_PATH = BASE_DIR / ".env"


def _load_dotenv_file(path: Path) -> None:
    """Load key=value pairs from .env without overriding real OS environment variables."""
    if not path.exists():
        return
    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        if key and key not in os.environ:
            os.environ[key] = value


_load_dotenv_file(ENV_PATH)


@dataclass
class VoiceCloneState:
    provider: Literal["elevenlabs", "cartesia", "xtts"] = "elevenlabs"
    voice_id: str = ""
    api_key: str = ""
    xtts_endpoint: str = "http://127.0.0.1:8020"
    stability: float = 0.52
    similarity_boost: float = 0.82
    speed: float = 1.04
    pitch_shift: float = 0.96


@dataclass
class FinancialParamsState:
    reference_date: str = "Novembro/2026"
    selic_pct: float = 13.75
    ipca_pct: float = 5.22
    usd_brl: float = 5.50
    dbgg_gdp_pct: float = 82.4
    ibov_points: int = 129480
    ibov_delta_pct: float = 0.84
    default_expected_return_pct: float = 16.2
    prompt_guardrail_note: str = (
        "Priorize preservação patrimonial, isenção tributária em FIIs/dividendos e transparência CVM 19."
    )


@dataclass
class ServerRuntimeState:
    admin_private_key: str = field(default_factory=lambda: os.getenv("LARIUS_ADMIN_PRIVATE_KEY", ""))
    session_secret: str = field(
        default_factory=lambda: os.getenv("LARIUS_SESSION_SECRET") or secrets.token_hex(32)
    )
    voice: VoiceCloneState = field(
        default_factory=lambda: VoiceCloneState(
            provider=(os.getenv("VOICE_PROVIDER", "elevenlabs").lower() if os.getenv("VOICE_PROVIDER", "elevenlabs").lower() in ("elevenlabs", "cartesia", "xtts") else "elevenlabs"),  # type: ignore[arg-type]
            voice_id=os.getenv("VOICE_CLONE_ID", ""),
            api_key=os.getenv("VOICE_API_KEY", ""),
            xtts_endpoint=os.getenv("XTTS_ENDPOINT_URL", "http://127.0.0.1:8020"),
        )
    )
    financial: FinancialParamsState = field(default_factory=FinancialParamsState)
    logs: deque[dict[str, str]] = field(default_factory=lambda: deque(maxlen=250))


RUNTIME = ServerRuntimeState()


def record_log(category: str, level: str, message: str) -> None:
    """Append an audit-safe log entry without ever storing secrets."""
    RUNTIME.logs.appendleft(
        {
            "timestamp": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC"),
            "category": category,
            "level": level,
            "message": message,
        }
    )


record_log("SYSTEM", "INFO", "Servidor D.investimentos FastAPI inicializado com isolamento /admin e /api/lariustts.")
