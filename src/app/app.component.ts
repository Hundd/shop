import { Component } from '@angular/core';

import { IProduct } from './products/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'shop';
  public cart: IProduct[] = [];

  onBuying(product: IProduct) {
    this.cart = [...this.cart, product];
  }
}
