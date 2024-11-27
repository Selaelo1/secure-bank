import React, { useState } from "react";
import {
  Shield,
  ChevronRight,
  Users,
  Lock,
  Building2,
  CreditCard,
  Smartphone,
  Globe,
  ArrowRight,
  Menu,
} from "lucide-react";
import { MobileMenu } from "./MobileMenu";

interface LandingPageProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

export function LandingPage({ onLoginClick, onSignupClick }: LandingPageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navbar */}
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
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#security" className="text-gray-600 hover:text-gray-900">
                Security
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
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
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onLoginClick={onLoginClick}
        onSignupClick={onSignupClick}
      />

      {/* Rest of the component remains exactly the same */}
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 pt-32 pb-20 md:pt-40 md:pb-32 h-screen">
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

      {/* Features Grid */}
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
            {[
              {
                icon: <CreditCard className="w-6 h-6 text-blue-600" />,
                title: "Virtual Cards",
                description:
                  "Create unlimited virtual cards for secure online shopping",
              },
              {
                icon: <Smartphone className="w-6 h-6 text-blue-600" />,
                title: "Mobile Banking",
                description: "Bank from anywhere with our powerful mobile app",
              },
              {
                icon: <Globe className="w-6 h-6 text-blue-600" />,
                title: "Global Transfers",
                description:
                  "Send money worldwide with competitive exchange rates",
              },
              {
                icon: <Lock className="w-6 h-6 text-blue-600" />,
                title: "Advanced Security",
                description:
                  "Multi-layer security with biometric authentication",
              },
              {
                icon: <Users className="w-6 h-6 text-blue-600" />,
                title: "Joint Accounts",
                description: "Share accounts with family and manage together",
              },
              {
                icon: <Building2 className="w-6 h-6 text-blue-600" />,
                title: "Business Banking",
                description: "Powerful tools for your growing business",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition group"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bank-grade security for your peace of mind
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Your security is our top priority. We use the latest encryption
                and security measures to protect your money and data.
              </p>
              <ul className="space-y-4">
                {[
                  "256-bit encryption for all transactions",
                  "Biometric authentication",
                  "Real-time fraud detection",
                  "24/7 fraud monitoring",
                  "Zero liability protection",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
                alt="Security"
                className="relative rounded-3xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[200%] aspect-[1/1] bg-gradient-to-b from-blue-600/10 to-transparent rounded-[100%]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to experience modern banking?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust SecureBank for their
            banking needs. Open your account today in just 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onSignupClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition"
            >
              Open Account
            </button>
            <button
              onClick={onLoginClick}
              className="bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-600 transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Business
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    support@securebank.com
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    +27 (0) 11 123 4567
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Find a Branch
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    ATM Locator
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-white">SecureBank</span>
            </div>
            <p className="text-sm">© 2024 SecureBank. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
