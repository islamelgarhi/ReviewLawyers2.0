import React from 'react';
import { MessageSquare, Trash2, AlertCircle } from 'lucide-react';

export default function ReviewList() {
  return (
    <div className="w-full bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm">
          <div className="p-8 space-y-8">
            <h2 className="text-3xl font-bold text-white">
              Review Removal Requests
            </h2>
            
            <div className="space-y-6">
              <ReviewItem
                platform="Airbnb"
                status="Pending Review"
                content="The location was good but the cleanliness wasn't up to our standards..."
                author="Sarah M."
                date="2024-03-15"
              />
              
              <ReviewItem
                platform="VRBO"
                status="In Progress"
                content="Host was unresponsive and the amenities listed were not available..."
                author="Michael R."
                date="2024-03-14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewItem({ platform, status, content, author, date }) {
  return (
    <div className="bg-black/50 rounded-xl p-6 space-y-4 border border-gray-800/50 hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-white">{platform}</span>
            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
              {status}
            </span>
          </div>
          
          <p className="text-gray-300">
            {content}
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">by {author}</span>
            <span className="text-sm text-gray-400">{date}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
            <MessageSquare className="h-5 w-5" />
          </button>
          <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-800">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-primary" />
            <span className="text-sm text-gray-300">
              AI Analysis: High probability of policy violation
            </span>
          </div>
          <button className="px-4 py-2 text-sm bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors">
            Request Removal
          </button>
        </div>
      </div>
    </div>
  );
}