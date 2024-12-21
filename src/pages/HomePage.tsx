import React from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Timeline from '../components/Timeline';
import ReviewList from '../components/ReviewList';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Partners />
      <Timeline />
      <ReviewList />
    </main>
  );
}