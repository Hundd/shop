import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, from, Subscription } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';

import { IUniqProduct } from '@models/product.model';
import { ProductService } from './../../../products/services/product.service';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit, OnDestroy {
  products$: Observable<IUniqProduct[]>;
  subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const subscription = this.route.queryParams.subscribe(params =>
      this.getProducts(params)
    );
    this.products$ = this.cartService.products$;

    this.subscriptions.add(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onProductChange(product: IUniqProduct) {
    this.cartService.changeQuantity(product);
  }
  onProductDelete(product: IUniqProduct) {
    this.cartService.deleteProduct(product);
  }

  calcTotalSum(products: IUniqProduct[]) {
    return products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }

  private getProducts(params: Params): void {
    const subscription = from(Object.keys(params))
      .pipe(
        mergeMap(id => this.productService.getProductById(id)),
        map(product => {
          const uniqProduct = {
            ...product,
            quantity: params[product.id],
            product
          };

          return uniqProduct;
        }),
        tap(uniqProduct =>
          this.cartService.addProduct(
            uniqProduct,
            parseInt(uniqProduct.quantity)
          )
        )
      )
      .subscribe();

    this.subscriptions.add(subscription);
  }
}
