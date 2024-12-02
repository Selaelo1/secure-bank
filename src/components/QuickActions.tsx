import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Send, Wallet, Building, Receipt, Ticket, BanknoteIcon, 
  ShieldAlert, CreditCard as CardIcon, X, Shield 
} from 'lucide-react';

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

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
  const navigate = useNavigate();
  const [showVirtualCardModal, setShowVirtualCardModal] = useState(false);

  const handleBlockCard = () => {
    const confirm = window.confirm('Are you sure you want to block your card? This action cannot be undone.');
    if (confirm) {
      alert('Your card has been blocked. Please contact support to unblock.');
    }
  };

  const actions = [
    { icon: <Send className="w-5 h-5 text-blue-600" />, label: 'Send Money', onClick: () => navigate('/send-money') },
    { icon: <Wallet className="w-5 h-5 text-blue-600" />, label: 'Cash Send', onClick: () => navigate('/cash-send') },
    { icon: <Building className="w-5 h-5 text-blue-600" />, label: 'Pay Bills', onClick: () => navigate('/pay-bills') },
    { icon: <Receipt className="w-5 h-5 text-blue-600" />, label: 'Request Money', onClick: () => navigate('/request-money') },
    { icon: <Ticket className="w-5 h-5 text-blue-600" />, label: 'Play Lotto', onClick: () => navigate('/play-lotto') },
    { icon: <CardIcon className="w-5 h-5 text-blue-600" />, label: 'Virtual Card', onClick: () => setShowVirtualCardModal(true) },
    { icon: <ShieldAlert className="w-5 h-5 text-blue-600" />, label: 'Block Card', onClick: handleBlockCard },
    { icon: <BanknoteIcon className="w-5 h-5 text-blue-600" />, label: 'Transfers', onClick: () => navigate('/send-money') },
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

      {showVirtualCardModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Virtual Card</h2>
              <button onClick={() => setShowVirtualCardModal(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full aspect-[1.586/1] bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-lg mb-6">
              <div className="flex justify-between items-start mb-8">
                <Shield className="w-12 h-12" />
                <span className="font-semibold text-lg">SecureBank</span>
              </div>
              <div className="mb-8">
                <div className="font-mono text-2xl tracking-wider mb-2">4532 •••• •••• 7890</div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs opacity-75 mb-1">CARD HOLDER</div>
                  <div className="font-semibold">JOHN DOE</div>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <CardIcon className="w-6 h-6" />
                </div>
              </div>
            </div>

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
      )}
    </>
  );
}