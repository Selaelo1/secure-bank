import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Account } from "../types/accounts";

interface AccountCardProps {
  account: Account;
  isDuressMode: boolean;
}

export default function AccountCard({
  account,
  isDuressMode,
}: AccountCardProps) {
  const [isHidden, setIsHidden] = useState(false);
  const displayBalance = isDuressMode
    ? account.balance * 0.02
    : account.balance;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-gray-800">{account.name}</h3>
          <p className="text-sm text-gray-500">{account.accountNumber}</p>
        </div>
        <button
          onClick={() => setIsHidden(!isHidden)}
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          {isHidden ? (
            <Eye className="w-5 h-5" />
          ) : (
            <EyeOff className="w-5 h-5" />
          )}
        </button>
      </div>
      <div className="mt-2">
        <p className="text-2xl font-bold">
          {isHidden
            ? "••••••"
            : `R ${displayBalance.toLocaleString("en-ZA", {
                minimumFractionDigits: 2,
              })}`}
        </p>
      </div>
    </div>
  );
}
