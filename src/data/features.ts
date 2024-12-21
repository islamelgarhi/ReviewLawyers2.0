export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export const features: Feature[] = [
  {
    id: '1',
    title: 'AI-Powered Review Analysis',
    description: 'Advanced algorithms detect potentially removable reviews based on platform policies.',
    icon: 'brain',
    benefits: [
      'Automatic policy violation detection',
      'Sentiment analysis',
      'Pattern recognition',
      'Priority scoring'
    ]
  },
  {
    id: '2',
    title: 'Legal-Style Documentation',
    description: 'Professional documentation preparation for review disputes.',
    icon: 'file-text',
    benefits: [
      'Evidence compilation',
      'Policy citation',
      'Case building',
      'Success tracking'
    ]
  }
];