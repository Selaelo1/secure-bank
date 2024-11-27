import React, { useState } from 'react';
import { X, Shield, CreditCard as CardIcon } from 'lucide-react';

interface CardModalProps {
  onClose: () => void;
  accountType: "CURRENT" | "CREDIT";
}

export default function CardModal({ onClose, accountType }: CardModalProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardNumber = accountType === "CREDIT" ? "5412 •••• •••• 8901" : "4532 •••• •••• 7890";
  const cardHolder = "JOHN DOE";
  const expiryDate = "12/27";
  const cvv = "•••";

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg my-4">
        <div className="flex justify-between items-center p-4 sm:p-6 border-b">
          <h2 className="text-lg sm:text-xl font-semibold">
            {accountType === "CREDIT" ? "Credit Card" : "Debit Card"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <div
            className="w-full aspect-[1.586/1] perspective-1000 cursor-pointer mb-6"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Card Front */}
              <div className="absolute w-full h-full backface-hidden">
                <div
                  className={`w-full h-full ${
                    accountType === "CREDIT"
                      ? "bg-gradient-to-br from-purple-600 to-purple-800"
                      : "bg-gradient-to-br from-blue-600 to-blue-800"
                  } rounded-2xl p-6 text-white shadow-lg`}
                >
                  <div className="flex justify-between items-start mb-8">
                    <Shield className="w-8 sm:w-12 h-8 sm:h-12" />
                    <span className="font-semibold text-base sm:text-lg">
                      SecureBank
                    </span>
                  </div>
                  <div className="font-mono text-lg sm:text-2xl tracking-wider mb-2">
                    {cardNumber}
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs opacity-75 mb-1">CARD HOLDER</div>
                      <div className="font-semibold text-sm sm:text-base">
                        {cardHolder}
                      </div>
                    </div>
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <CardIcon className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Back */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                <div
                  className={`w-full h-full ${
                    accountType === "CREDIT"
                      ? "bg-gradient-to-br from-purple-800 to-purple-900"
                      : "bg-gradient-to-br from-blue-800 to-blue-900"
                  } rounded-2xl text-white shadow-lg overflow-hidden`}
                >
                  <div className="w-full h-8 sm:h-12 bg-gray-800 mt-6"></div>
                  <div className="p-6">
                    <div className="bg-white/20 h-8 sm:h-12 w-full mb-6"></div>
                    <div className="flex justify-end mb-2">
                      <div className="bg-white/20 w-12 sm:w-16 h-6 sm:h-8 flex items-center justify-center font-mono">
                        {cvv}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-8">
                      <div>
                        <div className="text-xs opacity-75 mb-1">VALID THRU</div>
                        <div className="font-mono text-sm sm:text-base">
                          {expiryDate}
                        </div>
                      </div>
                      <Shield className="w-8 h-8 sm:w-12 sm:h-12 opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mb-6">
            Click the card to view security details
          </p>

          <div className="space-y-4">
            <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Copy Card Details
            </button>
            <button className="w-full py-3 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
              Block Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}