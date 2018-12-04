import { CartService } from './../../services/cart.service';
import { Observable } from 'rxjs';
import { IUniqProduct } from './../../../products/models/product.model';
import { ProductService } from './../../../products/services/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit {
  products$: Observable<IUniqProduct[]>;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(this.getProducts());
    this.products$ = this.cartService.products$;
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

  private getProducts(): (value: Params) => void {
    return params => {
      Object.keys(params)
        .map(id => this.productService.getProductById(id))
        .forEach(promise =>
          promise.then(product => {
            const uniqProduct = {
              ...product,
              quantity: params[product.id],
              product
            };

            this.cartService.addProduct(
              uniqProduct,
              parseInt(uniqProduct.quantity)
            );
          })
        );
    };
  }
}
