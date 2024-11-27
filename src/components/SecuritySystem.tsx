import React, { useState } from 'react';
import { Shield, KeyRound } from 'lucide-react';

interface SecuritySystemProps {
  onLogin: (pin: string) => void;
}

export function SecuritySystem({ onLogin }: SecuritySystemProps) {
  const [pin, setPin] = useState('');

  const handlePinInput = (digit: string) => {
    if (pin.length < 5) {
      const newPin = pin + digit;
      setPin(newPin);
      
      if (newPin.length === 5) {
        onLogin(newPin);
      }
    }
  };

  const handleClear = () => setPin('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="bg-white rounded-2xl p-8 shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Enter your 5-digit PIN to access your account</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full ${
                  i < pin.length ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[...'123456789'].map((digit) => (
              <button
                key={digit}
                onClick={() => handlePinInput(digit)}
                className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold py-4 rounded-xl transition"
              >
                {digit}
              </button>
            ))}
            <button
              onClick={handleClear}
              className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold py-4 rounded-xl transition"
            >
              Clear
            </button>
            <button
              onClick={() => handlePinInput('0')}
              className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold py-4 rounded-xl transition"
            >
              0
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition">
              <KeyRound className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500">
          Forgot your PIN? Contact support
        </p>
      </div>
    </div>
  );
}