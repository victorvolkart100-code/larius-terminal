'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Line, Grid } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';
import { AssetNode, InvestorTier } from '@/types/portfolio';

interface DiagramProps {
  assets: AssetNode[];
  tier: InvestorTier;
  focusedAssetId: string | null;
  onSelectAsset: (id: string | null) => void;
}

function CameraRig({
  assets,
  focusedAssetId,
}: {
  assets: AssetNode[];
  focusedAssetId: string | null;
}) {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const targetAsset = assets.find((a) => a.id === focusedAssetId);

    if (targetAsset) {
      const [x, y, z] = targetAsset.position;
      gsap.to(camera.position, {
        x: x + 1.8,
        y: y + 1.2,
        z: z + 2.6,
        duration: 1.35,
        ease: 'power3.out',
      });

      if (controlsRef.current) {
        gsap.to(controlsRef.current.target, {
          x,
          y: y * 0.6,
          z,
          duration: 1.35,
          ease: 'power3.out',
        });
      }
    } else {
      gsap.to(camera.position, {
        x: 0,
        y: 3.4,
        z: 6.2,
        duration: 1.4,
        ease: 'power3.out',
      });
      if (controlsRef.current) {
        gsap.to(controlsRef.current.target, {
          x: 0,
          y: 0.8,
          z: 0,
          duration: 1.4,
          ease: 'power3.out',
        });
      }
    }
  }, [focusedAssetId, assets, camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      maxPolarAngle={Math.PI / 2.05}
      minDistance={2.5}
      maxDistance={10}
    />
  );
}

function AssetPillar({
  asset,
  tier,
  isFocused,
  hasAnyFocus,
  onSelect,
}: {
  asset: AssetNode;
  tier: InvestorTier;
  isFocused: boolean;
  hasAnyFocus: boolean;
  onSelect: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const height = Math.max(0.6, (asset.allocation / 40) * 2.4);
  const [x, , z] = asset.position;
  const dimmed = hasAnyFocus && !isFocused;

  useFrame((state) => {
    if (!meshRef.current) return;
    if (isFocused) {
      const pulse = 1 + Math.sin(state.clock.getElapsedTime() * 4) * 0.04;
      meshRef.current.scale.set(pulse, 1, pulse);
    } else {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
    }
  });

  return (
    <group position={[x, 0, z]}>
      <mesh
        ref={meshRef}
        position={[0, height / 2, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
      >
        <cylinderGeometry args={[0.28, 0.34, height, 32]} />
        <meshStandardMaterial
          color={asset.color}
          emissive={asset.color}
          emissiveIntensity={isFocused ? 1.4 : dimmed ? 0.1 : 0.45}
          transparent
          opacity={dimmed ? 0.22 : 0.88}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[0.38, 0.44, 32]} />
        <meshBasicMaterial
          color={asset.color}
          transparent
          opacity={isFocused ? 0.9 : 0.25}
        />
      </mesh>
      <Html
        position={[0, height + 0.45, 0]}
        center
        distanceFactor={7}
        style={{
          pointerEvents: 'none',
          opacity: dimmed ? 0.25 : 1,
          transition: 'opacity 0.4s ease',
        }}
      >
        <div
          className={`w-56 rounded-xl border p-3 backdrop-blur-md transition-all ${
            isFocused
              ? 'border-[#FF6B00]/60 bg-[#0A0A0E]/95 shadow-[0_0_25px_rgba(255,107,0,0.25)]'
              : 'border-white/10 bg-[#0A0A0E]/80'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold tracking-wider text-white">
              {asset.ticker}
            </span>
            <span className="tabular-nums rounded bg-white/[0.06] px-1.5 py-0.5 text-[11px] font-medium text-[#FF6B00]">
              {asset.allocation}%
            </span>
          </div>
          <p className="mt-0.5 text-[10px] text-zinc-400">{asset.category}</p>
          {tier === 'beginner' && (
            <p className="mt-2 text-[10px] leading-relaxed text-zinc-300">
              {asset.metrics.beginnerSummary}
            </p>
          )}
          {tier === 'intermediate' && (
            <p className="mt-2 text-[10px] leading-relaxed text-zinc-300">
              {asset.metrics.intermediateInfo}
            </p>
          )}
          {tier === 'senior' && (
            <div className="mt-2 grid grid-cols-2 gap-1.5 border-t border-white/[0.07] pt-2 text-[10px] tabular-nums">
              <div>
                <span className="text-zinc-500">DY: </span>
                <span className="font-medium text-emerald-400">{asset.metrics.seniorMetrics.dy}</span>
              </div>
              <div>
                <span className="text-zinc-500">Sharpe: </span>
                <span className="font-medium text-white">{asset.metrics.seniorMetrics.sharpe}</span>
              </div>
              <div>
                <span className="text-zinc-500">Beta: </span>
                <span className="font-medium text-white">{asset.metrics.seniorMetrics.beta}</span>
              </div>
              <div>
                <span className="text-zinc-500">{asset.metrics.seniorMetrics.durationOrPvp}</span>
              </div>
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

export function PortfolioDiagram3D({
  assets,
  tier,
  focusedAssetId,
  onSelectAsset,
}: DiagramProps) {
  const correlationPoints = assets.map(
    (a) => new THREE.Vector3(a.position[0], 0.05, a.position[2])
  );

  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-2xl">
      <Canvas
        camera={{ position: [0, 3.4, 6.2], fov: 40 }}
        dpr={[1, 2]}
        onPointerMissed={() => onSelectAsset(null)}
      >
        <color attach="background" args={['#050507']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 8, 5]} intensity={1.5} color="#FF6B00" />
        <pointLight position={[-5, 4, -5]} intensity={0.8} color="#38BDF8" />
        <Grid
          args={[12, 12]}
          cellSize={tier === 'senior' ? 0.5 : 1}
          cellThickness={0.5}
          cellColor="#1e1e26"
          sectionSize={2}
          sectionThickness={1}
          sectionColor="#2e2e3a"
          fadeDistance={11}
          position={[0, 0, 0]}
        />
        {tier !== 'beginner' && correlationPoints.length > 1 && (
          <Line
            points={[...correlationPoints, correlationPoints[0]]}
            color="#FF6B00"
            lineWidth={1}
            transparent
            opacity={0.28}
          />
        )}
        {assets.map((asset) => (
          <AssetPillar
            key={asset.id}
            asset={asset}
            tier={tier}
            isFocused={focusedAssetId === asset.id}
            hasAnyFocus={focusedAssetId !== null}
            onSelect={() =>
              onSelectAsset(focusedAssetId === asset.id ? null : asset.id)
            }
          />
        ))}
        <CameraRig assets={assets} focusedAssetId={focusedAssetId} />
        <EffectComposer>
          <Bloom intensity={0.7} luminanceThreshold={0.4} mipmapBlur />
        </EffectComposer>
      </Canvas>
      <div className="pointer-events-none absolute bottom-3 left-4 flex items-center gap-4 text-[10px] tracking-widest text-zinc-500 uppercase">
        <span>EIXO X: RISCO / BETA</span>
        <span>•</span>
        <span>ALTURA: ALOCAÇÃO (%)</span>
        {tier === 'senior' && (
          <>
            <span>•</span>
            <span className="text-[#FF6B00]">MATRIZ QUANTITATIVA ATIVA</span>
          </>
        )}
      </div>
    </div>
  );
}
