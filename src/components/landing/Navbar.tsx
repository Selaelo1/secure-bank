import React from 'react';
import { Shield, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
  onMobileMenuOpen: () => void;
}

export function Navbar({ onLoginClick, onSignupClick, onMobileMenuOpen }: NavbarProps) {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
              SecureBank
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link to="/security" className="text-gray-600 hover:text-gray-900">Security</Link>
            <Link to="/business" className="text-gray-600 hover:text-gray-900">Business</Link>
            <button
              onClick={onLoginClick}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign In
            </button>
            <button
              onClick={onSignupClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Open Account
            </button>
          </div>
          <button 
            onClick={onMobileMenuOpen}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
}