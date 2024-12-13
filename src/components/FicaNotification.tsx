import React from 'react';
import { MapPin, Clock, Fingerprint, CheckCircle } from 'lucide-react';

interface FicaNotificationProps {
  onBackToHome: () => void;
}

export function FicaNotification({ onBackToHome }: FicaNotificationProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Fingerprint className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            One Last Step!
          </h1>
          <p className="text-gray-600">
            Visit your nearest branch to complete your FICA verification
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-xl">
            <h2 className="font-semibold text-gray-800 mb-4">Required at Branch:</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Fingerprint Registration
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Original ID Document Verification
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Proof of Address Verification
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                In-Person Photo Capture
              </li>
            </ul>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-800 mb-4">Branch Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">Find Your Nearest Branch</p>
                  <p className="text-sm text-gray-500">
                    Use our branch locator to find the most convenient location
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">Operating Hours</p>
                  <p className="text-sm text-gray-500">
                    Monday to Friday: 9:00 AM - 4:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => window.open('https://www.google.com/maps', '_blank')}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Find Nearest Branch
          </button>
          <button
            onClick={onBackToHome}
            className="w-full border border-gray-200 py-3 rounded-xl font-semibold hover:bg-gray-50 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}