import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({ title, value, icon: Icon, trend, className }: StatCardProps) {
  return (
    <div 
      className={cn(
        "relative group p-6 rounded-xl border transition-all duration-300",
        "hover:shadow-lg hover:scale-105 hover:border-primary",
        "bg-white/5 backdrop-blur-sm border-white/10",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-primary/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
      
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">{title}</p>
          <p className="text-2xl font-bold text-white mt-2 group-hover:text-primary transition-colors">
            {value}
          </p>
          {trend && (
            <p className={cn(
              "text-sm mt-2 flex items-center gap-1 transition-colors",
              trend.isPositive ? "text-green-400 group-hover:text-green-300" : "text-red-400 group-hover:text-red-300"
            )}>
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
            </p>
          )}
        </div>
        <Icon className="w-12 h-12 text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
      </div>
    </div>
  );
}