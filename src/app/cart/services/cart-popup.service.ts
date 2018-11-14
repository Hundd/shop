import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CartListComponent } from '../components/cart-list/cart-list.component';

@Injectable({
  providedIn: 'root'
})
export class CartPopupService {
  constructor(private matDialog: MatDialog) {}

  openCart() {
    this.matDialog.open(CartListComponent, { width: ' 720px' });
  }
}
