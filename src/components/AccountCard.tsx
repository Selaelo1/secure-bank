import { CreditCard, ArrowRight } from "lucide-react";
import { Account } from "../types/accounts";

interface AccountCardProps {
  account: Account;
  isDuressMode: boolean;
  onSelect: () => void;
}

export default function AccountCard({ account, onSelect }: AccountCardProps) {
  return (
    <div
      onClick={onSelect}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="bg-blue-100 p-2 rounded-lg">
          <CreditCard className="w-6 h-6 text-blue-600" />
        </div>
        <button className="text-blue-600 hover:text-blue-700">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <h3 className="font-medium text-gray-800 mb-1">{account.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{account.accountNumber}</p>

      <div className="text-xl font-bold text-gray-800">
        R{" "}
        {account.balance.toLocaleString("en-ZA", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
    </div>
  );
}
