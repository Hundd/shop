export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
}

export interface IUniqProduct {
  name: string;
  quantity: number;
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
