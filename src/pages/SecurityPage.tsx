import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Bell, Fingerprint, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SecurityPage() {
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "End-to-End Encryption",
      description: "All data is encrypted using military-grade encryption protocols to ensure your information stays private."
    },
    {
      icon: <Fingerprint className="w-8 h-8 text-blue-600" />,
      title: "Biometric Authentication",
      description: "Access your account securely using fingerprint or face recognition technology."
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Real-time Monitoring",
      description: "24/7 transaction monitoring with AI-powered fraud detection systems."
    },
    {
      icon: <Bell className="w-8 h-8 text-blue-600" />,
      title: "Instant Alerts",
      description: "Get immediate notifications for any suspicious activity on your account."
    },
    {
      icon: <Server className="w-8 h-8 text-blue-600" />,
      title: "Secure Infrastructure",
      description: "Multiple data centers with redundant systems and regular security audits."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Zero Liability",
      description: "Full protection against unauthorized transactions with our zero liability policy."
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
          <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Security First</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your security is our top priority. Learn about the advanced measures we take to protect your money and data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
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

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Tips</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-1 rounded-full mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Never share your PIN</h3>
                  <p className="text-gray-600">Keep your PIN private and never share it with anyone, including bank staff.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-1 rounded-full mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Use strong passwords</h3>
                  <p className="text-gray-600">Create unique, complex passwords and change them regularly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-1 rounded-full mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Enable notifications</h3>
                  <p className="text-gray-600">Stay informed about all account activity with instant notifications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}