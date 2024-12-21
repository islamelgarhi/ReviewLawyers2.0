export interface ChartDataPoint {
  date: string;
  total: number;
  positive: number;
  negative: number;
  removed: number;
}

export const rentalChartData: ChartDataPoint[] = [
  { 
    date: 'Jan',
    total: 45,
    positive: 38,
    negative: 7,
    removed: 2
  },
  { 
    date: 'Feb',
    total: 52,
    positive: 43,
    negative: 9,
    removed: 4
  },
  { 
    date: 'Mar',
    total: 48,
    positive: 40,
    negative: 8,
    removed: 3
  },
  { 
    date: 'Apr',
    total: 58,
    positive: 49,
    negative: 9,
    removed: 5
  },
  { 
    date: 'May',
    total: 62,
    positive: 53,
    negative: 9,
    removed: 4
  },
  { 
    date: 'Jun',
    total: 55,
    positive: 47,
    negative: 8,
    removed: 3
  }
];

export const restaurantChartData: ChartDataPoint[] = [
  { 
    date: 'Jan',
    total: 65,
    positive: 52,
    negative: 13,
    removed: 4
  },
  { 
    date: 'Feb',
    total: 72,
    positive: 58,
    negative: 14,
    removed: 6
  },
  { 
    date: 'Mar',
    total: 68,
    positive: 54,
    negative: 14,
    removed: 5
  },
  { 
    date: 'Apr',
    total: 78,
    positive: 64,
    negative: 14,
    removed: 7
  },
  { 
    date: 'May',
    total: 82,
    positive: 69,
    negative: 13,
    removed: 6
  },
  { 
    date: 'Jun',
    total: 75,
    positive: 63,
    negative: 12,
    removed: 5
  }
];