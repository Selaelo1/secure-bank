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
  MapPin,
  Phone,
  Clock4,
} from "lucide-react";
import { Account } from "../types/accounts";
import TransactionList from "./TransactionList";
import { TransferModal } from "./TransferModal";
import { FraudClaim } from "../types/fraud";

interface AccountDetailsProps {
  account: Account;
  onBack: () => void;
  isDuressMode: boolean;
  onAddFraudClaim?: (claim: FraudClaim) => void;
}

interface CardModalProps {
  onClose: () => void;
  accountType: "CURRENT" | "CREDIT";
}

interface BranchInfo {
  name: string;
  address: string;
  phone: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  manager: string;
}

const branchInfo: BranchInfo = {
  name: "Sandton City Branch",
  address: "Shop L31, Sandton City Mall, 83 Rivonia Rd, Sandhurst, Sandton",
  phone: "+27 11 784 5000",
  hours: {
    weekdays: "09:00 - 16:30",
    saturday: "09:00 - 13:00",
    sunday: "Closed",
  },
  manager: "Sarah Johnson",
};

const CardModal: React.FC<CardModalProps> = ({ onClose, accountType }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardNumber =
    accountType === "CREDIT" ? "5412 •••• •••• 8901" : "4532 •••• •••• 7890";
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
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
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
                        <div className="text-xs opacity-75 mb-1">
                          VALID THRU
                        </div>
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
};

const AccountDetails: React.FC<AccountDetailsProps> = ({
  account,
  onBack,
  isDuressMode,
  onAddFraudClaim,
}) => {
  const [activeTab, setActiveTab] = useState<
    "transactions" | "settings" | "branch"
  >("transactions");
  const [showCardModal, setShowCardModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);

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
        <button
          onClick={() => setActiveTab("branch")}
          className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl"
        >
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
          <button
            onClick={() => setActiveTab("branch")}
            className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition ${
              activeTab === "branch"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500"
            }`}
          >
            <Building className="w-5 h-5" />
            <span>Branch</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "transactions" && (
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <TransactionList
              isDuressMode={isDuressMode}
              onAddFraudClaim={onAddFraudClaim}
            />
          </div>
        )}

        {activeTab === "settings" && (
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
            <div>
              <div className="text-sm text-gray-500">Account Holder</div>
              <div className="text-lg font-semibold">John Doe</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Account Type</div>
              <div className="text-lg font-semibold">{account.type}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Account Number</div>
              <div className="text-lg font-semibold">
                {account.accountNumber}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Branch Code</div>
              <div className="text-lg font-semibold">250655</div>
            </div>
          </div>
        )}

        {activeTab === "branch" && (
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">
                  {branchInfo.name}
                </h3>
                <p className="text-gray-600">{branchInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Contact</h3>
                <p className="text-gray-600">{branchInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock4 className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Operating Hours</h3>
                <p className="text-gray-600">
                  Weekdays: {branchInfo.hours.weekdays}
                  <br />
                  Saturday: {branchInfo.hours.saturday}
                  <br />
                  Sunday: {branchInfo.hours.sunday}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Branch Manager</h3>
                <p className="text-gray-600">{branchInfo.manager}</p>
              </div>
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/?api=1&query=Sandton+City+Mall",
                  "_blank"
                )
              }
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Get Directions
            </button>
          </div>
        )}
      </div>

      {/* Modals */}
      {showCardModal && (
        <CardModal
          onClose={() => setShowCardModal(false)}
          accountType={account.type === "CREDIT" ? "CREDIT" : "CURRENT"}
        />
      )}

      {showTransferModal && (
        <TransferModal
          onClose={() => setShowTransferModal(false)}
          sourceAccount={account}
        />
      )}
    </div>
  );
};

export default AccountDetails;
