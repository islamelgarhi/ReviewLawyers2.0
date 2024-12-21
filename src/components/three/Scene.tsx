import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei';
import Particles from './Particles';
import Lighting from './Lighting';
import FloatingObjects from './FloatingObjects';
import WaveEffect from './WaveEffect';

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        gl={{ 
          alpha: false,
          antialias: true,
          powerPreference: "high-performance"
        }}
        style={{ background: '#000000' }}
        camera={{ position: [0, 0, 10], fov: 75 }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 5, 15]} />
        
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        <Stars 
          radius={50}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        <Lighting />
        <Particles />
        <FloatingObjects />
        <WaveEffect />
      </Canvas>
    </div>
  );
}