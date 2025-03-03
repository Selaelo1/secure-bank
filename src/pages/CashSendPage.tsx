import React, { useState } from 'react';
import { ArrowLeft, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CashSendPage() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    if (!recipient.match(/^(\+27|0)[1-9][0-9]{8}$/)) {
      setError('Please enter a valid South African phone number');
      return false;
    }

    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0 || amountNum > 3000) {
      setError('Amount must be between R0 and R3,000');
      return false;
    }

    if (!pin.match(/^\d{4}$/)) {
      setError('PIN must be exactly 4 digits');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Generate reference number
      const referenceNumber = Math.random().toString(36).substring(2, 10).toUpperCase();

      setSuccess(true);
      setAmount('');
      setRecipient('');
      setPin('');

      alert(`Cash send successful!\n\nReference: ${referenceNumber}\nAmount: R${amount}\nRecipient: ${recipient}\n\nThe recipient can withdraw the money using the PIN: ${pin}`);
    } catch (err) {
      setError('Failed to process cash send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
              <span className="text-gray-600">Back to Dashboard</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-lg mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-2 rounded-full">
              <Wallet className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold">Cash Send</h1>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-600 rounded-lg">
              Cash send completed successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipient Phone Number
              </label>
              <input
                type="tel"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
                placeholder="+27"
                pattern="^(\+27|0)[1-9][0-9]{8}$"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">R</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                  min="0"
                  max="3000"
                  step="0.01"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">Maximum amount: R 3,000</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Create PIN
              </label>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                maxLength={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
                placeholder="4-digit PIN"
                pattern="\d{4}"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Send Cash'}
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">How it works:</h3>
            <ul className="text-sm text-blue-600 space-y-2">
              <li>• Recipient can withdraw at any ATM</li>
              <li>• Share the PIN securely with the recipient</li>
              <li>• Valid for 24 hours</li>
              <li>• No bank account needed for withdrawal</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}