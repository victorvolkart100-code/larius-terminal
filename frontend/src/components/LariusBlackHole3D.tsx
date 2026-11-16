"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface BlackHoleProps {
  audioLevel: number; // 0.0 a 1.0 vindo do Web Audio API (voz do LARIUS)
  isListening: boolean;
  getAudioEnergy?: () => number;
}

const CAMERA_Z = 7.8;
const CAMERA_FOV_DEG = 45.0;
const BASE_TILT_X = 0.28;
const BASE_TILT_Z = -0.26;

/**
 * Raymarched Relativistic Black Hole Fragment Shader
 * - Geodesic photon deflection around Schwarzschild horizon (real top/bottom lensing arches)
 * - Seam-free 3D-rotated domain-warped FBM accretion plasma (no atan cut)
 * - Relativistic Doppler beaming (Photon #FFFDF5 -> Gold #F5B74F -> Amber #D97706 -> Bronze #78350F)
 * - Live Web Audio modulation via uAudio
 */
const BlackHoleRaymarchShader = {
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.9999, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    precision highp float;

    varying vec2 vUv;
    uniform float uTime;
    uniform float uAudio;
    uniform float uAspect;
    uniform vec2 uTilt; // (rotX, rotZ)

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float noise2D(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      float a = hash21(i);
      float b = hash21(i + vec2(1.0, 0.0));
      float c = hash21(i + vec2(0.0, 1.0));
      float d = hash21(i + vec2(1.0, 1.0));
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    float hash31(vec3 p) {
      p = fract(p * vec3(443.897, 441.423, 437.195));
      p += dot(p, p.yzx + 19.19);
      return fract((p.x + p.y) * p.z);
    }

    float fbm4(vec2 p) {
      float v = 0.0;
      float amp = 0.52;
      mat2 rot = mat2(0.80, -0.60, 0.60, 0.80);
      for (int i = 0; i < 4; i++) {
        v += amp * noise2D(p);
        p = rot * p * 2.07 + vec2(13.7, -9.2);
        amp *= 0.5;
      }
      return v;
    }

    vec3 rotateX(vec3 v, float a) {
      float c = cos(a);
      float s = sin(a);
      return vec3(v.x, v.y * c - v.z * s, v.y * s + v.z * c);
    }

    vec3 rotateZ(vec3 v, float a) {
      float c = cos(a);
      float s = sin(a);
      return vec3(v.x * c - v.y * s, v.x * s + v.y * c, v.z);
    }

    void main() {
      vec2 ndc = vUv * 2.0 - 1.0;
      float tanHalfFov = 0.41421356; // tan(radians(45.0) * 0.5)

      vec3 ro = vec3(0.0, 0.0, 7.8);
      vec3 rd = normalize(vec3(ndc.x * uAspect * tanHalfFov, ndc.y * tanHalfFov, -1.0));

      // Inverse transform of group rotation (Rx(tiltX) * Rz(tiltZ)) -> Rz(-tiltZ) * Rx(-tiltX)
      ro = rotateZ(rotateX(ro, -uTilt.x), -uTilt.y);
      rd = normalize(rotateZ(rotateX(rd, -uTilt.x), -uTilt.y));

      // Gravitational raymarch parameters (M = 0.21 => R_horizon ~ 0.46, R_photon ~ 0.63, Shadow ~ 1.09)
      const float BH_M = 0.21;
      const float R_HORIZON = 0.48;
      const float R_DISK_IN = 1.18;
      const float R_DISK_OUT = 3.65;

      vec3 pos = ro;
      vec3 accCol = vec3(0.0);
      float accAlpha = 0.0;
      float minR = 100.0;
      bool hitBH = false;

      float voiceBoost = 1.0 + uAudio * 0.85;
      float speed = uTime * (0.42 + uAudio * 0.55);

      for (int i = 0; i < 76; i++) {
        float r = max(length(pos), 0.001);
        minR = min(minR, r);

        if (r < R_HORIZON) {
          hitBH = true;
          break;
        }
        if (r > 11.0 && dot(pos, rd) > 0.0) {
          break;
        }

        // Exact Schwarzschild null-geodesic bending: d2r/dlam2 = -3 * M * |r x rd|^2 * r / r^5
        vec3 h = cross(pos, rd);
        float h2 = dot(h, h);
        float rPow5 = pow(max(r, 0.35), 5.0);
        vec3 accel = -3.0 * BH_M * h2 * pos / rPow5;

        // Adaptive step: tight near horizon & equatorial disk plane (y = 0)
        float dt = clamp(min(r * 0.11, abs(pos.y) * 0.42 + 0.036), 0.034, 0.45);

        // Volumetric Equatorial Accretion Disk sampling (only evaluated inside thin slab)
        if (abs(pos.y) < 0.26 && r > 0.95 && r < R_DISK_OUT) {
          float radial = smoothstep(R_DISK_IN * 0.88, R_DISK_IN + 0.14, r) *
                         (1.0 - smoothstep(R_DISK_OUT * 0.46, R_DISK_OUT, r));
          float yn = pos.y / (0.048 + 0.018 * r);
          float vert = exp(-(yn * yn));

          if (radial * vert > 0.01) {
            // Seam-free differential Keplerian rotation on Cartesian XZ coordinates
            float twist = speed + 3.6 / (r + 0.35);
            float cs = cos(twist);
            float sn = sin(twist);
            vec2 pRot = mat2(cs, -sn, sn, cs) * pos.xz;

            float f1 = fbm4(pRot * 1.65);
            float f2 = fbm4(pRot * 3.4 - vec2(twist * 0.18, -twist * 0.14));
            float rings = 0.55 + 0.45 * sin(r * 13.5 - f1 * 5.2 - uTime * 1.4);
            float plasma = clamp((f1 * 0.65 + f2 * 0.55) * rings * 1.35, 0.0, 1.4);

            // Relativistic Doppler beaming (approaching side glows hotter)
            vec3 tangentVel = normalize(vec3(-pos.z, 0.0, pos.x) + vec3(1e-5, 0.0, 0.0));
            float doppler = dot(tangentVel, -rd);
            float beam = pow(clamp(1.0 + 0.44 * doppler, 0.42, 1.55), 2.1);

            // Radial heat gradient + Photon inner edge
            float heat = 1.0 - smoothstep(R_DISK_IN, R_DISK_OUT * 0.92, r);
            float density = radial * vert * (0.28 + plasma * 0.95) * dt * 5.2;

            vec3 colBronze = vec3(0.471, 0.208, 0.059); // #78350F
            vec3 colAmber  = vec3(0.851, 0.467, 0.024); // #D97706
            vec3 colGold   = vec3(0.961, 0.718, 0.310); // #F5B74F
            vec3 colPhoton = vec3(1.000, 0.992, 0.961); // #FFFDF5

            float temp = clamp(heat * 0.72 + plasma * 0.48 + doppler * 0.22 + uAudio * 0.2, 0.0, 1.35);
            vec3 sampleCol = mix(colBronze, colAmber, smoothstep(0.08, 0.42, temp));
            sampleCol = mix(sampleCol, colGold, smoothstep(0.36, 0.76, temp));
            sampleCol = mix(sampleCol, colPhoton, smoothstep(0.75, 1.18, temp));
            sampleCol *= beam * voiceBoost;

            float stepAlpha = clamp(density, 0.0, 0.85);
            accCol += (1.0 - accAlpha) * sampleCol * stepAlpha * 1.45;
            accAlpha += (1.0 - accAlpha) * stepAlpha;

            if (accAlpha > 0.985) break;
          }
        }

        rd = normalize(rd + accel * dt);
        pos += rd * dt;
      }

      // Deep Space Nebula backdrop (#17110A -> #0D0905 -> #030305) + gravitationally lensed stars
      float radialDist = length(vec2(ndc.x * uAspect, ndc.y));
      vec3 bgVoid = vec3(0.012, 0.012, 0.020);   // #030305
      vec3 bgNeb0 = vec3(0.051, 0.035, 0.020);   // #0D0905
      vec3 bgNeb1 = vec3(0.090, 0.067, 0.039);   // #17110A
      vec3 bgCol = mix(bgNeb1, bgNeb0, smoothstep(0.0, 0.65, radialDist));
      bgCol = mix(bgCol, bgVoid, smoothstep(0.55, 1.35, radialDist));

      if (!hitBH) {
        vec3 sg = rd * 38.0;
        vec3 cell = floor(sg);
        vec3 f = fract(sg) - 0.5;
        float rnd = hash31(cell);
        vec3 j = (vec3(hash31(cell + 1.3), hash31(cell + 2.7), hash31(cell + 5.1)) - 0.5) * 0.52;
        float star = (1.0 - smoothstep(0.012, 0.09, length(f - j))) * step(0.955, rnd);
        float twinkle = 0.55 + 0.45 * sin(uTime * 1.7 + rnd * 40.0);
        bgCol += mix(vec3(0.961, 0.718, 0.310), vec3(1.000, 0.992, 0.961), fract(rnd * 17.0)) * star * twinkle * 0.65;
      } else {
        bgCol = vec3(0.0); // Pure Event Horizon #000000 inside shadow
      }

      // Photon Sphere & Gravitational Corona glow along critical orbit (minR ~ 0.63)
      float photonBand = exp(-max(minR - 0.615, 0.0) * 11.0);
      float innerCorona = exp(-max(minR - 0.58, 0.0) * 3.8) * 0.32;
      if (hitBH) {
        photonBand *= 0.22;
        innerCorona *= 0.12;
      }
      vec3 coronaCol = vec3(1.000, 0.992, 0.961) * photonBand * (1.28 + uAudio * 0.72) +
                       vec3(0.961, 0.718, 0.310) * innerCorona * (1.0 + uAudio * 0.55);

      vec3 hdrCol = bgCol * (1.0 - accAlpha) + accCol + (1.0 - accAlpha * 0.55) * coronaCol;

      // Soft ACES filmic tone-mapping
      vec3 mapped = (hdrCol * (2.51 * hdrCol + 0.03)) / (hdrCol * (2.43 * hdrCol + 0.59) + 0.14);
      mapped = clamp(mapped, 0.0, 1.0);

      gl_FragColor = vec4(mapped, 1.0);
    }
  `,
};

/**
 * Soft circular optical point shader (eliminates jagged square WebGL pixels)
 */
const OrbitalNodesShader = {
  vertexShader: /* glsl */ `
    attribute float aScale;
    attribute float aPhase;
    uniform float uTime;
    uniform float uAudio;
    uniform float uPixelRatio;
    varying float vAlpha;

    void main() {
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      float twinkle = 0.65 + 0.35 * sin(uTime * 1.8 + aPhase);
      vAlpha = twinkle * (0.65 + uAudio * 0.5);
      gl_PointSize = aScale * uPixelRatio * (1.0 + uAudio * 0.45) * (28.0 / max(-mvPosition.z, 1.5));
    }
  `,
  fragmentShader: /* glsl */ `
    precision mediump float;
    varying float vAlpha;

    void main() {
      vec2 uv = gl_PointCoord - 0.5;
      float d2 = dot(uv, uv);
      if (d2 > 0.25) discard;
      float core = exp(-d2 * 36.0);
      float halo = exp(-d2 * 11.0) * 0.45;
      vec3 col = mix(vec3(0.961, 0.718, 0.310), vec3(1.000, 0.992, 0.961), core);
      gl_FragColor = vec4(col, (core + halo) * vAlpha * 0.85);
    }
  `,
};

function BlackHoleCore({ audioLevel, isListening, getAudioEnergy }: BlackHoleProps) {
  const groupRef = useRef<THREE.Group>(null);
  const neuralPointsRef = useRef<THREE.Points>(null);

  const rayUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAudio: { value: 0 },
      uAspect: { value: 16 / 9 },
      uTilt: { value: new THREE.Vector2(BASE_TILT_X, BASE_TILT_Z) },
    }),
    []
  );

  const particleUniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAudio: { value: 0 },
      uPixelRatio: { value: typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1 },
    }),
    []
  );

  const { positions, scales, phases } = useMemo(() => {
    const count = 900;
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    const ph = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const radius = 2.0 + Math.pow(Math.random(), 0.75) * 3.8;
      const theta = Math.random() * Math.PI * 2;
      const spreadY = (Math.random() - 0.5) * 0.42;
      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = spreadY;
      pos[i * 3 + 2] = Math.sin(theta) * radius;
      sc[i] = 0.65 + Math.random() * 1.4;
      ph[i] = Math.random() * Math.PI * 2;
    }
    return { positions: pos, scales: sc, phases: ph };
  }, []);

  useFrame((state, delta) => {
    const clampedDelta = Math.min(delta, 0.05);
    const liveAudio = getAudioEnergy ? Math.max(audioLevel, getAudioEnergy()) : audioLevel;
    const targetAudio = isListening ? Math.max(liveAudio, 0.2) : liveAudio;

    rayUniforms.uTime.value += clampedDelta;
    rayUniforms.uAudio.value = THREE.MathUtils.lerp(rayUniforms.uAudio.value, targetAudio, 0.14);
    rayUniforms.uAspect.value = state.size.width / Math.max(state.size.height, 1);

    particleUniforms.uTime.value = rayUniforms.uTime.value;
    particleUniforms.uAudio.value = rayUniforms.uAudio.value;
    particleUniforms.uPixelRatio.value = state.gl.getPixelRatio();

    const targetRotX = BASE_TILT_X + state.pointer.y * 0.14;
    const targetRotZ = BASE_TILT_Z - state.pointer.x * 0.14;

    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, 0.06);
      rayUniforms.uTilt.value.set(groupRef.current.rotation.x, groupRef.current.rotation.z);
    }

    if (neuralPointsRef.current) {
      neuralPointsRef.current.rotation.y -= clampedDelta * (0.14 + targetAudio * 0.38);
    }
  });

  return (
    <>
      {/* 1. Fullscreen Raymarched Relativistic Singularity & Gravitational Lensing */}
      <mesh frustumCulled={false} renderOrder={-10}>
        <planeGeometry args={[2, 2]} />
        <shaderMaterial
          vertexShader={BlackHoleRaymarchShader.vertexShader}
          fragmentShader={BlackHoleRaymarchShader.fragmentShader}
          uniforms={rayUniforms}
          transparent
          depthWrite={false}
          depthTest={false}
        />
      </mesh>

      {/* 2. Depth-aligned 3D Orbital Motes + Horizon Depth Occluder */}
      <group ref={groupRef} rotation={[BASE_TILT_X, 0, BASE_TILT_Z]}>
        <mesh renderOrder={0}>
          <sphereGeometry args={[1.04, 48, 48]} />
          <meshBasicMaterial colorWrite={false} depthWrite />
        </mesh>

        <points ref={neuralPointsRef} renderOrder={2}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
            <bufferAttribute attach="attributes-aPhase" args={[phases, 1]} />
          </bufferGeometry>
          <shaderMaterial
            vertexShader={OrbitalNodesShader.vertexShader}
            fragmentShader={OrbitalNodesShader.fragmentShader}
            uniforms={particleUniforms}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
      </group>
    </>
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
        camera={{ position: [0, 0, CAMERA_Z], fov: CAMERA_FOV_DEG }}
      >
        <BlackHoleCore {...props} />
      </Canvas>
    </div>
  );
}
