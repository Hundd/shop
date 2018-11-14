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

export class Product implements IProduct {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: ProductCategory,
    public isAvailable: boolean,
    public id: string,
    public photo?: string
  ) {}
}

export enum ProductCategory {
  Laptop,
  Desktop,
  SmartPhone,
  Tablet,
  EBook
}
