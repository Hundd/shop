import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartService } from './cart/services/cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title: ElementRef;
  public cartIsNotEmpty$: Observable<boolean>;

  constructor(private cartService: CartService) {
    this.cartIsNotEmpty$ = cartService.products$.pipe(
      map(products => !!(products && products.length))
    );
  }

  ngAfterViewInit() {
    (this.title.nativeElement as HTMLElement).textContent = 'Angular Shop';
  }
}
