import { useState, useCallback } from 'react';

// Mock user data
const MOCK_USER = {
  email: 'demo@example.com',
  password: 'demo123',
  name: 'Demo User'
};

export function useAuth() {
  const [user, setUser] = useState<typeof MOCK_USER | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      setUser(MOCK_USER);
      return MOCK_USER;
    }

    throw new Error('Invalid credentials');
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };
}