export interface Payment {
  customer: {
    id: string;
    name: string;
    company: string;
    email: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
  };
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
