import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  platform: string;
}

interface RecentReviewsProps {
  reviews: Review[];
}

export function RecentReviews({ reviews }: RecentReviewsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Recent Reviews</h3>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-black dark:text-white">{review.author}</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                  {review.platform}
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{review.content}</p>
            <p className="mt-1 text-xs text-gray-500">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}