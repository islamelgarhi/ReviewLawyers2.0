import React from 'react';
import { MessageSquare, Trash2 } from 'lucide-react';

export default function ReviewTable() {
  return (
    <div className="bg-[#1A1D26] rounded-xl p-6">
      <h3 className="text-lg font-medium mb-6">Review Removal Requests</h3>
      
      <div className="space-y-4">
        <div className="flex items-start justify-between p-4 rounded-lg bg-[#0F1117]">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded text-sm">
              Airbnb
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-1">
                The location was good but the cleanliness wasn't up to our standards...
              </p>
              <p className="text-xs text-gray-500">
                by Sarah M • 2024-03-15
              </p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <MessageSquare className="w-4 h-4 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Trash2 className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}