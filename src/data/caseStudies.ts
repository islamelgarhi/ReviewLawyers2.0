export interface CaseStudy {
  id: string;
  title: string;
  business: string;
  category: 'rental' | 'restaurant';
  challenge: string;
  solution: string;
  result: string;
  metrics: {
    ratingImprovement: number;
    reviewsRemoved: number;
    responseRate: number;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Recovering from a Review Crisis',
    business: 'Oceanview Villa Rentals',
    category: 'rental',
    challenge: 'Faced a series of negative reviews due to temporary maintenance issues.',
    solution: 'Implemented systematic review response strategy and expedited maintenance resolution.',
    result: 'Successfully removed 8 unfair reviews and improved overall rating.',
    metrics: {
      ratingImprovement: 1.2,
      reviewsRemoved: 8,
      responseRate: 98
    }
  },
  {
    id: '2',
    title: 'Restaurant Rating Transformation',
    business: 'La Cucina Italiana',
    category: 'restaurant',
    challenge: 'Struggling with competitor fake reviews affecting business.',
    solution: 'Identified and reported fraudulent reviews with evidence.',
    result: 'Removed all fake reviews and established review verification process.',
    metrics: {
      ratingImprovement: 0.8,
      reviewsRemoved: 12,
      responseRate: 95
    }
  }
];