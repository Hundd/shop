import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppSettingsService } from '@core/app-settings.service';
import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title: ElementRef;
  public cartIsNotEmpty$: Observable<boolean>;

  constructor(
    private cartService: CartService,
    private settings: AppSettingsService
  ) {
    this.cartIsNotEmpty$ = this.cartService.products$.pipe(
      map(products => !!(products && products.length))
    );

    this.settings.init();
  }

  ngAfterViewInit() {
    (this.title.nativeElement as HTMLElement).textContent = 'Angular Shop';
  }
}
