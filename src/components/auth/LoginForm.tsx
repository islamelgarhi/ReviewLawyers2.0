import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Loader } from 'lucide-react';
import { Button } from '../ui/Button';
import { InputField } from './InputField';
import { GoogleSignInButton } from './GoogleSignInButton';
import { useAuth } from '@/contexts/AuthContext';
import { handleAuthError } from '@/utils/auth';

export function LoginForm() {
  const navigate = useNavigate();
  const { signInWithEmail, signInWithGoogle, signInWithRedirect } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await signInWithEmail(formData.email, formData.password);
      navigate('/dashboard');
    } catch (err) {
      const errorMessage = handleAuthError(err);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError('');

    try {
      // First try popup
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (err: any) {
      // If popup blocked, fallback to redirect
      if (err?.code === 'auth/popup-blocked') {
        setError('Popup was blocked. Trying redirect sign-in...');
        try {
          await signInWithRedirect();
        } catch (redirectErr) {
          const errorMessage = handleAuthError(redirectErr);
          setError(errorMessage);
        }
      } else {
        const errorMessage = handleAuthError(err);
        setError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
          {error}
        </div>
      )}

      <GoogleSignInButton
        onClick={handleGoogleSignIn}
        isLoading={isLoading}
      />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-700" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
            Or continue with email
          </span>
        </div>
      </div>

      <form onSubmit={handleEmailSignIn} className="space-y-6">
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <Button 
          type="submit" 
          fullWidth 
          disabled={isLoading}
          className="relative"
        >
          {isLoading ? (
            <Loader className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </>
          )}
        </Button>
      </form>
    </div>
  );
}