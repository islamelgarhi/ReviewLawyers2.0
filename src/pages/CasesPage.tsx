import React from 'react';
import { FileText, TrendingUp, Star, MessageSquare } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

export default function CasesPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-black/80 dark:text-white/80 max-w-3xl mx-auto">
            Real success stories of businesses we've helped protect and improve.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                  {study.category}
                </span>
                <h3 className="text-xl font-bold text-black dark:text-white">{study.business}</h3>
              </div>
              
              <h4 className="text-2xl font-bold text-black dark:text-white mb-6">{study.title}</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-black dark:text-white mb-2">Challenge</h5>
                  <p className="text-gray-600 dark:text-gray-400">{study.challenge}</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-black dark:text-white mb-2">Solution</h5>
                  <p className="text-gray-600 dark:text-gray-400">{study.solution}</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-black dark:text-white mb-2">Results</h5>
                  <p className="text-gray-600 dark:text-gray-400">{study.result}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <Star className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Rating Improved</p>
                    <p className="text-lg font-bold text-black dark:text-white">+{study.metrics.ratingImprovement}</p>
                  </div>
                  <div className="text-center">
                    <MessageSquare className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Reviews Removed</p>
                    <p className="text-lg font-bold text-black dark:text-white">{study.metrics.reviewsRemoved}</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Response Rate</p>
                    <p className="text-lg font-bold text-black dark:text-white">{study.metrics.responseRate}%</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}