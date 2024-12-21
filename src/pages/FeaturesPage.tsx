import React from 'react';
import { Layers, Brain, FileText, Scale, Building2, Star, MessageSquare } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced algorithms detect policy violations and analyze review content for optimal defense strategies.',
      benefits: [
        'Automatic policy violation detection',
        'Sentiment analysis',
        'Pattern recognition',
        'Priority scoring'
      ]
    },
    {
      icon: FileText,
      title: 'Legal-Style Documentation',
      description: 'Professional documentation preparation for review disputes with comprehensive evidence packages.',
      benefits: [
        'Evidence compilation',
        'Policy citation',
        'Case building',
        'Success tracking'
      ]
    },
    {
      icon: Scale,
      title: 'Platform Policy Expertise',
      description: 'Deep understanding of platform policies to build strong cases for review removal or modification.',
      benefits: [
        'Policy analysis',
        'Compliance verification',
        'Strategic approach',
        'Platform-specific tactics'
      ]
    },
    {
      icon: Building2,
      title: 'Multi-Platform Support',
      description: 'Expert representation across all major booking and review platforms.',
      benefits: [
        'Airbnb integration',
        'VRBO support',
        'Google Reviews handling',
        'Yelp management'
      ]
    },
    {
      icon: Star,
      title: 'Rating Protection',
      description: 'Strategic defense of your ratings with platform-specific approaches and documentation.',
      benefits: [
        'Rating monitoring',
        'Impact assessment',
        'Proactive defense',
        'Recovery strategies'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Professional Advocacy',
      description: 'Our team presents your case to platform review teams with professional, legal-style documentation.',
      benefits: [
        'Expert communication',
        'Case presentation',
        'Follow-up management',
        'Resolution tracking'
      ]
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Layers className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Features
          </h1>
          <p className="text-xl text-black/80 dark:text-white/80 max-w-3xl mx-auto">
            Discover our comprehensive suite of review management tools.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-colors"
              >
                <Icon className="h-12 w-12 text-primary mb-6" />
                
                <h2 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h2>
                
                <p className="text-gray-400 mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-400">
                      <div className="h-2 w-2 bg-primary rounded-full mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}