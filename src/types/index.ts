export interface Review {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
  reported: boolean;
}

export interface ReportReason {
  id: string;
  label: string;
  description: string;
}

export interface ReviewStats {
  total: number;
  reported: number;
  averageRating: number;
}