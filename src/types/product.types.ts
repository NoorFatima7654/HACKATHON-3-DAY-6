export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
  _id: any;
  description?: string,
  image(image: any): unknown;
  name: string;
  id: number;
  title: string;
  srcUrl: string;
  gallery?: string[];
  price: number;
  discount: Discount;
  rating: number;
};
