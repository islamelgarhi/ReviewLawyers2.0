import { Review, ReportReason } from '../types';

export const mockReviews: Review[] = [
  {
    id: '1',
    author: 'John Smith',
    content: 'Great location and beautiful space. Highly recommended!',
    rating: 5,
    date: '2024-02-15',
    reported: false
  },
  {
    id: '2',
    author: 'Emma Wilson',
    content: 'The place was clean but the neighbors were quite noisy.',
    rating: 3,
    date: '2024-02-10',
    reported: false
  },
  {
    id: '3',
    author: 'Michael Brown',
    content: 'Perfect stay! Everything was as described.',
    rating: 5,
    date: '2024-02-05',
    reported: false
  }
];

export const reportReasons: ReportReason[] = [
  {
    id: 'inappropriate',
    label: 'Inappropriate Content',
    description: 'Review contains offensive, discriminatory, or inappropriate content'
  },
  {
    id: 'fake',
    label: 'Fake Review',
    description: 'Review appears to be fraudulent or written by someone who did not stay'
  },
  {
    id: 'personal',
    label: 'Personal Information',
    description: 'Review contains personal or identifying information'
  },
  {
    id: 'irrelevant',
    label: 'Irrelevant Content',
    description: 'Review is not related to the stay or property'
  }
];