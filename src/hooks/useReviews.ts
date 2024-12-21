import { useState, useEffect } from 'react';
import type { Review } from '../types';

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        // Replace with actual API call
        const mockReviews = [
          {
            id: '1',
            author: 'Sarah M.',
            content: 'The location was good but the cleanliness wasn\'t up to our standards...',
            rating: 3,
            date: '2024-03-15',
            platform: 'Airbnb',
            status: 'In Progress'
          },
          {
            id: '2',
            author: 'Michael R.',
            content: 'Host was unresponsive and the amenities listed were not available...',
            rating: 2,
            date: '2024-03-14',
            platform: 'VRBO',
            status: 'Under Review'
          }
        ];
        setReviews(mockReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, isLoading };
}