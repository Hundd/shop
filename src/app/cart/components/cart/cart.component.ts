import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { CartService } from './../../services/cart.service';
import {
  IProduct,
  IUniqProduct
} from './../../../products/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input()
  private products: IProduct[];

  public uniqProducts: IUniqProduct[];
  public totalSum: number;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.uniqProducts = this.cartService.getUniqProducts(this.products);
    this.totalSum = this.products.reduce(
      (acc, product) => acc + product.price,
      0
    );
  }
}
