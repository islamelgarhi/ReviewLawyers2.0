import React from 'react';
import { Scale, FileText, Shield, Building2, Star, MessageSquare } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Scale,
      title: 'Case-by-Case Advocacy',
      description: 'Each review is treated as a unique case, with our experts building detailed arguments for removal or modification.'
    },
    {
      icon: FileText,
      title: 'Evidence-Based Defense',
      description: 'We compile comprehensive evidence packages to support each case, just like a legal defense.'
    },
    {
      icon: Shield,
      title: 'Platform Policy Expertise',
      description: 'Deep understanding of platform policies to build strong cases for review removal or modification.'
    },
    {
      icon: Building2,
      title: 'Multi-Platform Support',
      description: 'Expert representation across Airbnb, VRBO, Booking.com, Yelp, and Google Reviews.'
    },
    {
      icon: Star,
      title: 'Rating Protection',
      description: 'Strategic defense of your ratings with platform-specific approaches and documentation.'
    },
    {
      icon: MessageSquare,
      title: 'Professional Advocacy',
      description: 'Our team presents your case to platform review teams with professional, legal-style documentation.'
    }
  ];

  return (
    <div id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Professional Review Defense
          </h2>
          <p className="text-lg text-gray-400">
            We approach each case with the thoroughness of a legal team
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative group bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity" />
              <feature.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}