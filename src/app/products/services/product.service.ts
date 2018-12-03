import { Injectable } from '@angular/core';

import { ProductCategory } from './../models/product.model';
import { IProduct } from '../models/product.model';
import products from './productsData.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Promise<Array<IProduct>> {
    return Promise.resolve(products.map(product => buildProduct(product)));
  }

  getProductById(id: string): Promise<IProduct | null> {
    const product = products.find(product => product.id === id);

    return product
      ? Promise.resolve(buildProduct(product))
      : Promise.resolve(null);
  }
}

function buildProduct(product): IProduct {
  return {
    ...product,
    category: ProductCategory[product.category]
  };
}
