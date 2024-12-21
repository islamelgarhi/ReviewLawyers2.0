export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  platform: string;
}

export const rentalReviews: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 4,
    date: '2024-03-15',
    content: 'Great location and beautiful space. Very clean and comfortable.',
    platform: 'Airbnb'
  },
  {
    id: '2',
    author: 'John D.',
    rating: 3,
    date: '2024-03-14',
    content: 'Nice place but had some issues with the wifi.',
    platform: 'VRBO'
  },
  {
    id: '3',
    author: 'Mike R.',
    rating: 5,
    date: '2024-03-13',
    content: 'Perfect stay! Everything was exactly as described.',
    platform: 'Booking.com'
  }
];

export const restaurantReviews: Review[] = [
  {
    id: '1',
    author: 'Emily S.',
    rating: 5,
    date: '2024-03-15',
    content: 'Amazing food and excellent service! Will definitely come back.',
    platform: 'Yelp'
  },
  {
    id: '2',
    author: 'David L.',
    rating: 4,
    date: '2024-03-14',
    content: 'Great atmosphere and delicious dishes. Slightly long wait times.',
    platform: 'Google'
  },
  {
    id: '3',
    author: 'Lisa M.',
    rating: 5,
    date: '2024-03-13',
    content: 'The best Italian restaurant in town! Authentic flavors.',
    platform: 'TripAdvisor'
  }
];