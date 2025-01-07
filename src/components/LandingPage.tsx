import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './landing/Navbar';
import { MobileMenu } from './MobileMenu';
import { HeroSection } from './landing/HeroSection';
import { FeaturesSection } from './landing/FeaturesSection';
import { Footer } from './Footer';
import { SecuritySection } from './landing/SecurityFeatures'; // Import SecuritySection

interface LandingPageProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export function LandingPage({ onLoginClick, onSignupClick }: LandingPageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleFeatureClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="min-h-screen">
      <Navbar
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
        onMobileMenuOpen={() => setIsMobileMenuOpen(true)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
      />

      <HeroSection
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
      />
      <FeaturesSection onFeatureClick={handleFeatureClick} />
      {/* Add SecuritySection Here */}
      <SecuritySection />
      <Footer />
    </div>
  );
}
