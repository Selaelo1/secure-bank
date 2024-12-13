import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onSignupClick: () => void;
  onLoginClick: () => void;
}

export function HeroSection({ onSignupClick, onLoginClick }: HeroSectionProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[200%] aspect-[1/1] bg-gradient-to-b from-blue-400/20 to-transparent rounded-[100%]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Banking for the Digital Age
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
            Experience next-generation banking with state-of-the-art security,
            instant payments, and smart financial tools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onSignupClick}
              className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition flex items-center justify-center group"
            >
              Get Started
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onLoginClick}
              className="w-full sm:w-auto bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition"
            >
              Sign In to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}