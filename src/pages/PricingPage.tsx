import React from 'react';
import { CreditCard, Check } from 'lucide-react';
import { pricingPlans } from '../data/pricing';
import { Button } from '../components/ui/Button';

export default function PricingPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <CreditCard className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Pricing Plans
          </h1>
          <p className="text-xl text-black/80 dark:text-white/80 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 text-sm rounded-full bg-primary text-black font-medium">
                  Most Popular
                </span>
              )}
              
              <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
                {plan.name}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-black dark:text-white">${plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                fullWidth
                variant={plan.popular ? 'primary' : 'secondary'}
              >
                {plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}