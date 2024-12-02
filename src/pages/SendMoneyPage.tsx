import React, { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Account } from '../types/accounts';

export function SendMoneyPage() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [reference, setReference] = useState('');

  const accounts: Account[] = [
    {
      id: "1",
      name: "Current Account",
      balance: 25000,
      accountNumber: "1234 5678 9012",
      type: "CURRENT",
    },
    {
      id: "2",
      name: "Savings Account",
      balance: 75000,
      accountNumber: "9876 5432 1098",
      type: "SAVINGS",
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle transfer logic
    alert('Transfer successful!');
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
              <Send className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold">Send Money</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From Account
              </label>
              <select
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                {accounts.map(account => (
                  <option key={account.id} value={account.id}>
                    {account.name} - R {account.balance.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipient Account Number
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reference
              </label>
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition mt-6"
            >
              Send Money
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}