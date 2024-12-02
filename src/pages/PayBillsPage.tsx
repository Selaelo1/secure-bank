import React, { useState } from 'react';
import { ArrowLeft, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PayBillsPage() {
  const [provider, setProvider] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const providers = [
    { id: 'electricity', name: 'Electricity' },
    { id: 'water', name: 'Water' },
    { id: 'internet', name: 'Internet' },
    { id: 'telephone', name: 'Telephone' },
    { id: 'tax', name: 'Tax Payment' },
    { id: 'insurance', name: 'Insurance' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle bill payment logic
    alert('Bill payment successful!');
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
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold">Pay Bills</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Provider
              </label>
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a provider</option>
                {providers.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account/Meter Number
              </label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
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
                  step="0.01"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition mt-6"
            >
              Pay Bill
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Recent Bills:</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Electricity - City Power</span>
                <span className="text-gray-800 font-medium">R 850.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Water - Municipal Services</span>
                <span className="text-gray-800 font-medium">R 450.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Internet - Fiber Connect</span>
                <span className="text-gray-800 font-medium">R 799.00</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}