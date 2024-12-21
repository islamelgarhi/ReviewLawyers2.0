import React from 'react';
import { ReviewsChart } from './ReviewsChart';

interface AnalyticsOverviewProps {
  className?: string;
}

export function AnalyticsOverview({ className }: AnalyticsOverviewProps) {
  const data = [
    { date: 'Jan', count: 45 },
    { date: 'Feb', count: 52 },
    { date: 'Mar', count: 48 },
    { date: 'Apr', count: 58 },
    { date: 'May', count: 62 },
    { date: 'Jun', count: 55 }
  ];

  return (
    <div className={className}>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-black dark:text-white mb-6">Review Trends</h2>
        <ReviewsChart data={data} />
      </div>
    </div>
  );
}