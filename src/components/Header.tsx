import React from 'react';
import { Building2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex items-center space-x-3">
          <Building2 className="w-10 h-10 text-blue-500" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">ReviewPro</h1>
            <p className="text-sm text-gray-600">Property Review Management</p>
          </div>
        </div>
      </div>
    </header>
  );
}