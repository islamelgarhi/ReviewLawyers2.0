import React from 'react';
import { Star, Flag, MessageSquare } from 'lucide-react';
import { ReviewStats } from '../types';

interface StatsCardProps {
  stats: ReviewStats;
}

export default function StatsCard({ stats }: StatsCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Reviews</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.total}</p>
          </div>
          <MessageSquare className="w-10 h-10 text-blue-500" />
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Average Rating</p>
            <div className="flex items-center mt-2">
              <span className="text-3xl font-bold text-gray-900 mr-2">{stats.averageRating}</span>
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
          <Star className="w-10 h-10 text-yellow-400" />
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Reported Reviews</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stats.reported}</p>
          </div>
          <Flag className="w-10 h-10 text-red-500" />
        </div>
      </div>
    </div>
  );
}