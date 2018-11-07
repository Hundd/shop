import { Injectable } from '@angular/core';

import { IProduct, IUniqProduct } from './../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getUniqProducts(products: IProduct[]): IUniqProduct[] {
    const uniqMap = new Map<IProduct>();

    products.forEach((product: IProduct) => {
      if (uniqMap.has(product)) {
        return uniqMap.set(product, uniqMap.get(product) + 1);
      }
      uniqMap.set(product, 1);
    });

    return Array.from(uniqMap).map(
      ([product, quantity]: [IProduct, number]) => ({
        name: product.name,
        quantity
      })
    );
  }

  getTotalSum(products: IProduct[]) {
    return products.reduce((acc, product) => acc + product.price, 0);
  }
}
