import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <Shield className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-white">ReviewPro+</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Protecting your rental business reputation with advanced review management.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li><Link to="/#features" className="text-gray-400 hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/restaurant" className="text-gray-400 hover:text-primary transition-colors">Restaurants</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li><Link to="/docs" className="text-gray-400 hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="/guides" className="text-gray-400 hover:text-primary transition-colors">Guides</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} ReviewPro+. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}