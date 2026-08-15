import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, RigidBody, BallCollider, RapierRigidBody } from '@react-three/rapier';
import { createOfficialTechTexture, TECH_BADGES } from './techTextures';
import { CanvasErrorBoundary } from '../common/CanvasErrorBoundary';
import { Sparkles, MousePointer, RotateCcw } from 'lucide-react';

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

// Generate 26 sphere configurations
const SPHERES_DATA = [...Array(26)].map((_, i) => ({
  id: i,
  scale: [0.85, 1, 0.9, 1.1, 0.95][i % 5],
  initialPos: [
    (Math.random() - 0.5) * 16,
    (Math.random() - 0.5) * 16 + 10,
    (Math.random() - 0.5) * 10,
  ] as [number, number, number],
  badgeIndex: i % TECH_BADGES.length,
}));

interface SphereGeoProps {
  scale: number;
  initialPos: [number, number, number];
  material: THREE.MeshStandardMaterial;
  isActive: boolean;
  vec?: THREE.Vector3;
}

function SphereGeo({ scale, initialPos, material, isActive, vec = new THREE.Vector3() }: SphereGeoProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;
    delta = Math.min(0.08, delta);

    // Pull toward center with gravity impulse
    const translation = api.current.translation();
    const impulse = vec
      .set(translation.x, translation.y, translation.z)
      .normalize()
      .multiply(new THREE.Vector3(-45 * delta * scale, -135 * delta * scale, -45 * delta * scale));

    api.current.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      ref={api}
      colliders={false}
      linearDamping={0.8}
      angularDamping={0.2}
      friction={0.25}
      restitution={0.65}
      position={initialPos}
    >
      <BallCollider args={[scale]} />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, Math.random() * Math.PI, Math.random() * 0.5]}
      />
    </RigidBody>
  );
}

interface PointerProps {
  isActive: boolean;
  vec?: THREE.Vector3;
}

function PointerCollider({ isActive, vec = new THREE.Vector3() }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive || !ref.current) return;
    const targetVec = vec.lerp(
      new THREE.Vector3((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 0),
      0.25
    );
    ref.current.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2.2]} />
    </RigidBody>
  );
}

export const TechStack3DPhysics: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(true);
  const [keyReset, setKeyReset] = useState(0);

  // Auto-pause physics when scrolled away to save 100% GPU
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Pre-generate materials with crisp vector textures
  const materials = useMemo(() => {
    return TECH_BADGES.map((badge) => {
      const tex = createOfficialTechTexture(badge);
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.15,
        metalness: 0.08,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[450px] sm:h-[550px] md:h-[620px] rounded-3xl overflow-hidden glass-panel border border-surface-border bg-background/90 flex items-center justify-center select-none">
      
      {/* Background Big Typography "MY TECHSTACK" (Just like user screenshot) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold text-white/[0.12] tracking-tighter sm:tracking-widest uppercase select-none text-center px-4">
          MY TECHSTACK
        </h2>
      </div>

      {/* Decorative Glow Ambient Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10 filter blur-[100px] pointer-events-none -z-0" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-secondary/10 filter blur-[100px] pointer-events-none -z-0" />

      {/* Top Header Controls */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 bg-surface/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-slate-300">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Interactive Spheres</span>
        </div>

        <button
          onClick={() => setKeyReset((k) => k + 1)}
          className="pointer-events-auto flex items-center gap-1.5 bg-surface/90 hover:bg-surface-border backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-md active:scale-95"
          title="Reset"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* 3D WebGL Canvas */}
      <CanvasErrorBoundary fallbackText="Tech Stack running in smooth mode">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center text-primary text-sm animate-pulse font-mono">
            Loading Tech Stack...
          </div>
        }>
          <Canvas
            key={keyReset}
            frameloop={isActive ? 'always' : 'never'}
            shadows
            camera={{ position: [0, 0, 18], fov: 35, near: 1, far: 100 }}
            gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
            className="w-full h-full cursor-grab active:cursor-grabbing z-10"
          >
            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 15, 10]} intensity={1.8} />
            <directionalLight position={[-10, -10, -5]} intensity={0.6} color="#06b6d4" />
            <pointLight position={[0, 0, 15]} intensity={1.2} color="#ffffff" />

            <Physics gravity={[0, 0, 0]}>
              <PointerCollider isActive={isActive} />
              {SPHERES_DATA.map((props) => (
                <SphereGeo
                  key={props.id}
                  scale={props.scale}
                  initialPos={props.initialPos}
                  material={materials[props.badgeIndex]}
                  isActive={isActive}
                />
              ))}
            </Physics>
          </Canvas>
        </Suspense>
      </CanvasErrorBoundary>

      {/* Bottom Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-20 flex items-center gap-2 bg-surface/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[11px] font-mono text-slate-400 shadow-lg">
        <MousePointer className="w-3 h-3 text-primary animate-bounce" />
        <span>Hover mouse to scatter & bounce 3D spheres</span>
      </div>

    </div>
  );
};
