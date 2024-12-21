import React from 'react';
import { Star, Flag, Trash2 } from 'lucide-react';
import { Review } from '../types';

interface ReviewCardProps {
  review: Review;
  onReport: (review: Review) => void;
  onDelete: (review: Review) => void;
}

export default function ReviewCard({ review, onReport, onDelete }: ReviewCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 ${review.reported ? 'border-l-4 border-l-yellow-400' : ''}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{review.author}</h3>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  index < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">{review.content}</p>
      
      <div className="flex justify-end gap-3">
        <button
          onClick={() => onReport(review)}
          disabled={review.reported}
          className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            review.reported
              ? 'bg-yellow-50 text-yellow-700 cursor-not-allowed'
              : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
          }`}
        >
          <Flag className="w-4 h-4 mr-2" />
          {review.reported ? 'Reported' : 'Report'}
        </button>
        
        <button
          onClick={() => onDelete(review)}
          className="flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-red-50 hover:bg-red-100 text-red-700 transition-colors"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Remove
        </button>
      </div>
    </div>
  );
}