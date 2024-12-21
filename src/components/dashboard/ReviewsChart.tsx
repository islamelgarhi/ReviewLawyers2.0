import React from 'react';
import { ChartStats } from './chart/ChartStats';
import { calculatePercentageChange } from '@/utils/numbers';
import type { ChartDataPoint } from '@/types/chart';

interface ReviewsChartProps {
  data: ChartDataPoint[];
}

export function ReviewsChart({ data }: ReviewsChartProps) {
  const latestMonth = data[data.length - 1];
  const previousMonth = data[data.length - 2];
  
  const monthlyChange = {
    total: calculatePercentageChange(latestMonth.total, previousMonth.total),
    positive: calculatePercentageChange(latestMonth.positive, previousMonth.positive),
    negative: calculatePercentageChange(latestMonth.negative, previousMonth.negative),
    removed: calculatePercentageChange(latestMonth.removed, previousMonth.removed)
  };

  const maxValue = Math.max(...data.map(d => Math.max(d.total, d.positive, d.negative, d.removed)));
  const getHeight = (value: number) => `${((value || 0) / maxValue) * 100}%`;

  return (
    <div className="space-y-6">
      <ChartStats monthlyChange={monthlyChange} latestData={latestMonth} />

      {/* Chart */}
      <div className="h-[300px]">
        <div className="flex h-full">
          <div className="flex flex-col justify-between pr-4 text-sm text-gray-400">
            {[...Array(6)].map((_, i) => (
              <span key={i}>{Math.round((maxValue / 5) * (5 - i))}</span>
            ))}
          </div>

          <div className="flex-1 flex items-end space-x-4">
            {data.map((item, index) => (
              <div key={index} className="flex-1 group">
                <div className="relative h-full flex flex-col justify-end space-y-1">
                  <div className="relative">
                    <div
                      className="w-full bg-primary/20 rounded-t transition-all duration-300"
                      style={{ height: getHeight(item.total) }}
                    >
                      <div
                        className="absolute bottom-0 w-full bg-primary rounded-t transition-all duration-300 group-hover:opacity-80"
                        style={{ height: '100%' }}
                      />
                    </div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Total: {item.total}
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-400">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-8">
        <ChartLegendItem color="bg-primary" label="Total Reviews" />
        <ChartLegendItem color="bg-green-500" label="Positive" />
        <ChartLegendItem color="bg-red-500" label="Negative" />
        <ChartLegendItem color="bg-yellow-500" label="Removed" />
      </div>
    </div>
  );
}

function ChartLegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 ${color} rounded`} />
      <span className="text-sm text-gray-400">{label}</span>
    </div>
  );
}