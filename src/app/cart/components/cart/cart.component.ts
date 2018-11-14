import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CartService } from './../../services/cart.service';
import { IUniqProduct } from './../../../products/models/product.model';
import { CartPopupService } from '../../services/cart-popup.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public uniqProducts$: Observable<IUniqProduct[]>;
  public totalSum$: Observable<number>;
  public count$: Observable<number>;

  constructor(
    private cartService: CartService,
    private cartPopupService: CartPopupService
  ) {}

  ngOnInit() {
    this.uniqProducts$ = this.cartService.products$;
    this.totalSum$ = this.cartService.getTotalSum();
    this.count$ = this.cartService.getTotalCount();
  }

  onOpenCart() {
    this.cartPopupService.openCart();
  }
}
