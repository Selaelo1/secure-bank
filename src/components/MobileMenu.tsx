import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export function MobileMenu({ isOpen, onClose, onLoginClick, onSignupClick }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-[75%] max-w-sm bg-white">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold text-gray-900">Menu</span>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4">
          <div className="space-y-1">
            <Link
              to="/features"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              onClick={onClose}
            >
              Features
            </Link>
            <Link
              to="/security"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              onClick={onClose}
            >
              Security
            </Link>
            <Link
              to="/business"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              onClick={onClose}
            >
              Business
            </Link>
          </div>
          <div className="mt-6 space-y-3 p-4 border-t">
            <button
              onClick={() => {
                onLoginClick();
                onClose();
              }}
              className="w-full px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                onSignupClick();
                onClose();
              }}
              className="w-full px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 rounded-lg transition"
            >
              Open Account
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}