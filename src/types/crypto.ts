export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  balance: number;
  value: number;
  change24h: number;
  icon: string;
}