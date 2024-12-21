import React from 'react';
import { TrendingUp, TrendingDown, Star, AlertTriangle, CheckCircle } from 'lucide-react';
import { formatPercentage } from '@/utils/numbers';
import type { MonthlyChange } from '@/types/chart';

interface ChartStatsProps {
  monthlyChange: MonthlyChange;
  latestData: {
    total: number;
    positive: number;
    negative: number;
    removed: number;
  };
}

export function ChartStats({ monthlyChange, latestData }: ChartStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard
        icon={Star}
        iconColor="text-yellow-400"
        label="Total Reviews"
        value={latestData.total}
        change={monthlyChange.total}
      />
      <StatCard
        icon={CheckCircle}
        iconColor="text-green-400"
        label="Positive Reviews"
        value={latestData.positive}
        change={monthlyChange.positive}
      />
      <StatCard
        icon={AlertTriangle}
        iconColor="text-red-400"
        label="Negative Reviews"
        value={latestData.negative}
        change={monthlyChange.negative}
        invertTrend
      />
      <StatCard
        icon={CheckCircle}
        iconColor="text-primary"
        label="Reviews Removed"
        value={latestData.removed}
        change={monthlyChange.removed}
      />
    </div>
  );
}

interface StatCardProps {
  icon: typeof Star;
  iconColor: string;
  label: string;
  value: number;
  change: number;
  invertTrend?: boolean;
}

function StatCard({ icon: Icon, iconColor, label, value, change, invertTrend }: StatCardProps) {
  const isPositive = invertTrend ? change <= 0 : change >= 0;
  
  return (
    <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
      <div className="flex items-center justify-between">
        <Icon className={`w-5 h-5 ${iconColor}`} />
        <span className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {formatPercentage(Math.abs(change))}%
        </span>
      </div>
      <p className="mt-2 text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}