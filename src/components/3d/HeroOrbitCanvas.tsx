"use client";

import React, { Suspense, useRef, useState, useEffect, Component, ErrorInfo, ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { OrbitRing } from "@/components/3d/OrbitRing";
import { FloatingTechIcon } from "@/components/3d/FloatingTechIcon";
import { CanvasLoader } from "@/components/3d/CanvasLoader";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("WebGL Canvas error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const ParallaxGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const targetX = (state.pointer.x * 0.3);
      const targetY = (state.pointer.y * 0.3);
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export const HeroOrbitCanvas: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const FallbackGlow = (
    <div className="w-full h-full flex items-center justify-center pointer-events-none">
      <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-violet-600/20 blur-[90px] animate-pulse" />
    </div>
  );

  if (!mounted) {
    return FallbackGlow;
  }

  return (
    <WebGLErrorBoundary fallback={FallbackGlow}>
      <div className="w-full h-full min-h-[380px] sm:min-h-[480px] lg:min-h-[550px] relative flex items-center justify-center">
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 45 }}
          gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false }}
          className="w-full h-full"
        >
          <Suspense fallback={<CanvasLoader />}>
            {/* Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <pointLight position={[0, 0, 2]} intensity={3} color="#8b5cf6" distance={10} />
            <pointLight position={[-3, -2, -1]} intensity={2} color="#ec4899" distance={8} />

            {/* Interactive Parallax Container */}
            <ParallaxGroup>
              {/* Particle Field */}
              <Sparkles
                count={80}
                scale={8}
                size={2.5}
                speed={0.4}
                color="#c084fc"
                opacity={0.6}
              />

              {/* Glowing Orbit Portal Ring */}
              <OrbitRing />

              {/* Orbiting Floating Tech Image Icons (Flutter, Firebase, Code </>, Dart) */}
              <FloatingTechIcon
                position={[-2.2, 1.4, 0.5]}
                imageSrc="/tech/flutter.png"
                altText="Flutter Logo"
                color="#38bdf8"
                speed={1.2}
              />
              <FloatingTechIcon
                position={[2.2, 1.2, 0.2]}
                imageSrc="/tech/firebase.png"
                altText="Firebase Logo"
                color="#f59e0b"
                speed={0.9}
              />
              <FloatingTechIcon
                position={[-2.4, -1.2, 0.3]}
                imageSrc="/tech/code.png"
                altText="Code Icon"
                color="#a855f7"
                speed={1.1}
              />
              <FloatingTechIcon
                position={[2.1, -1.4, 0.4]}
                imageSrc="/tech/dart.png"
                altText="Dart Logo"
                color="#6366f1"
                speed={1.0}
              />
            </ParallaxGroup>
          </Suspense>
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
};
