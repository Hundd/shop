import { Router, Params } from '@angular/router';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  AfterViewInit
} from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { Subscription, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { SharedModule } from '@shared/shared.module';
import { IUniqProduct } from '@models/product.model';

import { CartService } from '../../services/cart.service';

@Component({
  providers: [SharedModule],
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartListComponent implements OnInit, OnDestroy, AfterViewInit {
  products$: Observable<IUniqProduct[]>;
  totalSum$: Observable<number>;
  totalCount$: Observable<number>;

  fieldNames = [
    { key: 'price', name: 'Price' },
    { key: 'quantity', name: 'Quantity' },
    { key: 'name', name: 'Name', ascending: true }
  ];

  ordering: { key; name; ascending? };

  private countSubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<CartListComponent>,
    public cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.products$ = this.cartService.products$;
    this.totalSum$ = this.cartService.getTotalSum();
    this.totalCount$ = this.cartService.getTotalCount();
  }

  ngAfterViewInit() {
    this.countSubscription = this.totalCount$.subscribe(count => {
      if (count <= 0) {
        // Close popup if there is no items
        this.onClose();
      }
    });
  }

  ngOnDestroy() {
    this.countSubscription.unsubscribe();
  }

  onClose() {
    this.dialogRef.close();
  }

  onProductChange(product: IUniqProduct) {
    this.cartService.changeQuantity(product);
  }
  onProductDelete(product: IUniqProduct) {
    this.cartService.deleteProduct(product);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

  onProceedPurchase() {
    this.products$
      .pipe(
        take(1),
        map((products: IUniqProduct[]) =>
          products.reduce(
            (acc, { id, quantity }) => ((acc[id] = quantity), acc),
            {}
          )
        )
      )
      .subscribe(params => {
        console.log(params);
        this.router
          .navigate(['/confirm-order'], { queryParams: params })
          .then(() => this.onClose());
      });
  }

  trackByFn(_, item) {
    return item.id;
  }
}
