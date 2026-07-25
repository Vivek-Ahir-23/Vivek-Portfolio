"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";
import { CanvasLoader } from "@/components/3d/CanvasLoader";

const FloatingMailIconMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.2}>
        <octahedronGeometry args={[1, 2]} />
        <MeshWobbleMaterial
          color="#a855f7"
          factor={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          wireframe={false}
          emissive="#a855f7"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

const InteractiveParallaxGroup: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const targetX = state.pointer.x * 0.4;
      const targetY = state.pointer.y * 0.4;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export const Contact3DCanvas: React.FC = () => {
  return (
    <div className="w-full h-[220px] sm:h-[260px] relative flex items-center justify-center pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[0, 0, 3]} intensity={3} color="#a855f7" distance={10} />
          <pointLight position={[-3, -2, -1]} intensity={2} color="#ec4899" distance={8} />

          <InteractiveParallaxGroup>
            <Sparkles
              count={60}
              scale={5}
              size={2.5}
              speed={0.6}
              color="#c084fc"
              opacity={0.8}
            />
            <FloatingMailIconMesh />
          </InteractiveParallaxGroup>
        </Suspense>
      </Canvas>
    </div>
  );
};
