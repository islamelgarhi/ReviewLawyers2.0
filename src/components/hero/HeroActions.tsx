import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeroActionsProps {
  onFreeTrial: () => void;
  onWatchDemo: () => void;
}

export function HeroActions({ onFreeTrial, onWatchDemo }: HeroActionsProps) {
  return (
    <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
      <Button onClick={onFreeTrial} className="group">
        Start Free Trial
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
      
      <Button variant="secondary" onClick={onWatchDemo} className="group">
        <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
        Watch Demo
      </Button>
    </div>
  );
}