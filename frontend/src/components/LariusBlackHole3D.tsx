"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface BlackHoleProps {
  audioLevel: number; // 0.0 a 1.0 vindo do Web Audio API (voz do LARIUS)
  isListening: boolean;
  getAudioEnergy?: () => number;
}

const CAMERA_Z = 6.5;
const CAMERA_FOV_DEG = 45.0;
// Angulo Gargantua (Interestelar): quase de perfil (~3.2 deg) e diagonal ascendente (↗)
const BASE_TILT_X = 0.056;
const BASE_TILT_Z = 0.285;

/**
 * Kip-Thorne / Gargantua Relativistic Black Hole Shader
 * - Polar-sheared 6-octave FBM (uDir = cos/sin, zero atan seam) for long concentric orbital streaks
 * - Edge-on limb-brightening so diagonal wings extend wide while keeping #000000 shadow clear above & below front bridge
 * - High-contrast dark soot veins (#030305 / #78350F) across the front equatorial slash
 * - Primary + secondary (n=2) razor-thin #FFFDF5 Photon Ring around pure #000000 Event Horizon
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

    float fbm6(vec2 p) {
      float v = 0.0;
      float amp = 0.50;
      mat2 rot = mat2(0.80, -0.60, 0.60, 0.80);
      for (int i = 0; i < 6; i++) {
        v += amp * noise2D(p);
        p = rot * p * 2.06 + vec2(11.7, -8.3);
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

    // Evaluates ultra-sharp concentric Gargantua accretion streaks at equatorial crossing p
    vec4 evalAccretionDisk(vec3 p, vec3 rayDir, float speed, float voiceBoost, bool isSharpPlane) {
      float hr = length(p.xz);
      const float R_IN = 1.02;
      const float R_CORE_OUT = 2.92;
      const float R_WING_OUT = 5.35;

      if (hr < R_IN * 0.90 || hr > R_WING_OUT) return vec4(0.0);

      vec2 unitDir = p.xz / max(hr, 0.001);

      // Edge-on limb factor: wings along +/-X have longer optical path than front/back center
      float wingAniso = abs(unitDir.x);
      float effectiveOut = mix(R_CORE_OUT, R_WING_OUT, wingAniso * wingAniso);
      if (hr > effectiveOut) return vec4(0.0);

      float innerEdge = smoothstep(R_IN * 0.90, R_IN + 0.08, hr);
      float outerEdge = 1.0 - smoothstep(R_IN + 0.35, effectiveOut, hr);
      float radialEnv = innerEdge * pow(max(outerEdge, 1e-4), 0.78);

      // Seam-free differential Keplerian shear: rotate unit direction vector by orbital phase
      float keplerPhase = speed + 4.8 / pow(max(hr, 0.35), 1.15);
      float cs = cos(keplerPhase);
      float sn = sin(keplerPhase);
      vec2 rotDir = mat2(cs, -sn, sn, cs) * unitDir;

      // High radial frequency + low tangential frequency => long, razor-sharp concentric filaments
      float fMacro = fbm6(vec2(hr * 5.2, 0.0) + rotDir * 1.85);
      float fMicro = fbm6(vec2(hr * 18.5 + fMacro * 2.2, 0.0) + rotDir * 3.6);
      float fGrain = fbm6(p.xz * 3.8 + rotDir * 6.0);

      // Sharp concentric orbital tracks with deep dark canyons between bright plasma rings
      float rWarped = hr + (fMacro - 0.5) * 0.055;
      float w1 = 0.5 + 0.5 * sin(rWarped * 44.0 - uTime * 1.2);
      float w2 = 0.5 + 0.5 * cos(rWarped * 96.0 + fMicro * 4.2 + uTime * 1.8);
      float w3 = 0.5 + 0.5 * sin(rWarped * 165.0 - fGrain * 5.0);

      float sharpRings = pow(max(w1, 1e-4), 3.4) * 0.58 +
                         pow(max(w2, 1e-4), 2.8) * 0.42 +
                         pow(max(w3, 1e-4), 4.0) * 0.25;

      // Ridged turbulence for fiery dust veins
      float ridge = 1.0 - abs(fMicro * 2.0 - 1.0);
      float streak = clamp((sharpRings * 0.82 + (ridge * ridge) * 0.58) * (0.45 + 0.85 * fMacro), 0.0, 1.6);

      // Front bridge dark soot absorption channels (creates the dramatic dark veins in front of the sphere)
      float frontBridge = smoothstep(0.0, 0.85, p.z) * (1.0 - wingAniso * 0.55);
      float sootVein = smoothstep(0.18, 0.68, fMicro * 0.7 + w1 * 0.3);
      streak *= mix(1.0, 0.22 + 0.95 * sootVein, frontBridge * 0.75);

      // Relativistic Doppler beaming (left approaching side glows incandescent #FFFDF5)
      vec3 tangVel = normalize(vec3(p.z, 0.0, -p.x) + vec3(1e-5, 0.0, 0.0));
      float doppler = dot(tangVel, -rayDir);
      float beam = pow(max(1.0 + 0.50 * doppler, 0.24), 2.25);

      // Temperature & Singularity Gold color ramp
      float coreHeat = 1.0 - smoothstep(R_IN, effectiveOut * 0.82, hr);
      float temp = clamp(coreHeat * 0.66 + streak * 0.58 + doppler * 0.24 + uAudio * 0.24, 0.0, 1.5);

      vec3 colSoot   = vec3(0.025, 0.012, 0.005); // Deep dark dust lane
      vec3 colBronze = vec3(0.471, 0.208, 0.059); // #78350F Warm Bronze
      vec3 colAmber  = vec3(0.851, 0.467, 0.024); // #D97706 Amber Core
      vec3 colGold   = vec3(0.961, 0.718, 0.310); // #F5B74F Solar Gold
      vec3 colPhoton = vec3(1.000, 0.992, 0.961); // #FFFDF5 Photon Ring

      vec3 c = mix(colSoot, colBronze, smoothstep(0.04, 0.26, temp));
      c = mix(c, colAmber, smoothstep(0.22, 0.54, temp));
      c = mix(c, colGold, smoothstep(0.48, 0.84, temp));
      c = mix(c, colPhoton, smoothstep(0.80, 1.22, temp));

      float wingBoost = 1.0 + wingAniso * 0.45;
      c *= beam * voiceBoost * wingBoost * (isSharpPlane ? 1.68 : 0.82);

      float alpha = radialEnv * mix(0.16, 0.98, clamp(streak, 0.0, 1.0)) * (isSharpPlane ? 0.94 : 1.0);
      return vec4(c, clamp(alpha, 0.0, 0.96));
    }

    void main() {
      vec2 ndc = vUv * 2.0 - 1.0;
      float tanHalfFov = 0.41421356; // tan(radians(45.0) * 0.5)

      vec3 ro = vec3(0.0, 0.0, 6.5);
      vec3 rd = normalize(vec3(ndc.x * uAspect * tanHalfFov, ndc.y * tanHalfFov, -1.0));

      // Inverse transform of group rotation
      ro = rotateZ(rotateX(ro, -uTilt.x), -uTilt.y);
      rd = normalize(rotateZ(rotateX(rd, -uTilt.x), -uTilt.y));

      const float BH_M = 0.195;
      const float R_HORIZON = 0.44;

      vec3 pos = ro;
      vec3 prevPos = ro;
      vec3 accCol = vec3(0.0);
      float accAlpha = 0.0;
      float minR = 100.0;
      bool hitBH = false;

      float voiceBoost = 1.0 + uAudio * 0.85;
      float speed = uTime * (0.42 + uAudio * 0.55);

      for (int i = 0; i < 94; i++) {
        float r = max(length(pos), 0.001);
        minR = min(minR, r);

        if (r < R_HORIZON) {
          hitBH = true;
          break;
        }
        if (r > 12.5 && dot(pos, rd) > 0.0) {
          break;
        }

        // 1. Exact Sub-Pixel Equatorial Plane Intersection (zero vertical blur on rings & arches)
        if (i > 0 && ((prevPos.y > 0.0 && pos.y <= 0.0) || (prevPos.y < 0.0 && pos.y >= 0.0))) {
          float dy = abs(pos.y - prevPos.y) + 1e-6;
          float frac = clamp(abs(prevPos.y) / dy, 0.0, 1.0);
          vec3 hitP = mix(prevPos, pos, frac);
          vec4 planeSample = evalAccretionDisk(hitP, rd, speed, voiceBoost, true);
          accCol += (1.0 - accAlpha) * planeSample.rgb * planeSample.a;
          accAlpha += (1.0 - accAlpha) * planeSample.a;
          if (accAlpha > 0.992) break;
        }

        // 2. Ultra-thin volumetric ember haze on the equatorial plane (3D depth on front bridge)
        if (abs(pos.y) < 0.058 && r > 0.96 && r < 4.4 && accAlpha < 0.98) {
          float dtSlab = clamp(min(r * 0.075, abs(pos.y) * 0.34 + 0.015), 0.014, 0.34);
          float yn = pos.y / 0.028;
          float vert = exp(-(yn * yn));
          if (vert > 0.06) {
            vec4 volSample = evalAccretionDisk(pos, rd, speed, voiceBoost, false);
            float volA = clamp(volSample.a * vert * dtSlab * 6.8, 0.0, 0.58);
            accCol += (1.0 - accAlpha) * volSample.rgb * volA;
            accAlpha += (1.0 - accAlpha) * volA;
          }
        }

        // 3. Schwarzschild geodesic photon deflection
        vec3 h = cross(pos, rd);
        float h2 = dot(h, h);
        vec3 accel = -3.0 * BH_M * h2 * pos / pow(max(r, 0.32), 5.0);
        float dt = clamp(min(r * 0.075, abs(pos.y) * 0.34 + 0.015), 0.014, 0.34);

        prevPos = pos;
        rd = normalize(rd + accel * dt);
        pos += rd * dt;
      }

      // Deep Space Void & corner sepia dust wisps + gravitationally lensed stars
      float radialDist = length(vec2(ndc.x * uAspect, ndc.y));
      vec3 bgVoid = vec3(0.008, 0.008, 0.012); // #030305
      vec3 bgNeb0 = vec3(0.032, 0.022, 0.012); // #0D0905
      vec3 bgNeb1 = vec3(0.058, 0.040, 0.020); // #17110A
      vec3 bgCol = mix(bgNeb1, bgNeb0, smoothstep(0.0, 0.65, radialDist));
      bgCol = mix(bgCol, bgVoid, smoothstep(0.50, 1.30, radialDist));

      if (!hitBH) {
        // Warm cosmic dust clouds in peripheral corners (matches Image 2)
        vec2 dustUv = ndc * vec2(uAspect, 1.0);
        float dustCloud = fbm6(dustUv * 1.45 + vec2(2.1, -1.3));
        float dustDetail = fbm6(dustUv * 3.4 - vec2(1.2, 0.7));
        float cornerMask = smoothstep(0.42, 1.15, radialDist);
        bgCol += vec3(0.52, 0.30, 0.13) * pow(max(dustCloud * 0.75 + dustDetail * 0.35, 1e-4), 2.6) * cornerMask * 0.34;

        // Crisp pinpoint stars (two density tiers)
        vec3 sg1 = rd * 56.0;
        vec3 c1 = floor(sg1);
        vec3 f1 = fract(sg1) - 0.5;
        float r1 = hash31(c1);
        vec3 j1 = (vec3(hash31(c1 + 1.3), hash31(c1 + 2.7), hash31(c1 + 5.1)) - 0.5) * 0.56;
        float s1 = (1.0 - smoothstep(0.006, 0.046, length(f1 - j1))) * step(0.954, r1);
        float tw1 = 0.65 + 0.35 * sin(uTime * 1.8 + r1 * 48.0);
        bgCol += mix(vec3(0.961, 0.718, 0.310), vec3(1.000, 0.992, 0.961), fract(r1 * 19.0)) * s1 * tw1 * 0.92;
      } else {
        // Strictly #000000 inside Event Horizon shadow
        bgCol = vec3(0.0);
      }

      // Needle-sharp primary + secondary Photon Ring ONLY outside the #000000 Event Horizon
      float razorPhoton = 0.0;
      float subPhotonRing = 0.0;
      float softCorona = 0.0;
      if (!hitBH) {
        float d1 = (minR - 0.584) * 68.0;
        razorPhoton = exp(-(d1 * d1)) * (2.45 + uAudio * 0.95);
        float d2 = (minR - 0.628) * 42.0;
        subPhotonRing = exp(-(d2 * d2)) * 0.85;
        softCorona = exp(-max(minR - 0.575, 0.0) * 10.5) * 0.28;
      }
      vec3 coronaCol = vec3(1.000, 0.992, 0.961) * razorPhoton +
                       vec3(0.961, 0.718, 0.310) * (subPhotonRing + softCorona * (1.0 + uAudio * 0.45));

      vec3 hdrCol = bgCol * (1.0 - accAlpha) + accCol + (1.0 - accAlpha * 0.35) * coronaCol;

      // High-contrast ACES filmic tone-mapping + subtle crisp S-curve
      vec3 mapped = (hdrCol * (2.51 * hdrCol + 0.03)) / (hdrCol * (2.43 * hdrCol + 0.59) + 0.14);
      mapped = clamp(mapped, 0.0, 1.0);
      mapped = mapped * (0.94 + 0.06 * mapped); // Deeper blacks & crisper gold filament separation

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
      gl_PointSize = aScale * uPixelRatio * (1.0 + uAudio * 0.35) * (18.0 / max(-mvPosition.z, 1.5));
    }
  `,
  fragmentShader: /* glsl */ `
    precision mediump float;
    varying float vAlpha;

    void main() {
      vec2 uv = gl_PointCoord - 0.5;
      float d2 = dot(uv, uv);
      if (d2 > 0.25) discard;
      float core = exp(-d2 * 52.0);
      float halo = exp(-d2 * 15.0) * 0.32;
      vec3 col = mix(vec3(0.961, 0.718, 0.310), vec3(1.000, 0.992, 0.961), core);
      gl_FragColor = vec4(col, (core + halo) * vAlpha * 0.82);
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
    const count = 480;
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    const ph = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const radius = 2.05 + Math.pow(Math.random(), 0.7) * 4.2;
      const theta = Math.random() * Math.PI * 2;
      const spreadY = (Math.random() - 0.5) * 0.18;
      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = spreadY;
      pos[i * 3 + 2] = Math.sin(theta) * radius;
      sc[i] = 0.4 + Math.random() * 0.75;
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

    const targetRotX = BASE_TILT_X + state.pointer.y * 0.10;
    const targetRotZ = BASE_TILT_Z - state.pointer.x * 0.09;

    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, 0.06);
      rayUniforms.uTilt.value.set(groupRef.current.rotation.x, groupRef.current.rotation.z);
    }

    if (neuralPointsRef.current) {
      neuralPointsRef.current.rotation.y -= clampedDelta * (0.15 + targetAudio * 0.35);
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
          <sphereGeometry args={[1.01, 48, 48]} />
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
