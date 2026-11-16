/**
 * Custom GLSL Shaders for D.investimentos Larius Acoustic Core.
 * Synthesizes real-time 3D particle turbulence, Fresnel obsidian-platinum luminance,
 * and vocal energy modulation.
 */

export const LARIUS_CORE_VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uAudioEnergy;
  uniform float uTurbulence;
  uniform float uDisplacement;
  uniform float uPointSize;
  uniform vec2 uMouse;

  varying float vDisplacement;
  varying float vFresnel;
  varying vec3 vPos;

  float hash(float n) {
    return fract(sin(n) * 43758.5453123);
  }

  float noise3D(vec3 x) {
    const vec3 stepVec = vec3(110.0, 241.0, 171.0);
    vec3 i = floor(x);
    vec3 f = fract(x);
    float n = dot(i, stepVec);
    vec3 u = f * f * (3.0 - 2.0 * f);

    return mix(
      mix(
        mix(hash(n + dot(stepVec, vec3(0.0, 0.0, 0.0))), hash(n + dot(stepVec, vec3(1.0, 0.0, 0.0))), u.x),
        mix(hash(n + dot(stepVec, vec3(0.0, 1.0, 0.0))), hash(n + dot(stepVec, vec3(1.0, 1.0, 0.0))), u.x),
        u.y
      ),
      mix(
        mix(hash(n + dot(stepVec, vec3(0.0, 0.0, 1.0))), hash(n + dot(stepVec, vec3(1.0, 0.0, 1.0))), u.x),
        mix(hash(n + dot(stepVec, vec3(0.0, 1.0, 1.0))), hash(n + dot(stepVec, vec3(1.0, 1.0, 1.0))), u.x),
        u.y
      ),
      u.z
    );
  }

  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.55;
    for (int i = 0; i < 3; i++) {
      v += a * noise3D(p);
      p = p * 2.04 + vec3(1.7, 9.2, 4.3);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 dir = normalize(position);
    float baseField = fbm(dir * (1.8 + uTurbulence * 0.9) + vec3(uTime * 0.24, -uTime * 0.18, uTime * 0.15));
    float acousticSpike = noise3D(dir * 4.8 - vec3(uTime * 1.9)) * uAudioEnergy * 0.85;

    float mouseInfluence = dot(dir.xy, normalize(uMouse + vec2(0.0001))) * length(uMouse) * 0.12;
    float disp = ((baseField - 0.5) * uDisplacement * 1.45) + acousticSpike + mouseInfluence;

    vDisplacement = clamp((disp + 0.35) * 1.15, 0.0, 1.0);
    vPos = position + normal * disp;

    vec4 mvPos = modelViewMatrix * vec4(vPos, 1.0);
    vec3 viewNormal = normalize(normalMatrix * normal);
    vec3 viewDir = normalize(-mvPos.xyz);
    vFresnel = pow(1.0 - abs(dot(viewNormal, viewDir)), 2.1);

    gl_Position = projectionMatrix * mvPos;
    float perspectiveSize = uPointSize + (uAudioEnergy * 2.1) + (vFresnel * 1.15);
    gl_PointSize = perspectiveSize * (3.6 / max(-mvPos.z, 1.0));
  }
`;

export const LARIUS_CORE_FRAGMENT_SHADER = /* glsl */ `
  uniform float uAudioEnergy;
  uniform float uCoreOpacity;

  varying float vDisplacement;
  varying float vFresnel;

  void main() {
    vec2 uv = 2.0 * gl_PointCoord - 1.0;
    float distSq = dot(uv, uv);
    if (distSq > 1.0) discard;

    float halo = 1.0 - smoothstep(0.05, 1.0, distSq);

    // Disciplined Obsidian -> Brushed Titanium -> Pure Platinum palette
    vec3 obsidianSteel = vec3(0.28, 0.29, 0.33);
    vec3 brushedTitanium = vec3(0.68, 0.70, 0.74);
    vec3 purePlatinum = vec3(0.98, 0.99, 1.00);
    vec3 mutedAlpha = vec3(0.32, 0.86, 0.67);

    float energyPeak = clamp(vDisplacement * 0.85 + vFresnel * 0.45 + uAudioEnergy * 0.4, 0.0, 1.0);
    vec3 baseShade = mix(obsidianSteel, brushedTitanium, smoothstep(0.15, 0.62, energyPeak));
    vec3 finalColor = mix(baseShade, purePlatinum, smoothstep(0.55, 0.96, energyPeak));

    // Whisper of emerald telemetry strictly on active vocal harmonics
    finalColor = mix(finalColor, mutedAlpha, uAudioEnergy * vFresnel * 0.24);

    float alpha = (uCoreOpacity * 0.62 + uAudioEnergy * 0.28 + vFresnel * 0.25) * halo;
    gl_FragColor = vec4(finalColor, clamp(alpha, 0.0, 0.95));
  }
`;
