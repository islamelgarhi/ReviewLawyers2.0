import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

interface InsightCardProps {
  title: string;
  value?: string | number;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function InsightCard({ title, value, description, icon: Icon, className }: InsightCardProps) {
  return (
    <div className={cn(
      "group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10",
      "hover:border-primary/50 transition-all duration-300",
      className
    )}>
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium text-white group-hover:text-primary transition-colors">
            {title}
          </h3>
          {value && (
            <p className="text-2xl font-bold text-white mt-1 group-hover:text-primary transition-colors">
              {value}
            </p>
          )}
          <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}