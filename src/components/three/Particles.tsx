import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Particles() {
  const points = useRef();
  const particlesCount = 3000;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);
    
    for (let i = 0; i < particlesCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      
      // Color
      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.1 + 0.5, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      // Size
      sizes[i] = Math.random() * 2;
    }
    
    return { positions, colors, sizes };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      
      // Spiral motion
      const angle = time * 0.1 + i * 0.01;
      const radius = Math.sin(i * 0.1) * 5;
      
      points.current.geometry.attributes.position.array[i3] += 
        Math.sin(angle) * 0.02;
      points.current.geometry.attributes.position.array[i3 + 1] += 
        Math.cos(angle) * 0.02;
      points.current.geometry.attributes.position.array[i3 + 2] += 
        Math.sin(time * 0.1 + i) * 0.01;
      
      // Reset position if particle goes too far
      const distance = Math.sqrt(
        Math.pow(points.current.geometry.attributes.position.array[i3], 2) +
        Math.pow(points.current.geometry.attributes.position.array[i3 + 1], 2) +
        Math.pow(points.current.geometry.attributes.position.array[i3 + 2], 2)
      );
      
      if (distance > 15) {
        points.current.geometry.attributes.position.array[i3] = 
          (Math.random() - 0.5) * 20;
        points.current.geometry.attributes.position.array[i3 + 1] = 
          (Math.random() - 0.5) * 20;
        points.current.geometry.attributes.position.array[i3 + 2] = 
          (Math.random() - 0.5) * 20;
      }
    }
    
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={positions.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particlesCount}
          array={positions.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        map={texture}
      />
    </points>
  );
}