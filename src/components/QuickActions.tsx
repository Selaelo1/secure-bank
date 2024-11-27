import React, { useState } from 'react';
import { 
  Send, Wallet, CreditCard, Building, Receipt, Ticket, 
  BanknoteIcon, ShieldAlert, CreditCard as CardIcon,
  X, Shield
} from 'lucide-react';

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

interface TransferModalProps {
  onClose: () => void;
}

interface VirtualCardModalProps {
  onClose: () => void;
}

const VirtualCardModal: React.FC<VirtualCardModalProps> = ({ onClose }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardNumber = "4532 •••• •••• 7890";
  const cardHolder = "JOHN DOE";
  const expiryDate = "12/27";
  const cvv = "•••";

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Virtual Card</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Flippable Card */}
        <div 
          className="w-full aspect-[1.586/1] perspective-1000 cursor-pointer mb-6"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}>
            {/* Card Front */}
            <div className="absolute w-full h-full backface-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-lg">
                <div className="flex justify-between items-start mb-8">
                  <Shield className="w-12 h-12" />
                  <span className="font-semibold text-lg">SecureBank</span>
                </div>
                <div className="mb-8">
                  <div className="font-mono text-2xl tracking-wider mb-2">{cardNumber}</div>
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
              <div className="w-full h-full bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl text-white shadow-lg overflow-hidden">
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

const TransferModal: React.FC<TransferModalProps> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl w-full max-w-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Transfer Money</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Recipient Account
          </label>
          <input
            type="text"
            placeholder="Account number"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <input
            type="number"
            placeholder="0.00"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reference
          </label>
          <input
            type="text"
            placeholder="Payment reference"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="flex space-x-4 pt-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
);

const QuickAction: React.FC<QuickActionProps> = ({ icon, label, onClick }) => (
  <button 
    onClick={onClick}
    className="flex flex-col items-center p-3 hover:bg-gray-50 rounded-xl transition"
  >
    <div className="bg-blue-100 p-3 rounded-full mb-2">
      {icon}
    </div>
    <span className="text-sm text-gray-700 text-center">{label}</span>
  </button>
);

export default function QuickActions() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleSendMoney = () => {
    setActiveModal('transfer');
  };

  const handleCashSend = () => {
    alert('Cash Send feature will be available soon');
  };

  const handlePayBills = () => {
    alert('Redirecting to bill payment portal...');
  };

  const handleRequestMoney = () => {
    alert('Request Money feature will be available soon');
  };

  const handlePlayLotto = () => {
    alert('Redirecting to National Lottery portal...');
  };

  const handleVirtualCard = () => {
    setActiveModal('virtualCard');
  };

  const handleBlockCard = () => {
    const confirm = window.confirm('Are you sure you want to block your card? This action cannot be undone.');
    if (confirm) {
      alert('Your card has been blocked. Please contact support to unblock.');
    }
  };

  const handleTransfers = () => {
    setActiveModal('transfer');
  };

  const actions = [
    { icon: <Send className="w-5 h-5 text-blue-600" />, label: 'Send Money', onClick: handleSendMoney },
    { icon: <Wallet className="w-5 h-5 text-blue-600" />, label: 'Cash Send', onClick: handleCashSend },
    { icon: <Building className="w-5 h-5 text-blue-600" />, label: 'Pay Bills', onClick: handlePayBills },
    { icon: <Receipt className="w-5 h-5 text-blue-600" />, label: 'Request Money', onClick: handleRequestMoney },
    { icon: <Ticket className="w-5 h-5 text-blue-600" />, label: 'Play Lotto', onClick: handlePlayLotto },
    { icon: <CardIcon className="w-5 h-5 text-blue-600" />, label: 'Virtual Card', onClick: handleVirtualCard },
    { icon: <ShieldAlert className="w-5 h-5 text-blue-600" />, label: 'Block Card', onClick: handleBlockCard },
    { icon: <BanknoteIcon className="w-5 h-5 text-blue-600" />, label: 'Transfers', onClick: handleTransfers },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <QuickAction
            key={index}
            icon={action.icon}
            label={action.label}
            onClick={action.onClick}
          />
        ))}
      </div>

      {activeModal === 'transfer' && (
        <TransferModal onClose={() => setActiveModal(null)} />
      )}

      {activeModal === 'virtualCard' && (
        <VirtualCardModal onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}