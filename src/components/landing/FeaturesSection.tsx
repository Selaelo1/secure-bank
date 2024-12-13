import React from 'react';
import { CreditCard, Smartphone, Globe, Lock, Users, Building2 } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

interface FeaturesSectionProps {
  onFeatureClick: (link: string) => void;
}

export function FeaturesSection({ onFeatureClick }: FeaturesSectionProps) {
  const features = [
    {
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      title: "Virtual Cards",
      description: "Create unlimited virtual cards for secure online shopping",
      link: "/features"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: "Mobile Banking",
      description: "Bank from anywhere with our powerful mobile app",
      link: "/features"
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Global Transfers",
      description: "Send money worldwide with competitive exchange rates",
      link: "/features"
    },
    {
      icon: <Lock className="w-6 h-6 text-blue-600" />,
      title: "Advanced Security",
      description: "Multi-layer security with biometric authentication",
      link: "/security"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Joint Accounts",
      description: "Share accounts with family and manage together",
      link: "/features"
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      title: "Business Banking",
      description: "Powerful tools for your growing business",
      link: "/business"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need in a modern bank
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features to help you manage, grow, and protect your money
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              onLearnMore={() => onFeatureClick(feature.link)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}