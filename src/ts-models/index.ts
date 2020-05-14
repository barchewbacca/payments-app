import { RouteComponentProps } from 'react-router-dom';

export interface Payment {
  customer: Customer;
  id: string;
  amount: {
    currency: string;
    value: number;
  };
  createdAt: string;
  status: string;
  method: string;
  description: string;
}

export interface Customer {
  id: string;
  name: string;
  company: string;
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

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

interface MatchParams {
  name: string;
  id: string;
}

export interface MatchProps extends RouteComponentProps<MatchParams> {}
