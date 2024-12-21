import React from 'react';
import { BookOpen, Clock, User } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Blog & Resources
          </h1>
          <p className="text-xl text-black/80 dark:text-white/80 max-w-3xl mx-auto">
            Expert insights and strategies for managing your online reputation.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime} min read
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-black dark:text-white mb-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
                  </div>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}