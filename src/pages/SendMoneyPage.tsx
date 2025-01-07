import React, { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Account } from '../types/accounts';

export function SendMoneyPage() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [reference, setReference] = useState('');
  const [sourceAccount, setSourceAccount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

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

  const validateForm = () => {
    if (!sourceAccount) {
      setError('Please select a source account');
      return false;
    }

    if (!recipient.match(/^\d{10,}$/)) {
      setError('Please enter a valid account number');
      return false;
    }

    const amountNum = parseFloat(amount);
    const selectedAccount = accounts.find(acc => acc.id === sourceAccount);
    
    if (!selectedAccount) {
      setError('Invalid source account');
      return false;
    }

    if (isNaN(amountNum) || amountNum <= 0 || amountNum > selectedAccount.balance) {
      setError(`Amount must be between R0 and R${selectedAccount.balance.toLocaleString()}`);
      return false;
    }

    if (!reference.trim()) {
      setError('Please enter a reference');
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

      // Generate transaction reference
      const transactionRef = `TRF${Date.now().toString().slice(-8)}`;

      setSuccess(true);
      setAmount('');
      setRecipient('');
      setReference('');
      
      alert(`Transfer successful!\n\nTransaction Reference: ${transactionRef}\nAmount: R${amount}\nRecipient: ${recipient}\nReference: ${reference}`);
    } catch (err) {
      setError('Failed to process transfer. Please try again.');
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
              <Send className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold">Send Money</h1>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-600 rounded-lg">
              Transfer completed successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From Account
              </label>
              <select
                value={sourceAccount}
                onChange={(e) => setSourceAccount(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select account</option>
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
                pattern="\d{10,}"
                placeholder="Enter account number"
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
                  placeholder="0.00"
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
                placeholder="Enter reference"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Send Money'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}