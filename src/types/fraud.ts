export interface FraudAgent {
  name: string;
  department: string;
  email: string;
  phone: string;
}

export interface ClaimUpdate {
  date: string;
  message: string;
}

export interface TransactionDetails {
  title: string;
  reference: string;
  merchantId?: string;
  time: string;
  location?: string;
}

export interface FraudClaim {
  id: string;
  date: string;
  type: string;
  amount: number;
  status: 'AWAITING_AGENT' | 'INVESTIGATING' | 'RESOLVED' | 'REJECTED';
  description: string;
  lastUpdate: string;
  agent?: FraudAgent;
  updates?: ClaimUpdate[];
  transactionDetails?: TransactionDetails;
}