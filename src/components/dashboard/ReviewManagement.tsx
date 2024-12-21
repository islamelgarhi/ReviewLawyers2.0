import React from 'react';
import { ReviewCard } from './ReviewCard';
import { useReviews } from '@/hooks/useReviews';

export function ReviewManagement() {
  const { reviews, isLoading } = useReviews();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-black dark:text-white">Active Cases</h2>
        <button className="text-primary hover:text-primary/80">View All</button>
      </div>
      
      {isLoading ? (
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-100 dark:bg-gray-700 rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {reviews?.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}