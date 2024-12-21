import React from 'react';
import { Star, AlertTriangle, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { DashboardCard } from '../dashboard/DashboardCard';
import { ReviewCard } from '../dashboard/ReviewCard';
import { Link } from 'react-router-dom';

export function HeroDashboard() {
  const mockReview = {
    id: '1',
    author: 'Sarah M.',
    content: 'The location was good but the cleanliness wasn\'t up to our standards...',
    rating: 3,
    date: '2024-03-15',
    platform: 'Airbnb',
    status: 'In Progress'
  };

  return (
    <div className="mt-24 perspective-1000 animate-fade-in-up delay-300">
      {/* Glass Dashboard Container */}
      <div className="relative">
        {/* Glow Effects */}
        <div className="absolute -inset-1 bg-primary/20 rounded-3xl blur-lg" />
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-3xl blur-xl opacity-50" />
        
        {/* Main Dashboard Content */}
        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Live Dashboard</h2>
            <Link 
              to="/dashboard"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              View Full Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <DashboardCard
              title="Overall Rating"
              value="4.8"
              icon={Star}
              trend={{ value: 12, isPositive: true }}
              className="bg-white/5 border-white/10 hover:border-primary/50"
            />
            <DashboardCard
              title="Active Reviews"
              value="1,284"
              icon={Users}
              trend={{ value: 8, isPositive: true }}
              className="bg-white/5 border-white/10 hover:border-primary/50"
            />
            <DashboardCard
              title="Pending Cases"
              value="5"
              icon={AlertTriangle}
              trend={{ value: 2, isPositive: false }}
              className="bg-white/5 border-white/10 hover:border-primary/50"
            />
            <DashboardCard
              title="Success Rate"
              value="92%"
              icon={TrendingUp}
              trend={{ value: 5, isPositive: true }}
              className="bg-white/5 border-white/10 hover:border-primary/50"
            />
          </div>

          {/* Active Case Preview */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Latest Active Case</h3>
                <p className="text-sm text-gray-400">Monitoring and responding in real-time</p>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                Live
              </span>
            </div>
            <ReviewCard 
              review={mockReview}
              className="bg-black/50 border border-white/10 hover:border-primary/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}