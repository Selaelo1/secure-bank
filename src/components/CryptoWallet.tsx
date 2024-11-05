import { useState } from "react";
import {
  Bitcoin,
  ArrowUpRight,
  ArrowDownRight,
  Send,
  Wallet,
  Eye,
  EyeOff,
} from "lucide-react";
import { CryptoAsset } from "../types/crypto";
import { CryptoModal } from "./CryptoModal";

interface CryptoWalletProps {
  isDuressMode: boolean;
}

export function CryptoWallet({ isDuressMode }: CryptoWalletProps) {
  const [modalType, setModalType] = useState<
    "send" | "receive" | "buy" | "swap" | null
  >(null);
  const [hiddenBalances, setHiddenBalances] = useState<Set<string>>(new Set());

  const assets: CryptoAsset[] = [
    {
      id: "1",
      symbol: "BTC",
      name: "Bitcoin",
      balance: isDuressMode ? 0.05 : 0.45,
      value: isDuressMode ? 3500 : 31500,
      change24h: 2.5,
      icon: "₿",
    },
    {
      id: "2",
      symbol: "ETH",
      name: "Ethereum",
      balance: isDuressMode ? 0.8 : 4.2,
      value: isDuressMode ? 2100 : 12600,
      change24h: -1.2,
      icon: "Ξ",
    },
  ];

  const toggleBalance = (assetId: string) => {
    setHiddenBalances((prev) => {
      const newHidden = new Set(prev);
      if (newHidden.has(assetId)) {
        newHidden.delete(assetId);
      } else {
        newHidden.add(assetId);
      }
      return newHidden;
    });
  };

  const QuickAction = ({
    icon: Icon,
    label,
    onClick,
  }: {
    icon: any;
    label: string;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className="flex flex-col items-center p-3 hover:bg-blue-50 rounded-xl transition"
    >
      <div className="bg-blue-100 p-2 rounded-full mb-1">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <span className="text-sm text-gray-600">{label}</span>
    </button>
  );

  return (
    <>
      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Crypto Wallet</h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>

        <div className="grid gap-4 mb-6">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-mono text-blue-600">
                  {asset.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{asset.name}</h3>
                  <p className="text-sm text-gray-500">
                    {hiddenBalances.has(asset.id)
                      ? "••••••"
                      : `${asset.balance} ${asset.symbol}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="font-medium text-gray-800">
                    {hiddenBalances.has(asset.id)
                      ? "••••••"
                      : `R ${asset.value.toLocaleString("en-ZA")}`}
                  </p>
                  <p
                    className={`text-sm flex items-center justify-end ${
                      asset.change24h >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {asset.change24h >= 0 ? (
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 mr-1" />
                    )}
                    {Math.abs(asset.change24h)}%
                  </p>
                </div>
                <button
                  onClick={() => toggleBalance(asset.id)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  {hiddenBalances.has(asset.id) ? (
                    <Eye className="w-5 h-5 text-gray-600" />
                  ) : (
                    <EyeOff className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2">
          <QuickAction
            icon={Send}
            label="Send"
            onClick={() => setModalType("send")}
          />
          <QuickAction
            icon={ArrowDownRight}
            label="Receive"
            onClick={() => setModalType("receive")}
          />
          <QuickAction
            icon={Bitcoin}
            label="Buy"
            onClick={() => setModalType("buy")}
          />
          <QuickAction
            icon={Wallet}
            label="Swap"
            onClick={() => setModalType("swap")}
          />
        </div>
      </section>

      {modalType && (
        <CryptoModal
          type={modalType}
          onClose={() => setModalType(null)}
          assets={assets}
        />
      )}
    </>
  );
}
