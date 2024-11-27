export const TRANSACTION_TYPES = {
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT'
} as const;

export const ACCOUNT_TYPES = {
  CURRENT: 'CURRENT',
  SAVINGS: 'SAVINGS',
  CREDIT: 'CREDIT'
} as const;

export const FRAUD_CLAIM_STATUS = {
  AWAITING_AGENT: 'AWAITING_AGENT',
  INVESTIGATING: 'INVESTIGATING',
  RESOLVED: 'RESOLVED',
  REJECTED: 'REJECTED'
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'Security', href: '#security' },
  { label: 'Pricing', href: '#pricing' }
] as const;