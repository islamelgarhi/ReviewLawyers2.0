import React from 'react';
import { Shield, Sun, Moon, LogIn, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const { isDark, toggleDark } = useTheme();

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 w-48">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-black dark:text-white">Review Lawyers</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-12">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/short-term-rentals">Rentals</NavLink>
              <NavLink to="/restaurant">Restaurants</NavLink>
              <NavLink to="/case-studies">Cases</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/features">Features</NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center justify-end w-48 space-x-6">
            <button 
              onClick={toggleDark}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <Link to="/login" className="flex items-center text-black dark:text-white hover:text-primary dark:hover:text-primary">
              <LogIn className="h-5 w-5 mr-1.5" />
              <span>Login</span>
            </Link>
            
            <Link 
              to="/free-trial"
              className="bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="text-black dark:text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className="text-sm font-medium text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}