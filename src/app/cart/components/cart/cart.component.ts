import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CartService } from './../../services/cart.service';
import { IUniqProduct } from './../../../products/models/product.model';
import { Observable } from 'rxjs';
import { CartListComponent } from '../cart-list/cart-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public uniqProducts$: Observable<IUniqProduct[]>;
  public totalSum$: Observable<number>;
  public count$: Observable<number>;

  constructor(private cartService: CartService, private matDialog: MatDialog) {}

  ngOnInit() {
    this.uniqProducts$ = this.cartService.products$;
    this.totalSum$ = this.cartService.getTotalSum();
    this.count$ = this.cartService.getTotalCount();
  }

  onOpenCart() {
    this.matDialog.open(CartListComponent);
  }
}
