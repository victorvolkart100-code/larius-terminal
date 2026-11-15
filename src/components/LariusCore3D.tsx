'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const vertexShader = `
  uniform float uTime;
  uniform float uAudioEnergy;
  varying vec3 vNormal;
  varying float vDisplacement;

  float hash(float n) { return fract(sin(n) * 1e4); }
  float noise(vec3 x) {
    const vec3 step = vec3(110, 241, 171);
    vec3 i = floor(x);
    vec3 f = fract(x);
    float n = dot(i, step);
    vec3 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x),
          mix(hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
      mix(mix(hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x),
          mix(hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y),
      u.z
    );
  }

  void main() {
    vNormal = normal;
    float n = noise(position * 2.4 + uTime * 1.6);
    float spike = noise(position * 5.0 - uTime * 3.0) * uAudioEnergy * 1.4;
    float displacement = (n * 0.12) + spike;
    vDisplacement = displacement;
    vec3 newPosition = position + normal * displacement;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    gl_PointSize = 2.2 + (uAudioEnergy * 3.5);
  }
`;

const fragmentShader = `
  uniform float uAudioEnergy;
  varying vec3 vNormal;
  varying float vDisplacement;

  void main() {
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    if (r > 1.0) discard;
    float softEdge = 1.0 - smoothstep(0.15, 1.0, r);

    vec3 baseAmber = vec3(1.0, 0.42, 0.0);
    vec3 hotCore = vec3(1.0, 0.85, 0.55);
    float intensity = clamp(vDisplacement * 2.5 + uAudioEnergy * 1.2, 0.0, 1.0);
    vec3 finalColor = mix(baseAmber, hotCore, intensity);
    float alpha = (0.55 + (uAudioEnergy * 0.35)) * softEdge;
    gl_FragColor = vec4(finalColor, alpha);
  }
`;

interface CoreMeshProps {
  getAudioEnergy?: () => number;
  isSpeaking?: boolean;
  status?: 'idle' | 'listening' | 'thinking' | 'speaking';
}

function HolographicEntity({ getAudioEnergy, isSpeaking = false, status = 'idle' }: CoreMeshProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const cageRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAudioEnergy: { value: 0 },
    }),
    []
  );

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    uniforms.uTime.value = t;

    let energy = getAudioEnergy ? getAudioEnergy() : 0;
    if (energy === 0 && isSpeaking) {
      energy = (Math.sin(t * 14) * 0.5 + 0.5) * (Math.sin(t * 5.3) * 0.5 + 0.5) * 0.65;
    }
    uniforms.uAudioEnergy.value = energy;

    const speedMultiplier = status === 'thinking' ? 2.8 : 1 + energy * 2.5;

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.25 * speedMultiplier;
      pointsRef.current.rotation.z += delta * 0.1;
    }

    if (cageRef.current) {
      cageRef.current.rotation.y -= delta * 0.18 * speedMultiplier;
      const scale = 1.18 + energy * 0.15;
      cageRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.2);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.1;
      ring1Ref.current.rotation.z += delta * 0.4 * speedMultiplier;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -Math.PI / 4;
      ring2Ref.current.rotation.x += delta * 0.35 * speedMultiplier;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = Math.PI / 2.2;
      ring3Ref.current.rotation.y -= delta * 0.5 * speedMultiplier;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <icosahedronGeometry args={[1.15, 24]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <mesh ref={cageRef}>
        <icosahedronGeometry args={[1.22, 2]} />
        <meshBasicMaterial
          color="#FF6B00"
          wireframe
          transparent
          opacity={0.14}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.65, 0.008, 16, 120]} />
        <meshBasicMaterial color="#FF8C33" transparent opacity={0.45} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.88, 0.006, 16, 120, Math.PI * 1.4]} />
        <meshBasicMaterial color="#F59E0B" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[2.1, 0.004, 16, 120, Math.PI * 0.8]} />
        <meshBasicMaterial color="#FFFFFF" transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

export function LariusCore3D({ getAudioEnergy, isSpeaking = false, status = 'idle' }: CoreMeshProps) {
  return (
    <div className="relative h-[380px] w-full">
      <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 2]}>
        <color attach="background" args={['#050507']} />
        <HolographicEntity
          getAudioEnergy={getAudioEnergy}
          isSpeaking={isSpeaking}
          status={status}
        />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
        <EffectComposer>
          <Bloom
            intensity={1.15}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
      <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#0A0A0E]/80 px-3.5 py-1 backdrop-blur-md">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            isSpeaking
              ? 'animate-ping bg-[#FF6B00]'
              : status === 'listening'
              ? 'bg-emerald-400'
              : 'bg-zinc-500'
          }`}
        />
        <span className="text-[11px] font-medium tracking-[0.2em] text-zinc-400 uppercase">
          {isSpeaking ? 'LARIUS // TRANSMITINDO' : status === 'listening' ? 'OUVINDO...' : 'LARIUS // STANDBY'}
        </span>
      </div>
    </div>
  );
}
