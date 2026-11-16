import { useCallback, useEffect, useRef, useState } from 'react';
import { requestLariusSpeechAudio } from '../services/api';

interface SpeechRecResultEvent {
  results: ArrayLike<ArrayLike<{ transcript: string }>>;
}

interface BrowserSpeechRecognition {
  lang: string;
  onstart: (() => void) | null;
  onresult: ((e: SpeechRecResultEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
}

export function useAudioAnalyzer() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [muted, setMuted] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const currentAudioElRef = useRef<HTMLAudioElement | null>(null);
  const currentObjectUrlRef = useRef<string | null>(null);
  const smoothedRef = useRef(0);

  const ensureAnalyser = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      void audioCtxRef.current.resume();
    }
    if (!analyserRef.current) {
      const analyser = audioCtxRef.current.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.78;
      analyserRef.current = analyser;
      dataArrayRef.current = new Uint8Array(new ArrayBuffer(analyser.frequencyBinCount));
    }
    return { ctx: audioCtxRef.current, analyser: analyserRef.current };
  }, []);

  const getAudioEnergy = useCallback((): number => {
    if (analyserRef.current && dataArrayRef.current && isSpeaking) {
      analyserRef.current.getByteFrequencyData(dataArrayRef.current);
      let sum = 0;
      const bins = 28;
      for (let i = 2; i < bins + 2; i++) {
        sum += dataArrayRef.current[i];
      }
      const raw = sum / (bins * 255);
      smoothedRef.current += (raw - smoothedRef.current) * 0.25;
      return smoothedRef.current;
    }
    return 0;
  }, [isSpeaking]);

  const stopSpeaking = useCallback(() => {
    if (currentAudioElRef.current) {
      currentAudioElRef.current.pause();
      currentAudioElRef.current = null;
    }
    if (currentObjectUrlRef.current) {
      URL.revokeObjectURL(currentObjectUrlRef.current);
      currentObjectUrlRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  const fallbackBrowserSpeak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    const voices = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().includes('pt'));
    const preferred = voices.find((v) => v.name.includes('Natural')) || voices[0];

    setIsSpeaking(true);
    sentences.forEach((sentence, idx) => {
      const utt = new SpeechSynthesisUtterance(sentence.trim());
      utt.lang = 'pt-BR';
      utt.pitch = 0.96;
      utt.rate = 1.05;
      if (preferred) utt.voice = preferred;
      if (idx === sentences.length - 1) {
        utt.onend = () => setIsSpeaking(false);
      }
      window.speechSynthesis.speak(utt);
    });
  }, []);

  /**
   * Sends ONLY the LARIUS response text to /api/lariustts (backend-isolated cloned voice).
   * Voice ID & API Key are never exposed or selectable on the public front-end.
   */
  const speak = useCallback(
    async (text: string) => {
      if (muted || !text.trim()) return;
      stopSpeaking();

      const audioBlob = await requestLariusSpeechAudio(text);
      if (audioBlob) {
        const objectUrl = URL.createObjectURL(audioBlob);
        currentObjectUrlRef.current = objectUrl;
        const audio = new Audio(objectUrl);
        currentAudioElRef.current = audio;

        try {
          const { ctx, analyser } = ensureAnalyser();
          const source = ctx.createMediaElementSource(audio);
          source.connect(analyser);
          analyser.connect(ctx.destination);
        } catch {
          // Audio playback still continues even if WebAudio routing fails
        }

        audio.onplay = () => setIsSpeaking(true);
        audio.onended = () => {
          setIsSpeaking(false);
          if (currentObjectUrlRef.current) {
            URL.revokeObjectURL(currentObjectUrlRef.current);
            currentObjectUrlRef.current = null;
          }
        };
        audio.onerror = () => setIsSpeaking(false);

        await audio.play().catch(() => {
          fallbackBrowserSpeak(text);
        });
        return;
      }

      fallbackBrowserSpeak(text);
    },
    [ensureAnalyser, fallbackBrowserSpeak, muted, stopSpeaking]
  );

  const startVoiceCommand = useCallback((onTranscript: (text: string) => void) => {
    const win = window as unknown as {
      SpeechRecognition?: new () => BrowserSpeechRecognition;
      webkitSpeechRecognition?: new () => BrowserSpeechRecognition;
    };
    const SR = win.SpeechRecognition || win.webkitSpeechRecognition;
    if (!SR) return false;
    const rec = new SR();
    rec.lang = 'pt-BR';
    rec.onstart = () => setIsListening(true);
    rec.onresult = (e) => {
      setIsListening(false);
      onTranscript(e.results[0][0].transcript);
    };
    rec.onerror = () => setIsListening(false);
    rec.onend = () => setIsListening(false);
    rec.start();
    return true;
  }, []);

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, [stopSpeaking]);

  return {
    isSpeaking,
    isListening,
    muted,
    setMuted,
    getAudioEnergy,
    speak,
    stopSpeaking,
    startVoiceCommand,
  };
}
