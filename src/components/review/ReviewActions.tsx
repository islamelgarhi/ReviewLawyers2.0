import React from 'react';
import { MessageSquare, Trash2 } from 'lucide-react';
import { IconButton } from '../ui/IconButton';
import type { Review } from '@/types';

interface ReviewActionsProps {
  review: Review;
  onReport: (review: Review) => void;
  onDelete: (review: Review) => void;
}

export function ReviewActions({ review, onReport, onDelete }: ReviewActionsProps) {
  return (
    <div className="flex gap-2 mt-4">
      <IconButton
        icon={<MessageSquare className="h-5 w-5" />}
        onClick={() => onReport(review)}
        className="text-primary"
      />
      <IconButton
        icon={<Trash2 className="h-5 w-5" />}
        onClick={() => onDelete(review)}
        className="text-primary"
      />
    </div>
  );
}