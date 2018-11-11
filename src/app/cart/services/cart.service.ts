import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { flatMap, reduce, map } from 'rxjs/operators';

import { IProduct, IUniqProduct } from './../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsMap: Map<string, IUniqProduct> = new Map();
  private products: BehaviorSubject<IUniqProduct[]> = new BehaviorSubject([]);

  public products$ = this.products.asObservable();

  getUniqProducts(): IUniqProduct[] {
    const uniqMap = new Map<IProduct>();

    return Array.from(this.productsMap).map(
      ([productId, product]: [string, IUniqProduct]) => product
    );
  }

  getTotalSum() {
    return this.products$.pipe(
      map(products =>
        products.reduce(
          (acc: number, product: IUniqProduct) =>
            acc + product.price * product.quantity,
          0
        )
      )
    );
  }

  getTotalCount() {
    return this.products$.pipe(
      map(products =>
        products.reduce(
          (acc: number, product: IUniqProduct) => acc + product.quantity,
          0
        )
      )
    );
  }

  addProduct(product: IProduct) {
    if (this.productsMap.has(product.id)) {
      const currentProduct = this.productsMap.get(product.id);

      this.productsMap.set(product.id, {
        ...currentProduct,
        quantity: currentProduct.quantity + 1
      });
    } else {
      this.productsMap.set(product.id, {
        name: product.name,
        id: product.id,
        price: product.price,
        quantity: 1
      });
    }

    this.products.next(this.getUniqProducts());
  }
}
