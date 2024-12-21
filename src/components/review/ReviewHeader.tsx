import React from 'react';
import type { Review } from '@/types';

interface ReviewHeaderProps {
  review: Review;
}

export function ReviewHeader({ review }: ReviewHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-black dark:text-white">
        {review.platform}
      </span>
      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
        {review.status}
      </span>
      <div className="ml-auto text-sm text-black/60 dark:text-white/60">
        by {review.author} • {review.date}
      </div>
    </div>
  );
}