export function formatPercentage(value: number): string {
  if (typeof value !== 'number' || isNaN(value)) return '0.0';
  return value.toFixed(1);
}

export function calculatePercentageChange(current: number, previous: number): number {
  if (!previous || !current || isNaN(previous) || isNaN(current)) return 0;
  return ((current - previous) / previous) * 100;
}