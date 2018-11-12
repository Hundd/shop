export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
  id: string;
  photo?: string;
}

export interface IUniqProduct {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export class IProduct implements IProduct {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
}

export enum ProductCategory {
  Laptop,
  Desktop,
  SmartPhone,
  Tablet,
  EBook
}
