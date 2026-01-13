
export type Currency = 'GBP' | 'EUR';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  colors: string[];
  sizes: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export enum Category {
  NewArrivals = 'New Arrivals',
  Essentials = 'Essentials',
  Outerwear = 'Outerwear',
  Accessories = 'Accessories'
}
