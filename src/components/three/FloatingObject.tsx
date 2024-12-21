import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import { useSpring, animated } from '@react-spring/three';

interface FloatingObjectProps {
  position: [number, number, number];
  geometry: string;
  geometryArgs: any[];
  opacity: number;
  color: string;
  rotationSpeed?: number;
}

export default function FloatingObject({ 
  position, 
  geometry, 
  geometryArgs, 
  opacity,
  color,
  rotationSpeed = 0.01
}: FloatingObjectProps) {
  const mesh = useRef<Mesh>(null);
  const initialPosition = useRef(new Vector3(...position));
  const time = useRef(Math.random() * 100);

  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: { mass: 1, tension: 280, friction: 60 }
  });

  useFrame((state) => {
    if (!mesh.current) return;

    // Individual rotation
    mesh.current.rotation.x += rotationSpeed;
    mesh.current.rotation.y += rotationSpeed * 0.8;

    // Floating animation
    time.current += 0.01;
    mesh.current.position.y = initialPosition.current.y + 
      Math.sin(time.current) * 0.2;

    // Subtle position variations
    mesh.current.position.x = initialPosition.current.x + 
      Math.sin(time.current * 0.8) * 0.1;
    mesh.current.position.z = initialPosition.current.z + 
      Math.cos(time.current * 0.8) * 0.1;
  });

  const Geometry = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={geometryArgs} />;
      case 'sphere':
        return <sphereGeometry args={geometryArgs} />;
      case 'torus':
        return <torusGeometry args={geometryArgs} />;
      case 'octahedron':
        return <octahedronGeometry args={geometryArgs} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={geometryArgs} />;
      default:
        return null;
    }
  };

  return (
    <animated.mesh
      ref={mesh}
      position={position}
      scale={scale}
    >
      <Geometry />
      <meshPhysicalMaterial 
        color={color}
        opacity={opacity} 
        transparent 
        roughness={0.2}
        metalness={0.8}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.2}
      />
    </animated.mesh>
  );
}