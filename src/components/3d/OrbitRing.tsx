"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const OrbitRing: React.FC = () => {
  const ringRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z -= delta * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Main Emissive Portal Torus Ring */}
      <mesh ref={ringRef} scale={[2.6, 2.6, 2.6]}>
        <torusGeometry args={[1, 0.035, 32, 100]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={2.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Secondary Outer Thin Ring */}
      <mesh ref={outerRingRef} scale={[3.1, 3.1, 3.1]}>
        <torusGeometry args={[1, 0.01, 16, 100]} />
        <meshStandardMaterial
          color="#c084fc"
          emissive="#a855f7"
          emissiveIntensity={1.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
};
