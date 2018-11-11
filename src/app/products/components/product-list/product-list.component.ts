import { CartService } from './../../../cart/services/cart.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ProductService } from './../../services/product.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: IProduct[];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .then(products => (this.products = products));
  }

  onBuy(product: IProduct) {
    this.cartService.addProduct(product);
  }
}
