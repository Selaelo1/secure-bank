import React from "react";
import { Shield } from "lucide-react";

export function SecuritySection() {
  const securityFeatures = [
    "256-bit encryption for all transactions",
    "Biometric authentication",
    "Real-time fraud detection",
    "24/7 fraud monitoring",
    "Zero liability protection",
  ];

  return (
    <div>
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
                {securityFeatures.map((item, index) => (
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
              onClick={() => {}}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition"
            >
              Open Account
            </button>
            <button
              onClick={() => {}}
              className="bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-600 transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}