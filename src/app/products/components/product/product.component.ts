import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { ProductCategory, IProduct } from './../../models/product.model';
import { CartPopupService } from 'src/app/cart/services/cart-popup.service';

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

  public name: string;
  public description: string;
  public price: number;
  public displayedCategory: string;
  public isAvailable: boolean;
  public features?: string[];
  public photo: string;
  public isInCart: boolean;

  constructor(private cartPopupService: CartPopupService) {}

  ngOnInit() {
    Object.assign(this, this.product);
    this.displayedCategory = ProductCategory[this.product.category];
    this.photo = this.product.photo || DEFAULT_PHOTO;
  }

  onBuy() {
    this.product.isInCart = true;

    this.buy.emit(this.product);
  }

  onOpenCart() {
    this.cartPopupService.openCart();
  }
}
