export interface ChartDataPoint {
  date: string;
  total: number;
  positive: number;
  negative: number;
  removed: number;
}

export interface MonthlyChange {
  total: number;
  positive: number;
  negative: number;
  removed: number;
}