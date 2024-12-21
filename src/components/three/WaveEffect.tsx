import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function WaveEffect() {
  const mesh = useRef();
  const uniforms = useRef({
    time: { value: 0 },
    amplitude: { value: 0.4 },
    frequency: { value: 1.0 },
    color: { value: new THREE.Color('#17D9FF') }
  });

  useFrame((state) => {
    uniforms.current.time.value = state.clock.getElapsedTime();
  });

  const vertexShader = `
    uniform float time;
    uniform float amplitude;
    uniform float frequency;
    
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
      vNormal = normal;
      vPosition = position;
      
      float wave = amplitude * sin(frequency * position.x + time) * 
                   sin(frequency * position.z + time);
                   
      vec3 newPosition = position + normal * wave;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 color;
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
      float intensity = pow(0.8 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
      gl_FragColor = vec4(color, intensity * 0.5);
    }
  `;

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[30, 30, 64, 64]} />
      <shaderMaterial
        uniforms={uniforms.current}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}