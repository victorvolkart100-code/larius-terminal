// src/components/LariusBlackHole3D.tsx
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface BlackHoleProps {
  audioLevel: number; // 0.0 a 1.0 vindo do Web Audio API (voz do LARIUS)
  isListening: boolean;
  getAudioEnergy?: () => number;
}

const AccretionDiskShader = {
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform float uAudio;
    uniform vec2 uMouse;
    varying vec2 vUv;
    varying vec3 vPosition;

    // Ruído procedural para filamentos de plasma e rede neural
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), f.x),
                 mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), f.x), f.y);
    }

    void main() {
      vec2 centered = vUv - 0.5;
      float r = length(centered) * 2.0;
      float angle = atan(centered.y, centered.x);

      // Limites do horizonte de eventos e borda externa
      if (r < 0.36 || r > 1.0) discard;

      // Espiral relativística + pulsação da voz do LARIUS
      float spiral = angle * 3.0 - (4.5 / (r + 0.1)) + uTime * (1.2 + uAudio * 1.8);
      float bands = sin(r * 42.0 - uTime * 3.0 + noise(centered * 8.0) * 6.0) * 0.5 + 0.5;
      float filaments = noise(vec2(spiral, r * 12.0 - uTime * 0.8));

      // Intensidade concentrada perto do anel de fótons (r = 0.38)
      float photonRing = smoothstep(0.44, 0.365, r) * 2.4;
      float fadeOut = smoothstep(1.0, 0.42, r);
      float intensity = (bands * 0.65 + filaments * 0.75) * fadeOut + photonRing;
      intensity *= (1.0 + uAudio * 0.85);

      // Paleta exata: Bronze (#78350F) -> Amber (#D97706) -> Gold (#F5B74F) -> Photon (#FFFDF5)
      vec3 colBronze = vec3(0.47, 0.21, 0.06);
      vec3 colAmber  = vec3(0.85, 0.47, 0.02);
      vec3 colGold   = vec3(0.96, 0.72, 0.31);
      vec3 colPhoton = vec3(1.00, 0.99, 0.96);

      vec3 color = mix(colBronze, colAmber, smoothstep(0.1, 0.5, intensity));
      color = mix(color, colGold, smoothstep(0.45, 0.9, intensity));
      color = mix(color, colPhoton, smoothstep(0.85, 1.6, intensity));

      float alpha = clamp(intensity * fadeOut, 0.0, 0.96);
      gl_FragColor = vec4(color, alpha);
    }
  `,
};

function BlackHoleCore({ audioLevel, isListening, getAudioEnergy }: BlackHoleProps) {
  const groupRef = useRef<THREE.Group>(null);
  const diskMatRef = useRef<THREE.ShaderMaterial>(null);
  const lensMatRef = useRef<THREE.ShaderMaterial>(null);
  const neuralPointsRef = useRef<THREE.Points>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAudio: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  // Nuvem de nós neurais orbitando o disco de acreção
  const neuralNodes = useMemo(() => {
    const count = 1400;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 1.9 + Math.random() * 3.4;
      const theta = Math.random() * Math.PI * 2;
      const spreadY = (Math.random() - 0.5) * 0.35;
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = spreadY;
      positions[i * 3 + 2] = Math.sin(theta) * radius;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    const liveAudio = getAudioEnergy ? Math.max(audioLevel, getAudioEnergy()) : audioLevel;
    const targetAudio = isListening ? Math.max(liveAudio, 0.18) : liveAudio;
    uniforms.uTime.value += delta;
    uniforms.uAudio.value = THREE.MathUtils.lerp(
      uniforms.uAudio.value,
      targetAudio,
      0.15
    );
    uniforms.uMouse.value.lerp(state.pointer, 0.08);

    // Interatividade suave com o cursor (Parallax 3D igual à imagem)
    if (groupRef.current) {
      const targetRotX = 0.32 + state.pointer.y * 0.18;
      const targetRotZ = -0.38 - state.pointer.x * 0.15;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.06
      );
      groupRef.current.rotation.z = THREE.MathUtils.lerp(
        groupRef.current.rotation.z,
        targetRotZ,
        0.06
      );
    }

    if (neuralPointsRef.current) {
      neuralPointsRef.current.rotation.y -= delta * (0.18 + targetAudio * 0.45);
    }
  });

  return (
    <group ref={groupRef} rotation={[0.32, 0, -0.38]}>
      {/* 1. Horizonte de Eventos (Preto Absoluto #000000) */}
      <mesh>
        <sphereGeometry args={[1.62, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* 2. Anel de Fótons Interno (Brilho Incandescente #FFFDF5) */}
      <mesh>
        <ringGeometry args={[1.63, 1.72, 128]} />
        <meshBasicMaterial
          color="#FFFDF5"
          side={THREE.DoubleSide}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* 3. Disco de Acreção Principal (Inclinado) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[9.8, 9.8, 1, 1]} />
        <shaderMaterial
          ref={diskMatRef}
          vertexShader={AccretionDiskShader.vertexShader}
          fragmentShader={AccretionDiskShader.fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 4. Arco de Lente Gravitacional (Dobra da luz acima/abaixo do horizonte) */}
      <mesh rotation={[0.12, 0, 0]}>
        <planeGeometry args={[7.4, 7.4, 1, 1]} />
        <shaderMaterial
          ref={lensMatRef}
          vertexShader={AccretionDiskShader.vertexShader}
          fragmentShader={AccretionDiskShader.fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 5. Sinapses e Partículas Neurais Douradas */}
      <points ref={neuralPointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[neuralNodes, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#F5B74F"
          size={0.035}
          transparent
          opacity={0.78}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function LariusBlackHole3D(props: BlackHoleProps) {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-auto bg-void"
      style={{
        background:
          "radial-gradient(circle at 50% 48%, #17110A 0%, #0D0905 42%, #030305 100%)",
      }}
    >
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 7.2], fov: 45 }}
      >
        <BlackHoleCore {...props} />
      </Canvas>
    </div>
  );
}
