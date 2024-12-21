import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoModal } from './VideoModal';
import { HeroContent } from './hero/HeroContent';
import { HeroActions } from './hero/HeroActions';
import { HeroDashboard } from './hero/HeroDashboard';
import Scene from './three/Scene';

export default function Hero() {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleFreeTrial = () => {
    navigate('/free-trial');
  };

  const handleWatchDemo = () => {
    setIsVideoOpen(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Scene Background */}
      <Scene />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <HeroContent />
        <HeroActions 
          onFreeTrial={handleFreeTrial} 
          onWatchDemo={handleWatchDemo} 
        />
        <HeroDashboard />
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
      />
    </div>
  );
}