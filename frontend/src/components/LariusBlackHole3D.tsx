"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface BlackHoleProps {
  audioLevel: number; // 0.0 a 1.0 vindo do Web Audio API (voz do LARIUS)
  isListening: boolean;
  getAudioEnergy?: () => number;
}

const CAMERA_Z = 6.6;
const CAMERA_FOV_DEG = 45.0;
// Inclinacao estilo Gargantua (Interestelar): quase de perfil (~5.5 deg) com eixo diagonal ↗
const BASE_TILT_X = 0.095;
const BASE_TILT_Z = 0.29;

/**
 * Raymarched Relativistic Gargantua Black Hole Shader
 * - Exact equatorial plane-crossing intersection + micro-slab ember depth for razor-sharp concentric filaments
 * - High-contrast dark dust lanes (#78350F / #030305) vs blazing Doppler-boosted plasma (#FFFDF5 / #F5B74F / #D97706)
 * - Hair-thin incandescent Photon Sphere ring around pure #000000 Event Horizon
 * - Seam-free differential Keplerian FBM (zero atan cut) + Web Audio reactivity
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

    float hash31(vec3 p) {
      p = fract(p * vec3(443.897, 441.423, 437.195));
      p += dot(p, p.yzx + 19.19);
      return fract((p.x + p.y) * p.z);
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

    float fbm5(vec2 p) {
      float v = 0.0;
      float amp = 0.50;
      mat2 rot = mat2(0.80, -0.60, 0.60, 0.80);
      for (int i = 0; i < 5; i++) {
        v += amp * noise2D(p);
        p = rot * p * 2.08 + vec2(11.3, -7.9);
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

    // Samples razor-sharp relativistic accretion filaments at a point p near y=0
    vec4 evalAccretionDisk(vec3 p, vec3 rayDir, float speed, float voiceBoost, bool isSharpPlane) {
      float hr = length(p.xz);
      const float R_IN = 1.04;
      const float R_OUT = 5.45;

      if (hr < R_IN * 0.88 || hr > R_OUT) return vec4(0.0);

      float radialEnv = smoothstep(R_IN * 0.88, R_IN + 0.10, hr) *
                        (1.0 - smoothstep(R_OUT * 0.42, R_OUT, hr));

      // Seam-free differential Keplerian shear in Cartesian XZ space
      float twist = speed + 4.2 / (hr + 0.28);
      float cs = cos(twist);
      float sn = sin(twist);
      vec2 pRot = mat2(cs, -sn, sn, cs) * p.xz;

      float fLow  = fbm5(pRot * 1.45);
      float fHigh = fbm5(pRot * 4.8 + vec2(fLow * 2.1, -twist * 0.12));

      // Crisp orbital concentric tracks carved by dark soot gaps (Interstellar look)
      float rWarp = hr + (fLow - 0.5) * 0.22;
      float tA = 0.5 + 0.5 * sin(rWarp * 36.0 - uTime * 1.4);
      float tB = 0.5 + 0.5 * cos(rWarp * 76.0 + fHigh * 3.8 + uTime * 2.1);
      float fineTracks = (tA * tA * tA) * 0.72 + (tB * tB * tB) * 0.48;

      // Ridged plasma embers (high-contrast bright ridges + dark troughs)
      float ridge = 1.0 - abs(fHigh * 2.0 - 1.0);
      float filament = clamp((fineTracks * 0.75 + (ridge * ridge) * 0.65) * 1.18, 0.0, 1.5);

      // Relativistic Doppler beaming: left approaching rim (+Z dot) shines blazing hot
      vec3 tangVel = normalize(vec3(p.z, 0.0, -p.x) + vec3(1e-5, 0.0, 0.0));
      float doppler = dot(tangVel, -rayDir);
      float beam = pow(max(1.0 + 0.48 * doppler, 0.22), 2.1);

      float heat = (1.0 - smoothstep(R_IN, R_OUT * 0.88, hr));
      float temp = clamp(heat * 0.68 + filament * 0.52 + doppler * 0.26 + uAudio * 0.22, 0.0, 1.45);

      vec3 colDeep   = vec3(0.055, 0.025, 0.010); // Dark dust veins
      vec3 colBronze = vec3(0.471, 0.208, 0.059); // #78350F
      vec3 colAmber  = vec3(0.851, 0.467, 0.024); // #D97706
      vec3 colGold   = vec3(0.961, 0.718, 0.310); // #F5B74F
      vec3 colPhoton = vec3(1.000, 0.992, 0.961); // #FFFDF5

      vec3 c = mix(colDeep, colBronze, smoothstep(0.05, 0.28, temp));
      c = mix(c, colAmber, smoothstep(0.24, 0.56, temp));
      c = mix(c, colGold, smoothstep(0.50, 0.88, temp));
      c = mix(c, colPhoton, smoothstep(0.84, 1.24, temp));
      c *= beam * voiceBoost * (isSharpPlane ? 1.55 : 0.85);

      float density = radialEnv * mix(0.22, 1.0, filament) * (isSharpPlane ? 0.92 : 1.0);
      return vec4(c, clamp(density, 0.0, 0.95));
    }

    void main() {
      vec2 ndc = vUv * 2.0 - 1.0;
      float tanHalfFov = 0.41421356; // tan(radians(45.0) * 0.5)

      vec3 ro = vec3(0.0, 0.0, 6.6);
      vec3 rd = normalize(vec3(ndc.x * uAspect * tanHalfFov, ndc.y * tanHalfFov, -1.0));

      // Inverse of Rx(tiltX) * Rz(tiltZ) -> Rz(-tiltZ) * Rx(-tiltX)
      ro = rotateZ(rotateX(ro, -uTilt.x), -uTilt.y);
      rd = normalize(rotateZ(rotateX(rd, -uTilt.x), -uTilt.y));

      // Schwarzschild metric M = 0.195 => R_horizon ~ 0.44, r_ph = 0.585, Shadow ~ 1.01
      const float BH_M = 0.195;
      const float R_HORIZON = 0.44;

      vec3 pos = ro;
      vec3 prevPos = ro;
      vec3 accCol = vec3(0.0);
      float accAlpha = 0.0;
      float minR = 100.0;
      bool hitBH = false;

      float voiceBoost = 1.0 + uAudio * 0.85;
      float speed = uTime * (0.45 + uAudio * 0.55);

      for (int i = 0; i < 88; i++) {
        float r = max(length(pos), 0.001);
        minR = min(minR, r);

        if (r < R_HORIZON) {
          hitBH = true;
          break;
        }
        if (r > 12.0 && dot(pos, rd) > 0.0) {
          break;
        }

        // Exact equatorial plane-crossing sample (zero raymarch blur for upper/lower lensed arches)
        if (i > 0 && ((prevPos.y > 0.0 && pos.y <= 0.0) || (prevPos.y < 0.0 && pos.y >= 0.0))) {
          float dy = abs(pos.y - prevPos.y) + 1e-6;
          float frac = clamp(abs(prevPos.y) / dy, 0.0, 1.0);
          vec3 hitP = mix(prevPos, pos, frac);
          vec4 planeSample = evalAccretionDisk(hitP, rd, speed, voiceBoost, true);
          accCol += (1.0 - accAlpha) * planeSample.rgb * planeSample.a;
          accAlpha += (1.0 - accAlpha) * planeSample.a;
          if (accAlpha > 0.99) break;
        }

        // Thin micro-slab volumetric ember glow around y=0 (gives textured thickness to front bridge)
        if (abs(pos.y) < 0.075 && r > 0.95 && r < 4.6 && accAlpha < 0.98) {
          float dtSlab = clamp(min(r * 0.08, abs(pos.y) * 0.35 + 0.018), 0.015, 0.36);
          float yn = pos.y / 0.036;
          float vert = exp(-(yn * yn));
          if (vert > 0.05) {
            vec4 volSample = evalAccretionDisk(pos, rd, speed, voiceBoost, false);
            float volA = clamp(volSample.a * vert * dtSlab * 7.5, 0.0, 0.65);
            accCol += (1.0 - accAlpha) * volSample.rgb * volA;
            accAlpha += (1.0 - accAlpha) * volA;
          }
        }

        // Exact Schwarzschild geodesic ray deflection
        vec3 h = cross(pos, rd);
        float h2 = dot(h, h);
        vec3 accel = -3.0 * BH_M * h2 * pos / pow(max(r, 0.32), 5.0);
        float dt = clamp(min(r * 0.08, abs(pos.y) * 0.35 + 0.018), 0.015, 0.36);

        prevPos = pos;
        rd = normalize(rd + accel * dt);
        pos += rd * dt;
      }

      // Deep Space Nebula + corner subtle cosmic sepia wisps + crisp pinpoint stars
      float radialDist = length(vec2(ndc.x * uAspect, ndc.y));
      vec3 bgVoid = vec3(0.010, 0.010, 0.016); // #030305
      vec3 bgNeb0 = vec3(0.042, 0.028, 0.016); // #0D0905
      vec3 bgNeb1 = vec3(0.075, 0.052, 0.028); // #17110A
      vec3 bgCol = mix(bgNeb1, bgNeb0, smoothstep(0.0, 0.62, radialDist));
      bgCol = mix(bgCol, bgVoid, smoothstep(0.55, 1.35, radialDist));

      if (!hitBH) {
        // Subtle outer dust nebulae like Deep Space reference
        float dust = fbm5(ndc * vec2(uAspect, 1.0) * 1.35 + vec2(1.4, -0.8));
        float cornerMask = smoothstep(0.52, 1.25, radialDist);
        bgCol += vec3(0.471, 0.250, 0.105) * pow(max(dust, 0.0), 2.4) * cornerMask * 0.28;

        // Sharp pinpoint stars deflected slightly by gravity
        vec3 sg = rd * 52.0;
        vec3 cell = floor(sg);
        vec3 f = fract(sg) - 0.5;
        float rnd = hash31(cell);
        vec3 j = (vec3(hash31(cell + 1.3), hash31(cell + 2.7), hash31(cell + 5.1)) - 0.5) * 0.55;
        float starDist = length(f - j);
        float star = (1.0 - smoothstep(0.008, 0.052, starDist)) * step(0.958, rnd);
        float twinkle = 0.6 + 0.4 * sin(uTime * 1.9 + rnd * 45.0);
        bgCol += mix(vec3(0.961, 0.718, 0.310), vec3(1.000, 0.992, 0.961), fract(rnd * 19.0)) * star * twinkle * 0.85;
      } else {
        bgCol = vec3(0.0); // Pure #000000 Event Horizon shadow
      }

      // Razor-sharp Photon Ring hugging critical orbit (r_ph ~ 0.585)
      float drPh = max(minR - 0.578, 0.0) * 44.0;
      float razorPhoton = exp(-(drPh * drPh)) * (1.85 + uAudio * 0.9);
      float softCorona = exp(-max(minR - 0.56, 0.0) * 7.5) * 0.36;
      if (hitBH) {
        razorPhoton *= 0.24;
        softCorona *= 0.14;
      }
      vec3 coronaCol = vec3(1.000, 0.992, 0.961) * razorPhoton +
                       vec3(0.961, 0.718, 0.310) * softCorona * (1.0 + uAudio * 0.45);

      vec3 hdrCol = bgCol * (1.0 - accAlpha) + accCol + (1.0 - accAlpha * 0.45) * coronaCol;

      // Crisp ACES filmic tone-mapping preserving high filament contrast & peak photon highlights
      vec3 mapped = (hdrCol * (2.51 * hdrCol + 0.03)) / (hdrCol * (2.43 * hdrCol + 0.59) + 0.14);
      mapped = clamp(mapped, 0.0, 1.0);

      gl_FragColor = vec4(mapped, 1.0);
    }
  `,
};

/**
 * Crisp circular optical motes orbiting outer accretion wing
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
      float twinkle = 0.55 + 0.45 * sin(uTime * 1.9 + aPhase);
      vAlpha = twinkle * (0.55 + uAudio * 0.45);
      gl_PointSize = aScale * uPixelRatio * (1.0 + uAudio * 0.35) * (20.0 / max(-mvPosition.z, 1.5));
    }
  `,
  fragmentShader: /* glsl */ `
    precision mediump float;
    varying float vAlpha;

    void main() {
      vec2 uv = gl_PointCoord - 0.5;
      float d2 = dot(uv, uv);
      if (d2 > 0.25) discard;
      float core = exp(-d2 * 48.0);
      float halo = exp(-d2 * 14.0) * 0.35;
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
      uPixelRatio: { value: typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2.5) : 1 },
    }),
    []
  );

  const { positions, scales, phases } = useMemo(() => {
    const count = 520;
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    const ph = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const radius = 2.0 + Math.pow(Math.random(), 0.7) * 4.2;
      const theta = Math.random() * Math.PI * 2;
      const spreadY = (Math.random() - 0.5) * 0.22;
      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = spreadY;
      pos[i * 3 + 2] = Math.sin(theta) * radius;
      sc[i] = 0.42 + Math.random() * 0.78;
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

    const targetRotX = BASE_TILT_X + state.pointer.y * 0.12;
    const targetRotZ = BASE_TILT_Z - state.pointer.x * 0.10;

    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, 0.06);
      rayUniforms.uTilt.value.set(groupRef.current.rotation.x, groupRef.current.rotation.z);
    }

    if (neuralPointsRef.current) {
      neuralPointsRef.current.rotation.y -= clampedDelta * (0.16 + targetAudio * 0.35);
    }
  });

  return (
    <>
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

      <group ref={groupRef} rotation={[BASE_TILT_X, 0, BASE_TILT_Z]}>
        <mesh renderOrder={0}>
          <sphereGeometry args={[0.98, 48, 48]} />
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
        dpr={[1, 2.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, CAMERA_Z], fov: CAMERA_FOV_DEG }}
      >
        <BlackHoleCore {...props} />
      </Canvas>
    </div>
  );
}
