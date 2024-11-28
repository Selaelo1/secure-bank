import React from 'react';
import { ArrowLeft, Shield, Smartphone, CreditCard, Globe, Lock, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FeaturesPage() {
  const features = [
    {
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: "Virtual Cards",
      description: "Create unlimited virtual cards for secure online shopping with advanced controls and real-time notifications."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Mobile Banking",
      description: "Access your accounts, make payments, and manage your finances from anywhere with our secure mobile app."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Transfers",
      description: "Send money worldwide with competitive exchange rates and low fees. Track your transfers in real-time."
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "Advanced Security",
      description: "Multi-layer security with biometric authentication and real-time fraud detection systems."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Joint Accounts",
      description: "Share accounts with family members and manage permissions with detailed control settings."
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "Business Banking",
      description: "Comprehensive business solutions including bulk payments, payroll, and expense management."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-6 h-6 text-gray-600" />
                <span className="text-gray-600">Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Features</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the powerful features that make SecureBank the perfect choice for your banking needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-blue-100 mb-8">
              Join thousands of satisfied customers who trust SecureBank for their banking needs.
            </p>
            <Link
              to="/signup"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Open an Account
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}