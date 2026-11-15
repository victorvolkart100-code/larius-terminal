'use client';

import { useRef, useCallback } from 'react';

export function useAudioAnalyzer() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const smoothedEnergyRef = useRef<number>(0);

  const connectAudioSource = useCallback((sourceNode: HTMLAudioElement | MediaStream) => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    const ctx = audioContextRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.75;

    if (sourceNode instanceof HTMLAudioElement) {
      const source = ctx.createMediaElementSource(sourceNode);
      source.connect(analyser);
      analyser.connect(ctx.destination);
    } else {
      const source = ctx.createMediaStreamSource(sourceNode);
      source.connect(analyser);
    }

    analyserRef.current = analyser;
    dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);
  }, []);

  const getAudioEnergy = useCallback((): number => {
    if (!analyserRef.current || !dataArrayRef.current) return 0;
    analyserRef.current.getByteFrequencyData(dataArrayRef.current);
    let sum = 0;
    const voiceBins = 30;
    for (let i = 2; i < voiceBins + 2; i++) {
      sum += dataArrayRef.current[i];
    }
    const rawEnergy = sum / (voiceBins * 255);
    smoothedEnergyRef.current += (rawEnergy - smoothedEnergyRef.current) * 0.25;
    return smoothedEnergyRef.current;
  }, []);

  return { connectAudioSource, getAudioEnergy };
}
