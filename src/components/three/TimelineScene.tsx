import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';

interface TimelineSceneProps {
  activeStep: number;
}

function TimelinePath({ activeStep }: { activeStep: number }) {
  const pathRef = useRef<THREE.Mesh>(null);
  
  const { progress } = useSpring({
    progress: activeStep / 4, // Normalize to 0-1
    config: { tension: 120, friction: 14 }
  });

  useFrame(() => {
    if (pathRef.current) {
      pathRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={pathRef}>
      {/* Circular path */}
      <mesh>
        <torusGeometry args={[3, 0.05, 16, 100]} />
        <meshStandardMaterial color="#17D9FF" opacity={0.3} transparent />
      </mesh>

      {/* Progress indicator */}
      <animated.mesh>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#17D9FF" />
        <animated.group position={progress.to(p => [
          Math.sin(p * Math.PI * 2) * 3,
          0,
          Math.cos(p * Math.PI * 2) * 3
        ])} />
      </animated.mesh>

      {/* Step markers */}
      {[0, 1, 2, 3, 4].map((step) => {
        const angle = (step / 4) * Math.PI * 2;
        return (
          <mesh
            key={step}
            position={[
              Math.sin(angle) * 3,
              0,
              Math.cos(angle) * 3
            ]}
          >
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshStandardMaterial 
              color={step <= activeStep ? '#17D9FF' : '#666'} 
              emissive={step <= activeStep ? '#17D9FF' : '#000'}
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function TimelineScene({ activeStep }: TimelineSceneProps) {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 4, 8]} />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <TimelinePath activeStep={activeStep} />
    </Canvas>
  );
}