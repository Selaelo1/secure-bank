import { Account } from "../types/accounts";
import AccountCard from "./AccountCard";
import QuickActions from "./QuickActions";
import TransactionList from "./TransactionList";
import { CryptoWallet } from "./CryptoWallet";

interface DashboardProps {
  isDuressMode: boolean;
  onSelectAccount: (account: Account) => void; // Accept onSelectAccount as prop
}

export default function Dashboard({
  isDuressMode,
  onSelectAccount,
}: DashboardProps) {
  const accounts: Account[] = [
    {
      id: "1",
      name: "Current Account",
      balance: isDuressMode ? 2500 : 25000,
      accountNumber: "1234 5678 9012",
      type: "CURRENT",
    },
    {
      id: "2",
      name: "Savings Account",
      balance: isDuressMode ? 1500 : 75000,
      accountNumber: "9876 5432 1098",
      type: "SAVINGS",
    },
    {
      id: "3",
      name: "Credit Card",
      balance: isDuressMode ? -500 : -15000,
      accountNumber: "4567 8901 2345",
      type: "CREDIT",
    },
  ];

  return (
    <main className="flex-1 pt-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto pb-8">
      {/* Accounts Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {accounts.map((account) => (
          <AccountCard
            key={account.id}
            account={account}
            isDuressMode={isDuressMode}
            onSelectAccount={onSelectAccount} // Pass onSelectAccount to AccountCard
          />
        ))}
      </div>

      {/* Crypto Wallet Section */}
      <CryptoWallet isDuressMode={isDuressMode} />

      {/* Quick Actions */}
      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Quick Actions
        </h2>
        <QuickActions />
      </section>

      {/* Recent Transactions */}
      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          Recent Transactions
        </h2>
        <TransactionList isDuressMode={isDuressMode} />
      </section>
    </main>
  );
}
