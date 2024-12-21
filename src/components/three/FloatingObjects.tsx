import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Vector3 } from 'three';
import FloatingObject from './FloatingObject';

export default function FloatingObjects() {
  const group = useRef<Group>(null);
  const rotationSpeed = useRef(0.001);
  const targetRotation = useRef(0);

  useFrame((state) => {
    if (!group.current) return;

    // Smooth rotation
    group.current.rotation.y += (targetRotation.current - group.current.rotation.y) * 0.02;
    targetRotation.current += rotationSpeed.current;

    // Oscillating movement
    const time = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  const objects = [
    {
      position: [-4, 2, -2],
      geometry: 'box',
      geometryArgs: [1, 1, 1],
      opacity: 0.3,
      color: '#17D9FF'
    },
    {
      position: [4, -2, -1],
      geometry: 'sphere',
      geometryArgs: [0.7, 32, 32],
      opacity: 0.2,
      color: '#4CAF50'
    },
    {
      position: [0, 3, 2],
      geometry: 'torus',
      geometryArgs: [1, 0.3, 16, 32],
      opacity: 0.25,
      color: '#FF9800'
    },
    {
      position: [-3, -1, 3],
      geometry: 'octahedron',
      geometryArgs: [0.8],
      opacity: 0.15,
      color: '#E91E63'
    },
    {
      position: [3, 1, -3],
      geometry: 'dodecahedron',
      geometryArgs: [0.7],
      opacity: 0.2,
      color: '#9C27B0'
    }
  ];

  return (
    <group ref={group}>
      {objects.map((obj, index) => (
        <FloatingObject
          key={index}
          {...obj}
          rotationSpeed={0.01 * (index + 1)}
        />
      ))}
    </group>
  );
}