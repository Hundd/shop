import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  AfterViewInit
} from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { Subscription, Observable } from 'rxjs';

import { SharedModule } from 'src/app/shared/shared.module';
import { CartService } from '../../services/cart.service';
import { IUniqProduct } from 'src/app/products/models/product.model';

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

  private countSubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<CartListComponent>,
    public cartService: CartService
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

  trackByFn(_, item) {
    return item.id;
  }
}
