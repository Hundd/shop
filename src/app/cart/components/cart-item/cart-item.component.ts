import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { IUniqProduct } from 'src/app/products/models/product.model';

const MAX_PRODUCTS_IN_CART = 999;

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements AfterViewInit, OnDestroy {
  @Input() product: IUniqProduct;

  @Output('change-quantity') change: EventEmitter<
    IUniqProduct
  > = new EventEmitter();

  @Output() delete: EventEmitter<IUniqProduct> = new EventEmitter();

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (event.deltaY < 0 && this.product.quantity < MAX_PRODUCTS_IN_CART) {
      this.product.quantity += 1;
      this.change.emit(this.product);

      return;
    }

    if (event.deltaY > 0 && this.product.quantity > 1) {
      this.product.quantity -= 1;
      this.change.emit(this.product);
    }
  }

  @ViewChild('quantityInput') inputField: ElementRef;

  private inputSubscription: Subscription;
  constructor() {}

  ngAfterViewInit() {
    this.inputSubscription = fromEvent(this.inputField.nativeElement, 'input')
      .pipe(debounceTime(500))
      .subscribe(() => this.quantityChange());
  }

  ngOnDestroy() {
    this.inputSubscription.unsubscribe();
  }

  onDelete() {
    this.delete.next(this.product);
  }

  quantityChange() {
    if (this.product.quantity < 1) {
      this.product.quantity = 1;

      return;
    }

    if (this.product.quantity > MAX_PRODUCTS_IN_CART) {
      this.product.quantity = MAX_PRODUCTS_IN_CART;

      return;
    }

    this.change.emit(this.product);
  }
}
