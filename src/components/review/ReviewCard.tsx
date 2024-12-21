import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { ReviewActions } from './ReviewActions';
import { ReviewHeader } from './ReviewHeader';
import type { Review } from '@/types';

interface ReviewCardProps {
  review: Review;
  onReport: (review: Review) => void;
  onDelete: (review: Review) => void;
}

export function ReviewCard({ review, onReport, onDelete }: ReviewCardProps) {
  return (
    <div className="bg-black/5 dark:bg-white/5 rounded-xl p-6">
      <ReviewHeader review={review} />
      
      <p className="mt-3 text-black/80 dark:text-white/80">
        {review.content}
      </p>
      
      <ReviewActions review={review} onReport={onReport} onDelete={onDelete} />
      
      <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-primary" />
            <span className="text-sm text-black/80 dark:text-white/80">
              AI Analysis: High probability of policy violation
            </span>
          </div>
          <Button variant="primary" className="text-sm px-4 py-2">
            Request Removal
          </Button>
        </div>
      </div>
    </div>
  );
}