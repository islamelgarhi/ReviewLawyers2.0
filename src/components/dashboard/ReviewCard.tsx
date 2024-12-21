import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ReviewCardProps {
  review: {
    author: string;
    rating: number;
    date: string;
    content: string;
    platform: string;
  };
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            {review.platform}
          </span>
          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            {review.date}
          </span>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4 transition-all",
                i < review.rating 
                  ? "text-yellow-400 group-hover:text-yellow-300 group-hover:scale-110" 
                  : "text-gray-600"
              )}
              fill={i < review.rating ? "currentColor" : "none"}
            />
          ))}
        </div>
      </div>
      
      <h3 className="font-medium text-white mb-2 group-hover:text-primary transition-colors">
        {review.author}
      </h3>
      
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
        {review.content}
      </p>
    </div>
  );
}