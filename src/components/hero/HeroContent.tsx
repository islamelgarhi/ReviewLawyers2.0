import React from 'react';
import { Scale, Shield, Star, Zap } from 'lucide-react';

export function HeroContent() {
  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Defense',
      description: 'Advanced algorithms detect policy violations'
    },
    {
      icon: Star,
      title: '92% Success Rate',
      description: 'Proven track record of review removals'
    },
    {
      icon: Zap,
      title: 'Instant Response',
      description: '24/7 monitoring and rapid case initiation'
    }
  ];

  return (
    <div className="text-center space-y-16">
      {/* Logo Animation */}
      <div className="flex items-center justify-center animate-fade-in pt-8">
        <div className="relative">
          <Scale className="h-16 w-16 text-primary animate-pulse" />
          <div className="absolute inset-0 h-16 w-16 border-2 border-primary rounded-full animate-ping opacity-20" />
        </div>
      </div>
      
      {/* Main Heading */}
      <div className="space-y-6 animate-fade-in-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white tracking-tight">
          Professional
          <span className="block text-primary">Review Defense</span>
        </h1>
        
        <p className="text-xl text-black/80 dark:text-white/80 max-w-3xl mx-auto">
          We handle each review case with the precision of a legal team, protecting 
          your business reputation with a methodical, evidence-based approach.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-100">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 group hover:border-primary/50 transition-colors"
          >
            <div className="flex flex-col items-center">
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="flex items-center justify-center gap-12 text-sm text-gray-400 animate-fade-in-up delay-200">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-primary" />
          <span>SOC 2 Certified</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-primary" />
          <span>4.9/5 Customer Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-primary" />
          <span>10,000+ Cases Handled</span>
        </div>
      </div>
    </div>
  );
}