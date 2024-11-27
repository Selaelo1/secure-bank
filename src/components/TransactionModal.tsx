import React, { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import { Transaction } from '../types/accounts';
import { FraudClaimModal } from './FraudClaimModal';
import { FraudClaim } from '../types/fraud';

interface TransactionModalProps {
  transaction: Transaction;
  onClose: () => void;
  onReport: (claim: FraudClaim) => void;
}

export default function TransactionModal({ transaction, onClose, onReport }: TransactionModalProps) {
  const [showFraudModal, setShowFraudModal] = useState(false);

  const handleReportClick = () => {
    setShowFraudModal(true);
  };

  const handleFraudSubmit = (data: { type: string; description: string; amount: number; date: string }) => {
    const newClaim: FraudClaim = {
      id: `FR${Date.now()}`,
      date: transaction.date,
      type: data.type,
      amount: Math.abs(transaction.amount),
      status: 'AWAITING_AGENT',
      description: data.description,
      lastUpdate: new Date().toISOString().split('T')[0],
      transactionDetails: {
        title: transaction.title,
        reference: transaction.reference,
        merchantId: transaction.merchantId,
        time: transaction.time,
        location: transaction.location
      }
    };
    onReport(newClaim);
    setShowFraudModal(false);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl w-full max-w-lg my-4">
          <div className="flex justify-between items-center p-4 sm:p-6 border-b">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Transaction Details</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-50 p-3 rounded-full">
                  {transaction.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{transaction.title}</h3>
                  <p className="text-sm text-gray-500">{transaction.reference}</p>
                </div>
              </div>
              <span className={`${transaction.amount > 0 ? 'text-green-600' : 'text-gray-800'} text-lg font-semibold`}>
                {transaction.amount > 0 ? '+' : ''}
                R {Math.abs(transaction.amount).toLocaleString('en-ZA', { minimumFractionDigits: 2 })}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{transaction.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="font-medium">{transaction.time}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{transaction.location || 'Online Transaction'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium capitalize">{transaction.status.toLowerCase()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Merchant ID</p>
                <p className="font-medium">{transaction.merchantId || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-medium">{transaction.category}</p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 border-t bg-gray-50 rounded-b-2xl">
            <button
              onClick={handleReportClick}
              className="w-full flex items-center justify-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 font-medium py-3 px-4 rounded-xl transition"
            >
              <AlertTriangle className="w-5 h-5" />
              <span>Report Suspicious Transaction</span>
            </button>
          </div>
        </div>
      </div>

      {showFraudModal && (
        <FraudClaimModal
          onClose={() => setShowFraudModal(false)}
          onSubmit={handleFraudSubmit}
          transaction={transaction}
        />
      )}
    </>
  );
}