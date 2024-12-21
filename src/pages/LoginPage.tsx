import React from 'react';
import { LogIn } from 'lucide-react';
import { LoginForm } from '../components/auth/LoginForm';

export default function LoginPage() {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-xl bg-primary/10 mb-4">
            <LogIn className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-black dark:text-white">Welcome Back</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Demo credentials: demo@example.com / demo123
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}