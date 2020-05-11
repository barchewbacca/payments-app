export interface Refund {
  id: string;
  paymentId: string;
  amount: {
    currency: string;
    value: number;
  };
  description: string;
  createdAt: string;
  status: string;
}
