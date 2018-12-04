import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IProduct, IUniqProduct } from './../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsMap: Map<string, IUniqProduct> = new Map();
  private products: BehaviorSubject<IUniqProduct[]> = new BehaviorSubject([]);

  public products$ = this.products.asObservable();

  constructor() {}

  getTotalSum(): Observable<number> {
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

  getTotalCount(): Observable<number> {
    return this.products$.pipe(
      map(products =>
        products.reduce(
          (acc: number, product: IUniqProduct) => acc + product.quantity,
          0
        )
      )
    );
  }

  addProduct(product: IProduct, quantity: number = 1) {
    if (this.productsMap.has(product.id)) {
      const currentProduct = this.productsMap.get(product.id);

      this.productsMap.set(product.id, {
        ...currentProduct,
        quantity: currentProduct.quantity + 1
      });
    } else {
      this.productsMap.set(product.id, {
        product,
        name: product.name,
        id: product.id,
        price: product.price,
        quantity
      });
    }

    this.products.next(this.getUniqProducts());
  }

  changeQuantity(product: IUniqProduct) {
    this.productsMap.set(product.id, {
      ...this.productsMap.get(product.id),
      quantity: product.quantity
    });
    this.products.next(this.getUniqProducts());
  }

  deleteProduct(product: IUniqProduct) {
    //Make product not in cart
    this.productsMap.get(product.id).product.isInCart = false;

    this.productsMap.delete(product.id);
    this.products.next(this.getUniqProducts());
  }

  clearCart() {
    //Make all products not in cart
    this.productsMap.forEach(
      productItem => (productItem.product.isInCart = false)
    );

    this.productsMap.clear();
    this.products.next(this.getUniqProducts());
  }

  private getUniqProducts(): IUniqProduct[] {
    return Array.from(this.productsMap).map(
      ([_, product]: [string, IUniqProduct]) => product
    );
  }
}
