import { Review } from '../types';

export const calculateReviewStats = (reviews: Review[]) => {
  const total = reviews.length;
  const reported = reviews.filter(r => r.reported).length;
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / total;

  return {
    total,
    reported,
    averageRating: Number(averageRating.toFixed(1))
  };
};