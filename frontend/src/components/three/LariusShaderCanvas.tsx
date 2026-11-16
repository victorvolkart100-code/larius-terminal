import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { LARIUS_CORE_FRAGMENT_SHADER, LARIUS_CORE_VERTEX_SHADER } from '../../shaders/lariusCoreShader';
import { ShaderUniformParams } from '../../types/investimentos';

interface LariusShaderCanvasProps {
  isSpeaking: boolean;
  shaderParams: ShaderUniformParams;
  getAudioEnergy: () => number;
  className?: string;
}

/**
 * Full-bleed seamless WebGL Three.js + GLSL shader core with radial vignette melt
 * (no boxy frame seams) and gyroscope orbital HUD rings.
 */
export const LariusShaderCanvas: React.FC<LariusShaderCanvasProps> = ({
  isSpeaking,
  shaderParams,
  getAudioEnergy,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const speakingRef = useRef(isSpeaking);
  const paramsRef = useRef(shaderParams);

  useEffect(() => {
    speakingRef.current = isSpeaking;
  }, [isSpeaking]);

  useEffect(() => {
    paramsRef.current = shaderParams;
  }, [shaderParams]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x030304, 0);
    container.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    const uniforms = {
      uTime: { value: 0 },
      uAudioEnergy: { value: paramsRef.current.audioEnergy },
      uTurbulence: { value: paramsRef.current.turbulence },
      uDisplacement: { value: paramsRef.current.displacement },
      uPointSize: { value: paramsRef.current.pointSize },
      uCoreOpacity: { value: paramsRef.current.coreOpacity },
      uMouse: { value: new THREE.Vector2(0, 0) },
    };

    const pointsGeo = new THREE.IcosahedronGeometry(1.18, 22);
    const pointsMat = new THREE.ShaderMaterial({
      vertexShader: LARIUS_CORE_VERTEX_SHADER,
      fragmentShader: LARIUS_CORE_FRAGMENT_SHADER,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particleCore = new THREE.Points(pointsGeo, pointsMat);
    rootGroup.add(particleCore);

    const latticeGeo = new THREE.IcosahedronGeometry(1.24, 2);
    const latticeMat = new THREE.MeshBasicMaterial({
      color: '#A1A1AA',
      wireframe: true,
      transparent: true,
      opacity: 0.09,
    });
    const lattice = new THREE.Mesh(latticeGeo, latticeMat);
    rootGroup.add(lattice);

    const ringMat1 = new THREE.MeshBasicMaterial({ color: '#E4E4E7', transparent: true, opacity: 0.28 });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.74, 0.004, 12, 160), ringMat1);
    rootGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({ color: '#71717A', transparent: true, opacity: 0.24 });
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.04, 0.0035, 12, 160, Math.PI * 1.45), ringMat2);
    rootGroup.add(ring2);

    const ringMat3 = new THREE.MeshBasicMaterial({ color: '#F4F4F5', transparent: true, opacity: 0.16 });
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(2.32, 0.003, 12, 160, Math.PI * 0.72), ringMat3);
    rootGroup.add(ring3);

    const targetMouse = new THREE.Vector2(0, 0);
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      targetMouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    window.addEventListener('mousemove', handlePointerMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };
    window.addEventListener('resize', handleResize);

    let rafId = 0;
    let lastTime = performance.now();

    const animate = (now: number) => {
      rafId = window.requestAnimationFrame(animate);
      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      const t = now / 1000;

      const p = paramsRef.current;
      const liveMic = getAudioEnergy();
      const speechWave = speakingRef.current
        ? (Math.sin(t * 13.0) * 0.5 + 0.5) * (Math.sin(t * 4.7) * 0.5 + 0.5) * 0.7
        : 0;
      const effectiveEnergy = Math.max(p.audioEnergy, liveMic, speechWave);

      uniforms.uTime.value = t;
      uniforms.uAudioEnergy.value += (effectiveEnergy - uniforms.uAudioEnergy.value) * 0.16;
      uniforms.uTurbulence.value = p.turbulence;
      uniforms.uDisplacement.value = p.displacement;
      uniforms.uPointSize.value = p.pointSize;
      uniforms.uCoreOpacity.value = p.coreOpacity;
      uniforms.uMouse.value.lerp(targetMouse, 0.06);

      const speed = 1 + uniforms.uAudioEnergy.value * 2.2;
      particleCore.rotation.y += delta * 0.16 * speed;
      particleCore.rotation.z += delta * 0.05;

      lattice.rotation.y -= delta * 0.12 * speed;
      const latticeScale = 1 + uniforms.uAudioEnergy.value * 0.12;
      lattice.scale.setScalar(latticeScale);

      ring1.rotation.x = Math.PI / 3.1 + Math.sin(t * 0.4) * 0.08;
      ring1.rotation.z += delta * 0.28 * speed;

      ring2.rotation.y = -Math.PI / 4.2;
      ring2.rotation.x += delta * 0.24 * speed;

      ring3.rotation.z = Math.PI / 2.2;
      ring3.rotation.y -= delta * 0.34 * speed;

      rootGroup.rotation.y += (targetMouse.x * 0.22 - rootGroup.rotation.y) * 0.04;
      rootGroup.rotation.x += (-targetMouse.y * 0.14 - rootGroup.rotation.x) * 0.04;

      renderer.render(scene, camera);
    };

    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      pointsGeo.dispose();
      pointsMat.dispose();
      latticeGeo.dispose();
      latticeMat.dispose();
      ring1.geometry.dispose();
      ringMat1.dispose();
      ring2.geometry.dispose();
      ringMat2.dispose();
      ring3.geometry.dispose();
      ringMat3.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [getAudioEnergy]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none relative overflow-hidden ${className}`}
      style={{
        WebkitMaskImage: 'radial-gradient(circle at 50% 50%, #000 48%, rgba(0,0,0,0.45) 68%, transparent 88%)',
        maskImage: 'radial-gradient(circle at 50% 50%, #000 48%, rgba(0,0,0,0.45) 68%, transparent 88%)',
      }}
    />
  );
};
