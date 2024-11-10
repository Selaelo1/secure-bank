import { X } from "lucide-react";
import { CryptoAsset } from "../types/crypto";

interface CryptoModalProps {
  type: "send" | "receive" | "buy" | "swap";
  onClose: () => void;
  assets: CryptoAsset[];
}

export function CryptoModal({ type, onClose, assets }: CryptoModalProps) {
  const titles = {
    send: "Send Crypto",
    receive: "Receive Crypto",
    buy: "Buy Crypto",
    swap: "Swap Crypto",
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg my-4">
        <div className="flex justify-between items-center p-4 sm:p-6 border-b">
          <h2 className="text-lg sm:text-xl font-semibold">{titles[type]}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          {type === "send" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Asset
                </label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                  {assets.map((asset) => (
                    <option key={asset.id} value={asset.symbol}>
                      {asset.name} ({asset.balance} {asset.symbol})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recipient Address
                </label>
                <input
                  type="text"
                  placeholder="Enter wallet address"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {type === "receive" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Asset
                </label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                  {assets.map((asset) => (
                    <option key={asset.id} value={asset.symbol}>
                      {asset.name} ({asset.symbol})
                    </option>
                  ))}
                </select>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  Your Wallet Address:
                </p>
                <p className="font-mono text-sm break-all">
                  0x742d35Cc6634C0532925a3b844Bc454e4438f44e
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-48 h-48 bg-gray-100 rounded-lg"></div>
                </div>
              </div>
            </div>
          )}

          {type === "buy" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Asset
                </label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                  {assets.map((asset) => (
                    <option key={asset.id} value={asset.symbol}>
                      {asset.name} ({asset.symbol})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount (ZAR)
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Current Account (*9012)</option>
                  <option>Credit Card (*2345)</option>
                </select>
              </div>
            </div>
          )}

          {type === "swap" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From
                </label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                  {assets.map((asset) => (
                    <option key={asset.id} value={asset.symbol}>
                      {asset.name} ({asset.balance} {asset.symbol})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  To
                </label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                  {assets.map((asset) => (
                    <option key={asset.id} value={asset.symbol}>
                      {asset.name} ({asset.symbol})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-6 border-t">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-xl hover:bg-blue-700 transition"
          >
            {type === "receive" ? "Done" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
