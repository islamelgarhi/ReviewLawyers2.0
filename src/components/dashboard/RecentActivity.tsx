import React from 'react';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'case_opened',
      platform: 'Airbnb',
      time: '2 hours ago',
      status: 'pending',
      message: 'New review case opened'
    },
    {
      id: 2,
      type: 'case_resolved',
      platform: 'Google',
      time: '5 hours ago',
      status: 'success',
      message: 'Review successfully removed'
    },
    {
      id: 3,
      type: 'alert',
      platform: 'Yelp',
      time: '1 day ago',
      status: 'warning',
      message: 'New negative review detected'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'case_opened':
        return <Shield className="h-5 w-5 text-primary" />;
      case 'case_resolved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'alert':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-bold text-black dark:text-white mb-6">Recent Activity</h2>
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4">
            {getIcon(activity.type)}
            <div>
              <p className="text-black dark:text-white font-medium">{activity.message}</p>
              <div className="flex items-center space-x-2 mt-1 text-sm text-gray-500">
                <span>{activity.platform}</span>
                <span>•</span>
                <span>{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}