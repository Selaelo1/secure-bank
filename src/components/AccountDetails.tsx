import React from "react";
import {
  ArrowLeft,
  Clock,
  Settings,
  CreditCard as CardIcon,
  Send,
  Shield,
  Building,
  MapPin,
  Phone,
  Clock4,
} from "lucide-react";
import { Account } from "../types/accounts";
import TransactionList from "./TransactionList";
import { TransferModal } from "./TransferModal";
import { FraudClaim } from "../types/fraud";
import CardModal from "./CardModal";

interface AccountDetailsProps {
  account: Account;
  onBack: () => void;
  isDuressMode: boolean;
  onAddFraudClaim: (claim: FraudClaim) => void;
}

const AccountDetails: React.FC<AccountDetailsProps> = ({
  account,
  onBack,
  isDuressMode,
  onAddFraudClaim,
}) => {
  const [activeTab, setActiveTab] = React.useState<"transactions" | "settings" | "branch">("transactions");
  const [showCardModal, setShowCardModal] = React.useState(false);
  const [showTransferModal, setShowTransferModal] = React.useState(false);

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
              <div className="text-lg font-semibold">{account.accountNumber}</div>
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
                <h3 className="font-semibold text-gray-800">Sandton City Branch</h3>
                <p className="text-gray-600">Shop L31, Sandton City Mall, 83 Rivonia Rd, Sandhurst, Sandton</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Contact</h3>
                <p className="text-gray-600">+27 11 784 5000</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock4 className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Operating Hours</h3>
                <p className="text-gray-600">
                  Weekdays: 09:00 - 16:30<br />
                  Saturday: 09:00 - 13:00<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Branch Manager</h3>
                <p className="text-gray-600">Sarah Johnson</p>
              </div>
            </div>

            <button
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Sandton+City+Mall', '_blank')}
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