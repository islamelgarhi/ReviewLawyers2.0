import React from 'react';
import { Utensils, Star, AlertTriangle, TrendingUp, Users, MessageSquare, Shield, Clock } from 'lucide-react';
import { StatCard } from '../components/dashboard/StatCard';
import { ReviewCard } from '../components/dashboard/ReviewCard';
import { ReviewsChart } from '../components/dashboard/ReviewsChart';
import { InsightCard } from '../components/dashboard/InsightCard';
import { restaurantChartData } from '../data/chartData';
import { restaurantReviews } from '../data/reviewData';

export default function RestaurantsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Average Rating"
            value="4.6"
            icon={Star}
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="Total Reviews"
            value="2,547"
            icon={Users}
            trend={{ value: 15, isPositive: true }}
          />
          <StatCard
            title="Review Alerts"
            value="5"
            icon={AlertTriangle}
            trend={{ value: 3, isPositive: false }}
          />
          <StatCard
            title="Response Rate"
            value="95%"
            icon={TrendingUp}
            trend={{ value: 4, isPositive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300">
              <h2 className="text-xl font-bold text-white mb-6 group-hover:text-primary transition-colors">
                Review Trends
              </h2>
              <ReviewsChart data={restaurantChartData} />
            </div>
          </div>
          
          <div className="space-y-6">
            <InsightCard
              icon={Shield}
              title="Review Protection"
              value="95%"
              description="Success rate in review removal requests this month"
            />
            <InsightCard
              icon={Clock}
              title="Response Time"
              value="1.8h"
              description="Average time to respond to new reviews"
            />
            <InsightCard
              icon={MessageSquare}
              title="Active Cases"
              value="7"
              description="Review disputes currently in progress"
            />
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Recent Reviews</h3>
              <div className="space-y-4">
                {restaurantReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}