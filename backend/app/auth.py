"""Authentication and signed-session verification for /admin Architect mode."""

from __future__ import annotations

import base64
import hashlib
import hmac
import time
from fastapi import Cookie, Header, HTTPException, status

from .config import RUNTIME, record_log

SESSION_TTL_SECONDS = 8 * 3600
SESSION_COOKIE_NAME = "larius_admin_session"


def _sign_payload(payload_b64: str) -> str:
    mac = hmac.new(
        RUNTIME.session_secret.encode("utf-8"),
        payload_b64.encode("utf-8"),
        hashlib.sha256,
    ).hexdigest()
    return mac


def issue_admin_token() -> str:
    expires_at = int(time.time()) + SESSION_TTL_SECONDS
    payload_raw = f"architect:{expires_at}".encode("utf-8")
    payload_b64 = base64.urlsafe_b64encode(payload_raw).decode("ascii")
    sig = _sign_payload(payload_b64)
    return f"{payload_b64}.{sig}"


def verify_private_key(candidate_key: str) -> bool:
    configured = RUNTIME.admin_private_key
    if not configured:
        return False
    return hmac.compare_digest(candidate_key.strip(), configured)


def verify_admin_token(token: str | None) -> bool:
    if not token or "." not in token:
        return False
    try:
        payload_b64, provided_sig = token.split(".", 1)
        expected_sig = _sign_payload(payload_b64)
        if not hmac.compare_digest(provided_sig, expected_sig):
            return False
        decoded = base64.urlsafe_b64decode(payload_b64.encode("ascii")).decode("utf-8")
        role, exp_str = decoded.split(":", 1)
        return role == "architect" and int(exp_str) > int(time.time())
    except Exception:
        return False


def require_admin(
    authorization: str | None = Header(default=None),
    larius_admin_session: str | None = Cookie(default=None),
) -> str:
    """FastAPI dependency rejecting unauthenticated /api/admin/* calls."""
    bearer_token = None
    if authorization and authorization.lower().startswith("bearer "):
        bearer_token = authorization.split(" ", 1)[1].strip()

    token = bearer_token or larius_admin_session
    if not verify_admin_token(token):
        record_log("AUTH", "WARN", "Tentativa não autorizada de acesso a endpoint /api/admin.")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Autenticação do Arquiteto obrigatória.",
        )
    return "architect"
