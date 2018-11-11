import { Input, Component, OnInit } from '@angular/core';

import { CartService } from './../../services/cart.service';
import {
  IProduct,
  IUniqProduct
} from './../../../products/models/product.model';
import { Observable, from } from 'rxjs';
import { switchMap, reduce, flatMap, tap, scan } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public uniqProducts$: Observable<IUniqProduct[]>;
  public totalSum$: Observable<number>;
  public count$: Observable<number>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.uniqProducts$ = this.cartService.products$;
    this.totalSum$ = this.cartService.getTotalSum();
    this.count$ = this.cartService.getTotalCount();
    // this.uniqProducts$.subscribe(product => console.log(product));

    this.totalSum$.subscribe((val: number) => console.log(val));
  }
}
