import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="hover:text-white transition">Features</Link></li>
              <li><Link to="/security" className="hover:text-white transition">Security</Link></li>
              <li><Link to="/business" className="hover:text-white transition">Business</Link></li>
              <li><Link to="/enterprise" className="hover:text-white transition">Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><Link to="/press" className="hover:text-white transition">Press</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/documentation" className="hover:text-white transition">Documentation</Link></li>
              <li><Link to="/help" className="hover:text-white transition">Help Center</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="hover:text-white transition">support@securebank.com</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">+27 (0) 11 123 4567</Link></li>
              <li><Link to="/branches" className="hover:text-white transition">Find a Branch</Link></li>
              <li><Link to="/atms" className="hover:text-white transition">ATM Locator</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-white">SecureBank</span>
          </div>
          <p className="text-sm">
            © 2024 SecureBank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}