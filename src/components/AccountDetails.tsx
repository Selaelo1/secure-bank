import React, { useState } from "react";
import {
  ArrowLeft,
  Clock,
  Settings,
  CreditCard as CardIcon,
  Send,
  Shield,
  Building,
  X,
} from "lucide-react";
import { Account } from "../types/accounts";
import TransactionList from "./TransactionList";

interface AccountDetailsProps {
  account: Account;
  onBack: () => void;
  isDuressMode: boolean;
}

interface CardModalProps {
  onClose: () => void;
  accountType: "CURRENT" | "CREDIT";
}

const CardModal: React.FC<CardModalProps> = ({ onClose, accountType }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardNumber =
    accountType === "CREDIT" ? "5412 •••• •••• 8901" : "4532 •••• •••• 7890";
  const cardHolder = "JOHN DOE";
  const expiryDate = "12/27";
  const cvv = "•••";

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {accountType === "CREDIT" ? "Credit Card" : "Debit Card"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

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
                  <Shield className="w-12 h-12" />
                  <span className="font-semibold text-lg">SecureBank</span>
                </div>
                <div className="font-mono text-2xl tracking-wider mb-2">
                  {cardNumber}
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs opacity-75 mb-1">CARD HOLDER</div>
                    <div className="font-semibold">{cardHolder}</div>
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <CardIcon className="w-6 h-6" />
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
                <div className="w-full h-12 bg-gray-800 mt-6"></div>
                <div className="p-6">
                  <div className="bg-white/20 h-12 w-full mb-6"></div>
                  <div className="flex justify-end mb-2">
                    <div className="bg-white/20 w-16 h-8 flex items-center justify-center font-mono">
                      {cvv}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-8">
                    <div>
                      <div className="text-xs opacity-75 mb-1">VALID THRU</div>
                      <div className="font-mono">{expiryDate}</div>
                    </div>
                    <Shield className="w-12 h-12 opacity-50" />
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
  );
};

const AccountDetails: React.FC<AccountDetailsProps> = ({
  account,
  onBack,
  isDuressMode,
}) => {
  const [activeTab, setActiveTab] = useState<"transactions" | "settings">(
    "transactions"
  );
  const [showCardModal, setShowCardModal] = useState(false);
  const [, setShowTransferModal] = useState(false);

  return (
    <div className="h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-4 flex items-center justify-between sticky top-0">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              {account.name}
            </h1>
            <p className="text-sm text-gray-500">{account.accountNumber}</p>
          </div>
        </div>
        <div className="text-xl font-bold text-gray-800">
          R{" "}
          {account.balance.toLocaleString("en-ZA", {
            minimumFractionDigits: 2,
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-4 p-4 bg-white border-b">
        <button
          onClick={() => setShowTransferModal(true)}
          className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl"
        >
          <div className="bg-blue-100 p-2 rounded-full mb-2">
            <Send className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-sm">Transfer</span>
        </button>
        <button
          onClick={() => setShowCardModal(true)}
          className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl"
        >
          <div className="bg-blue-100 p-2 rounded-full mb-2">
            <CardIcon className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-sm">Card Details</span>
        </button>
        <button className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl">
          <div className="bg-blue-100 p-2 rounded-full mb-2">
            <Building className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-sm">Branch Info</span>
        </button>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="flex space-x-4 px-4">
          <button
            onClick={() => setActiveTab("transactions")}
            className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition ${
              activeTab === "transactions"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500"
            }`}
          >
            <Clock className="w-5 h-5" />
            <span>Transactions</span>
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition ${
              activeTab === "settings"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500"
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Account Info</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "transactions" ? (
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <TransactionList isDuressMode={isDuressMode} />
          </div>
        ) : (
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
            {/* Account Settings / Info */}
            <div>
              <div className="text-sm text-gray-500">Account Holder</div>
              <div className="text-lg font-semibold">{account.holder}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Account Type</div>
              <div className="text-lg font-semibold">{account.type}</div>
            </div>
            {/* Add more fields as necessary */}
          </div>
        )}
      </div>

      {/* Modals */}
      {showCardModal && (
        <CardModal
          onClose={() => setShowCardModal(false)}
          accountType="CURRENT"
        />
      )}
      {/* Add transfer modal if needed */}
    </div>
  );
};

export default AccountDetails;
