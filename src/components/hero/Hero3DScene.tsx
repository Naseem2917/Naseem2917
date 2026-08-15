import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { CanvasErrorBoundary } from '../common/CanvasErrorBoundary';

// Interactive 3D Cyber Core with Orbital Rings & Floating Tech Nodes
const CyberCore: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const ringRef3 = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate particle constellation
  const [particlePositions, particleColors] = useMemo(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorCyan = new THREE.Color('#06b6d4');
    const colorPurple = new THREE.Color('#8b5cf6');

    for (let i = 0; i < count; i++) {
      const radius = 3.2 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.5 ? colorCyan : colorPurple;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x = t * 0.3;
      ringRef1.current.rotation.y = t * 0.2;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y = -t * 0.4;
      ringRef2.current.rotation.z = t * 0.25;
    }
    if (ringRef3.current) {
      ringRef3.current.rotation.z = -t * 0.35;
      ringRef3.current.rotation.x = t * 0.15;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.08;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Cyber Icosahedron Core */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.6, 1]} />
          <meshStandardMaterial
            color="#090d16"
            emissive="#06b6d4"
            emissiveIntensity={0.6}
            wireframe={true}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Inner Solid Core */}
        <mesh>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#7c3aed"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Orbital Glowing Rings */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[2.5, 0.025, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.7} />
      </mesh>

      <mesh ref={ringRef2}>
        <torusGeometry args={[2.9, 0.02, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
      </mesh>

      <mesh ref={ringRef3}>
        <torusGeometry args={[3.3, 0.018, 16, 100]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.5} />
      </mesh>

      {/* Orbiting Particle Dust */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleColors.length / 3}
            array={particleColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} sizeAttenuation />
      </points>
    </group>
  );
};

export const Hero3DScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-pause render loop when scrolled out of view to save 100% GPU
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center">
      {/* Decorative Glow Halo behind canvas */}
      <div className="absolute w-72 h-72 rounded-full bg-primary/20 filter blur-[80px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute w-64 h-64 rounded-full bg-secondary/20 filter blur-[70px] pointer-events-none -z-10 translate-x-12 translate-y-8" />

      <CanvasErrorBoundary fallbackText="Interactive 3D Core running in optimized view mode">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center text-primary/70 text-sm animate-pulse">
            Initializing 3D Interface...
          </div>
        }>
          <Canvas
            frameloop={isVisible ? 'always' : 'never'}
            camera={{ position: [0, 0, 7.5], fov: 45 }}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            onCreated={({ gl }) => {
              gl.domElement.addEventListener('webglcontextlost', (e) => {
                e.preventDefault();
                console.warn('Hero3D WebGL context lost - preventing crash.');
              }, false);
            }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#06b6d4" />
            <pointLight position={[5, -5, 5]} intensity={1.2} color="#8b5cf6" />

            <CyberCore />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.5}
              autoRotate={false}
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 3}
            />
          </Canvas>
        </Suspense>
      </CanvasErrorBoundary>

      <div className="absolute bottom-2 text-[11px] font-mono tracking-wider text-slate-500 uppercase flex items-center gap-1.5 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
        Interactive 3D Core • Drag to Rotate
      </div>
    </div>
  );
};
