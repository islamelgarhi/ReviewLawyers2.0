export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Handle Negative Reviews Professionally',
    excerpt: 'Learn the best practices for responding to negative reviews and turning them into opportunities.',
    date: '2024-03-15',
    author: 'Sarah Johnson',
    category: 'Best Practices',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
  },
  {
    id: '2',
    title: 'The Impact of Reviews on Booking Rates',
    excerpt: 'Understanding how online reviews directly affect your property\'s booking performance.',
    date: '2024-03-12',
    author: 'Michael Chen',
    category: 'Research',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  }
];