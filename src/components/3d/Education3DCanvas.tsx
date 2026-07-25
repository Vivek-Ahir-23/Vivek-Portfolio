"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, MeshWobbleMaterial, TorusKnot } from "@react-three/drei";
import * as THREE from "three";
import { CanvasLoader } from "@/components/3d/CanvasLoader";

interface Floating3DShapeProps {
  type: "knot" | "icosahedron" | "torus";
  color: string;
  position: [number, number, number];
  scale?: number;
}

const Floating3DShape: React.FC<Floating3DShapeProps> = ({
  type,
  color,
  position,
  scale = 1,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5} position={position}>
      <mesh ref={meshRef} scale={scale}>
        {type === "knot" && <torusKnotGeometry args={[0.7, 0.22, 128, 32]} />}
        {type === "icosahedron" && <icosahedronGeometry args={[0.9, 1]} />}
        {type === "torus" && <torusGeometry args={[0.8, 0.25, 32, 100]} />}

        <MeshWobbleMaterial
          color={color}
          factor={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
          emissive={color}
          emissiveIntensity={0.25}
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

interface Education3DCanvasProps {
  variant?: "bca" | "mca";
  className?: string;
}

export const Education3DCanvas: React.FC<Education3DCanvasProps> = ({
  variant = "bca",
  className = "",
}) => {
  const mainColor = variant === "mca" ? "#a855f7" : "#38bdf8";
  const secondaryColor = variant === "mca" ? "#ec4899" : "#6366f1";

  return (
    <div className={`w-full h-full min-h-[280px] sm:min-h-[340px] relative flex items-center justify-center ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Lighting */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[0, 0, 3]} intensity={3} color={mainColor} distance={10} />
          <pointLight position={[-3, -2, -1]} intensity={2} color={secondaryColor} distance={8} />

          <InteractiveParallaxGroup>
            {/* Sparkles Particle Atmosphere */}
            <Sparkles
              count={50}
              scale={5}
              size={2}
              speed={0.5}
              color={mainColor}
              opacity={0.7}
            />

            {/* Central Floating 3D Geometric Mesh */}
            {variant === "mca" ? (
              <Floating3DShape
                type="knot"
                color={mainColor}
                position={[0, 0, 0]}
                scale={0.95}
              />
            ) : (
              <Floating3DShape
                type="icosahedron"
                color={mainColor}
                position={[0, 0, 0]}
                scale={1}
              />
            )}

            {/* Secondary Floating Orb */}
            <Floating3DShape
              type="torus"
              color={secondaryColor}
              position={[variant === "mca" ? 1.6 : -1.6, 0.8, -0.5]}
              scale={0.45}
            />
          </InteractiveParallaxGroup>
        </Suspense>
      </Canvas>
    </div>
  );
};
