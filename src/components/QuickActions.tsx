import React from "react";
import {
  Send,
  Wallet,
  Building,
  Receipt,
  Ticket,
  BanknoteIcon,
  ShieldAlert,
  CreditCard as CardIcon,
} from "lucide-react";

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
    <div className="bg-blue-100 p-3 rounded-full mb-2">{icon}</div>
    <span className="text-sm text-gray-700 text-center">{label}</span>
  </button>
);

export default function QuickActions() {
  const actions = [
    { icon: <Send className="w-5 h-5 text-blue-600" />, label: "Send Money" },
    { icon: <Wallet className="w-5 h-5 text-blue-600" />, label: "Cash Send" },
    {
      icon: <Building className="w-5 h-5 text-blue-600" />,
      label: "Pay Bills",
    },
    {
      icon: <Receipt className="w-5 h-5 text-blue-600" />,
      label: "Request Money",
    },
    { icon: <Ticket className="w-5 h-5 text-blue-600" />, label: "Play Lotto" },
    {
      icon: <CardIcon className="w-5 h-5 text-blue-600" />,
      label: "Virtual Card",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-blue-600" />,
      label: "Block Card",
    },
    {
      icon: <BanknoteIcon className="w-5 h-5 text-blue-600" />,
      label: "Transfers",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <QuickAction
          key={index}
          icon={action.icon}
          label={action.label}
          onClick={() => console.log(`${action.label} clicked`)}
        />
      ))}
    </div>
  );
}
