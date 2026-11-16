"""Server-side cloned-voice synthesis service (ElevenLabs, Cartesia, XTTS)."""

from __future__ import annotations

import json
import urllib.error
import urllib.request
from typing import Tuple

from fastapi import HTTPException, status

from .config import RUNTIME, record_log


def synthesize_larius_speech(text: str) -> Tuple[bytes, str]:
    """Synthesize speech audio exclusively server-side so Voice ID & API keys stay private."""
    clean_text = text.strip()
    if not clean_text:
        raise HTTPException(status_code=400, detail="Texto vazio para síntese de voz.")

    voice = RUNTIME.voice
    if not voice.voice_id or (voice.provider != "xtts" and not voice.api_key):
        record_log("TTS", "WARN", f"/api/lariustts chamado sem credenciais configuradas para {voice.provider}.")
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Síntese neural aguardando configuração de VOICE_CLONE_ID e VOICE_API_KEY no .env (/admin).",
        )

    if voice.provider == "elevenlabs":
        url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice.voice_id}"
        payload = json.dumps(
            {
                "text": clean_text,
                "model_id": "eleven_multilingual_v2",
                "voice_settings": {
                    "stability": voice.stability,
                    "similarity_boost": voice.similarity_boost,
                    "speed": voice.speed,
                },
            }
        ).encode("utf-8")
        req = urllib.request.Request(
            url,
            data=payload,
            method="POST",
            headers={
                "xi-api-key": voice.api_key,
                "Content-Type": "application/json",
                "Accept": "audio/mpeg",
            },
        )
        media_type = "audio/mpeg"
    elif voice.provider == "cartesia":
        url = "https://api.cartesia.ai/tts/bytes"
        payload = json.dumps(
            {
                "model_id": "sonic-multilingual",
                "transcript": clean_text,
                "voice": {"mode": "id", "id": voice.voice_id},
                "language": "pt",
                "output_format": {"container": "wav", "encoding": "pcm_s16le", "sample_rate": 24000},
            }
        ).encode("utf-8")
        req = urllib.request.Request(
            url,
            data=payload,
            method="POST",
            headers={
                "X-API-Key": voice.api_key,
                "Cartesia-Version": "2024-06-10",
                "Content-Type": "application/json",
            },
        )
        media_type = "audio/wav"
    else:
        base = voice.xtts_endpoint.rstrip("/")
        url = f"{base}/tts_to_audio/"
        payload = json.dumps(
            {
                "text": clean_text,
                "speaker_wav": voice.voice_id,
                "language": "pt",
            }
        ).encode("utf-8")
        req = urllib.request.Request(
            url,
            data=payload,
            method="POST",
            headers={"Content-Type": "application/json"},
        )
        media_type = "audio/wav"

    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            audio_bytes = resp.read()
        record_log("TTS", "INFO", f"Áudio sintetizado via {voice.provider} ({len(clean_text)} chars).")
        return audio_bytes, media_type
    except urllib.error.HTTPError as exc:
        record_log("TTS", "ERROR", f"Erro HTTP {exc.code} no provedor de voz {voice.provider}.")
        raise HTTPException(
            status_code=502,
            detail=f"Falha no provedor de voz ({exc.code}). Verifique o Voice ID e a API Key no modo /admin.",
        ) from exc
    except Exception as exc:
        record_log("TTS", "ERROR", f"Falha de conexão com provedor de voz {voice.provider}: {exc}")
        raise HTTPException(status_code=502, detail="Provedor de voz inacessível no momento.") from exc
