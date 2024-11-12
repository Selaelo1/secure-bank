import React from "react";
import { X, AlertTriangle } from "lucide-react";
import { Transaction } from "../types/accounts";

interface FraudClaimModalProps {
  onClose: () => void;
  onSubmit: (data: {
    type: string;
    description: string;
    amount: number;
    date: string;
  }) => void;
  transaction?: Transaction;
}

export function FraudClaimModal({
  onClose,
  onSubmit,
  transaction,
}: FraudClaimModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    onSubmit({
      type: formData.get("type") as string,
      description: formData.get("description") as string,
      amount: transaction
        ? Math.abs(transaction.amount)
        : Number(formData.get("amount")),
      date: transaction ? transaction.date : (formData.get("date") as string),
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg">
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-semibold">Report Fraud</h2>
          </div>
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
              Type of Fraud
            </label>
            <select
              name="type"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select type</option>
              <option value="Unauthorized Transaction">
                Unauthorized Transaction
              </option>
              <option value="Card Skimming">Card Skimming</option>
              <option value="Online Fraud">Online Fraud</option>
              <option value="Identity Theft">Identity Theft</option>
              <option value="Phishing">Phishing Attack</option>
              <option value="Account Takeover">Account Takeover</option>
            </select>
          </div>

          {!transaction && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                required
                min="0"
                step="0.01"
                placeholder="0.00"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {!transaction && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Incident
              </label>
              <input
                type="date"
                name="date"
                required
                max={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              required
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Please provide details about the incident..."
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
            >
              Submit Fraud Claim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
