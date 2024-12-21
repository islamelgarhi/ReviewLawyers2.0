import React from 'react';
import { DashboardStats } from '../components/dashboard/DashboardStats';
import { ReviewManagement } from '../components/dashboard/ReviewManagement';
import { AnalyticsOverview } from '../components/dashboard/AnalyticsOverview';
import { RecentActivity } from '../components/dashboard/RecentActivity';

export default function DashboardPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-8">Dashboard</h1>
        <DashboardStats />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <ReviewManagement />
            <AnalyticsOverview className="mt-8" />
          </div>
          <RecentActivity />
        </div>
      </div>
    </main>
  );
}