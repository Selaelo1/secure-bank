import { useState } from "react";
import { Building, ShoppingCart, Wallet, ArrowDownRight } from "lucide-react";
import { Transaction } from "../types/accounts";
import TransactionModal from "./TransactionModal";

interface TransactionListProps {
  isDuressMode: boolean;
}

export default function TransactionList({
  isDuressMode,
}: TransactionListProps) {
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const transactions: Transaction[] = [
    {
      id: "1",
      title: "Woolworths",
      amount: isDuressMode ? -450.5 : -1450.5,
      date: "2024-03-15",
      time: "14:30:22",
      type: "DEBIT",
      category: "Shopping",
      location: "Sandton City, Johannesburg",
      merchantId: "WW78392",
      reference: "POS Purchase",
      status: "COMPLETED",
      icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
    },
    {
      id: "2",
      title: "Salary Deposit",
      amount: isDuressMode ? 12000 : 52000,
      date: "2024-03-13",
      time: "00:05:00",
      type: "CREDIT",
      category: "Income",
      reference: "SALARY/MAR/2024",
      status: "COMPLETED",
      icon: <ArrowDownRight className="w-5 h-5 text-green-600" />,
    },
    {
      id: "3",
      title: "Cash Send - John",
      amount: isDuressMode ? -200 : -1000,
      date: "2024-03-12",
      time: "16:45:33",
      type: "DEBIT",
      category: "Transfer",
      reference: "CS/89301/JD",
      status: "COMPLETED",
      icon: <Wallet className="w-5 h-5 text-blue-600" />,
    },
    {
      id: "4",
      title: "Electricity Bill",
      amount: isDuressMode ? -350 : -1200,
      date: "2024-03-10",
      time: "09:15:44",
      type: "DEBIT",
      category: "Utilities",
      merchantId: "CITY/PWR/123",
      reference: "ELEC/MAR/2024",
      status: "COMPLETED",
      icon: <Building className="w-5 h-5 text-blue-600" />,
    },
  ];

  const handleReportTransaction = () => {
    alert(
      "Transaction has been reported. Our fraud department will contact you shortly."
    );
    setSelectedTransaction(null);
  };

  return (
    <>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition cursor-pointer"
            onClick={() => setSelectedTransaction(transaction)}
          >
            <div className="flex items-center space-x-3">
              <div className="bg-blue-50 p-2 rounded-full">
                {transaction.icon}
              </div>
              <div>
                <p className="font-medium text-gray-800">{transaction.title}</p>
                <p className="text-sm text-gray-500">
                  {new Date(transaction.date).toLocaleDateString("en-ZA")}
                </p>
              </div>
            </div>
            <span
              className={
                transaction.amount > 0 ? "text-green-600" : "text-gray-800"
              }
            >
              {transaction.amount > 0 ? "+" : ""}R{" "}
              {Math.abs(transaction.amount).toLocaleString("en-ZA", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
        ))}
      </div>

      {selectedTransaction && (
        <TransactionModal
          transaction={selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
          onReport={handleReportTransaction}
        />
      )}
    </>
  );
}
