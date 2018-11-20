import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { ProductCategory, IProduct } from './../../models/product.model';

const DEFAULT_PHOTO = '/assets/images/placeholder.png';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()
  product: IProduct;

  @Output()
  buy: EventEmitter<IProduct> = new EventEmitter();

  @Output()
  openCart: EventEmitter<void> = new EventEmitter();

  public displayedCategory: string;
  public photo: string;

  constructor() {}

  ngOnInit() {
    this.displayedCategory = ProductCategory[this.product.category];
    this.photo = this.product.photo || DEFAULT_PHOTO;
  }

  onBuy() {
    this.product.isInCart = true;

    this.buy.emit(this.product);
  }

  onOpenCart() {
    this.openCart.emit();
  }
}
