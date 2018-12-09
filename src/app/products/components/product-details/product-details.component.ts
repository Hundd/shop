import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap, catchError } from 'rxjs/operators';

import { Product, IProduct } from '@models/product.model';
import { CartPopupService } from './../../../cart/services/cart-popup.service';
import { CartService } from './../../../cart/services/cart.service';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: IProduct = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private cartPopupService: CartPopupService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => {
          return params.get('id')
            ? this.productService.getProductById(params.get('id'))
            : Promise.resolve(null);
        })
      )
      .subscribe(
        product => {
          this.product = product;
        },
        err => {
          console.error(err);
          this.router.navigate(['/path-not-found']);
        }
      );
  }

  onBuy(product: IProduct) {
    this.cartService.addProduct(product);
  }
  onOpenCart() {
    this.cartPopupService.openCart();
  }
}
