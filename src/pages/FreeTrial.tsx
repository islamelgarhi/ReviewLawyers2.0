import React from 'react';
import { Rocket } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function FreeTrial() {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Rocket className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Start Your Free Trial
          </h1>
          <p className="text-xl text-black/80 dark:text-white/80">
            Experience the power of professional review management risk-free.
          </p>
        </div>
        
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-black dark:text-white mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-black dark:text-white mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
              Business Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-black dark:text-white mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
            />
          </div>
          
          <Button type="submit" fullWidth>
            Start Free Trial
          </Button>
          
          <p className="text-sm text-center text-black/60 dark:text-white/60">
            No credit card required. 14-day free trial.
          </p>
        </form>
      </div>
    </main>
  );
}