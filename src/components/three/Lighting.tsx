export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.2} />
      
      {/* Main spotlight */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        color="#17D9FF"
        castShadow
      />
      
      {/* Accent lights */}
      <pointLight
        position={[0, 5, 0]}
        intensity={2}
        color="#17D9FF"
        distance={15}
        decay={2}
      />
      <pointLight
        position={[-5, -5, -5]}
        intensity={1}
        color="#4CAF50"
        distance={10}
        decay={2}
      />
      <pointLight
        position={[5, -5, 5]}
        intensity={1}
        color="#FF9800"
        distance={10}
        decay={2}
      />
      
      {/* Moving light */}
      <pointLight
        position={[
          Math.sin(Date.now() * 0.001) * 10,
          Math.cos(Date.now() * 0.001) * 10,
          0
        ]}
        intensity={1.5}
        color="#E91E63"
        distance={15}
        decay={2}
      />
    </>
  );
}