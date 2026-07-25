"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface FloatingTechIconProps {
  position: [number, number, number];
  imageSrc: string;
  altText: string;
  color?: string;
  speed?: number;
}

export const FloatingTechIcon: React.FC<FloatingTechIconProps> = ({
  position,
  imageSrc,
  altText,
  color = "#8b5cf6",
  speed = 1,
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        initialY + Math.sin(state.clock.elapsedTime * speed * 1.5) * 0.18;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* 3D Glowing Glass Sphere Outer Shell */}
      <mesh scale={[0.45, 0.45, 0.45]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          transparent
          opacity={0.25}
          roughness={0.1}
        />
      </mesh>

      {/* Floating 100% Circular Image Orb Overlay */}
      <Html center distanceFactor={10} zIndexRange={[100, 0]}>
        <div className="w-13 h-13 p-2.5 rounded-full bg-gradient-to-br from-violet-600/30 via-[#0b0914]/95 to-purple-900/40 border border-violet-400/60 backdrop-blur-xl shadow-[0_0_25px_rgba(139,92,246,0.7)] flex items-center justify-center select-none group hover:scale-115 transition-transform duration-300">
          <Image
            src={imageSrc}
            alt={altText}
            width={32}
            height={32}
            className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
          />
        </div>
      </Html>
    </group>
  );
};
