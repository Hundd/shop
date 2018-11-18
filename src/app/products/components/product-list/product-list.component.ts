import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../services/product.service';
import { CartService } from './../../../cart/services/cart.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Promise<IProduct[]>;

  fieldNames = [
    { key: 'name', name: 'Name' },
    { key: 'price', name: 'Price' },
    { key: 'isAvailable', name: 'Available' }
  ];

  ordering: string;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onBuy(product: IProduct) {
    this.cartService.addProduct(product);
  }
}
