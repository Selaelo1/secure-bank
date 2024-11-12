import React, { useState } from "react";
import { X } from "lucide-react";
import { Account } from "../types/accounts";

interface TransferModalProps {
  onClose: () => void;
  sourceAccount: Account;
}

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
  },
  {
    id: "3",
    name: "Credit Card",
    balance: -15000,
    accountNumber: "4567 8901 2345",
    type: "CREDIT",
  },
];

export function TransferModal({ onClose, sourceAccount }: TransferModalProps) {
  const [amount, setAmount] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const [reference, setReference] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the transfer logic
    alert("Transfer successful!");
    onClose();
  };

  const destinationAccounts = accounts.filter(
    (account) => account.id !== sourceAccount.id
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Transfer Money</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From Account
            </label>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium">{sourceAccount.name}</p>
              <p className="text-sm text-gray-500">
                {sourceAccount.accountNumber}
              </p>
              <p className="text-sm font-medium mt-1">
                Available Balance: R{" "}
                {sourceAccount.balance.toLocaleString("en-ZA", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To Account
            </label>
            <select
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select account</option>
              {destinationAccounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.name} ({account.accountNumber})
                </option>
              ))}
            </select>
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
                placeholder="0.00"
                required
                min="0"
                step="0.01"
                className="w-full pl-8 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
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
              placeholder="Enter reference"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
