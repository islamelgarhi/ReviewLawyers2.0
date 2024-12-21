import React, { useState } from 'react';
import { Shield, FileText, Scale, MessageSquare, CheckCircle } from 'lucide-react';
import TimelineScene from './three/TimelineScene';

export default function Timeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Shield,
      title: 'Case Initiation',
      description: 'We receive and analyze your review case, identifying potential policy violations and grounds for removal.',
      color: '#17D9FF'
    },
    {
      icon: FileText,
      title: 'Evidence Collection',
      description: 'Our team gathers comprehensive documentation and evidence to support your case.',
      color: '#4CAF50'
    },
    {
      icon: Scale,
      title: 'Legal Analysis',
      description: 'Expert review of platform policies and preparation of legal-style documentation.',
      color: '#FF9800'
    },
    {
      icon: MessageSquare,
      title: 'Platform Engagement',
      description: 'Professional presentation of your case to platform review teams.',
      color: '#9C27B0'
    },
    {
      icon: CheckCircle,
      title: 'Case Resolution',
      description: 'Successful removal or modification of the review, with follow-up monitoring.',
      color: '#2196F3'
    }
  ];

  return (
    <div className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-400">
            Professional review defense, step by step
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Timeline Scene */}
          <div className="h-[600px] relative">
            <TimelineScene activeStep={activeStep} />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'scale-105' : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-900/50 border border-gray-800 group-hover:border-primary/50">
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon
                      className="w-6 h-6"
                      style={{ color: step.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}