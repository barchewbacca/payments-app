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
