import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'shop';
  public cartIsNotEmpty$: Observable<boolean>;

  constructor(private cartService: CartService) {
    this.cartIsNotEmpty$ = cartService.products$.pipe(
      map(products => !!(products && products.length))
    );
  }
}
