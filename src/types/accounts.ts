export interface Account {
  id: string;
  name: string;
  balance: number;
  accountNumber: string;
  type: 'CURRENT' | 'SAVINGS' | 'CREDIT';
}

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;
  type: 'DEBIT' | 'CREDIT';
  category: string;
  location?: string;
  merchantId?: string;
  reference?: string;
  time: string;
  status: 'COMPLETED' | 'PENDING' | 'FAILED';
  icon: React.ReactNode;
}