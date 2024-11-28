import React from 'react';
import { ArrowLeft, Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPage() {
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Your privacy is our top priority. Learn how we protect and manage your data.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Banking and financial information</li>
                <li>Transaction history and account activity</li>
                <li>Device and usage information when you access our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Providing and maintaining our banking services</li>
                <li>Processing your transactions and managing your accounts</li>
                <li>Detecting and preventing fraud</li>
                <li>Improving our services and developing new features</li>
                <li>Communicating with you about your account and our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement robust security measures to protect your information:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Encryption</h3>
                  <p className="text-gray-600">
                    All sensitive data is encrypted using industry-standard protocols.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Access Controls</h3>
                  <p className="text-gray-600">
                    Strict access controls and authentication mechanisms.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
                  <p className="text-gray-600">
                    24/7 security monitoring and fraud detection systems.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Compliance</h3>
                  <p className="text-gray-600">
                    Regular security audits and compliance checks.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have several rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to request deletion of your information</li>
                <li>Right to opt-out of marketing communications</li>
                <li>Right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about our privacy policy or how we handle your data:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600">Email: privacy@securebank.com</p>
                <p className="text-gray-600">Phone: +27 (0) 11 123 4567</p>
                <p className="text-gray-600">Address: 123 Security Street, Sandton, Johannesburg</p>
              </div>
            </section>

            <section className="border-t pt-8">
              <p className="text-sm text-gray-500">
                Last updated: March 15, 2024
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}