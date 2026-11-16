import { useCallback, useEffect, useRef, useState } from 'react';

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
  const [micConnected, setMicConnected] = useState(false);
  const [muted, setMuted] = useState(false);
  const [pitch, setPitch] = useState(0.95);
  const [rate, setRate] = useState(1.06);

  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const smoothedRef = useRef(0);

  const connectMicrophone = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.78;
      const source = ctx.createMediaStreamSource(stream);
      source.connect(analyser);
      analyserRef.current = analyser;
      dataArrayRef.current = new Uint8Array(new ArrayBuffer(analyser.frequencyBinCount));
      setMicConnected(true);
    } catch {
      setMicConnected(false);
    }
  }, []);

  const getAudioEnergy = useCallback((): number => {
    if (analyserRef.current && dataArrayRef.current) {
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
  }, []);

  const speak = useCallback(
    (text: string) => {
      if (muted || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
      const voices = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().includes('pt'));
      const preferred = voices.find((v) => v.name.includes('Natural')) || voices[0];

      setIsSpeaking(true);
      sentences.forEach((sentence, idx) => {
        const utt = new SpeechSynthesisUtterance(sentence.trim());
        utt.lang = 'pt-BR';
        utt.pitch = pitch;
        utt.rate = rate;
        if (preferred) utt.voice = preferred;
        if (idx === sentences.length - 1) {
          utt.onend = () => setIsSpeaking(false);
        }
        window.speechSynthesis.speak(utt);
      });
    },
    [muted, pitch, rate]
  );

  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

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
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return {
    isSpeaking,
    setIsSpeaking,
    isListening,
    micConnected,
    muted,
    setMuted,
    pitch,
    setPitch,
    rate,
    setRate,
    connectMicrophone,
    getAudioEnergy,
    speak,
    stopSpeaking,
    startVoiceCommand,
  };
}
