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

import { IUniqProduct } from 'src/app/products/models/product.model';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
    if (event.deltaY < 0) {
      this.product.quantity += 1;
      this.change.emit(this.product);

      return;
    } else if (this.product.quantity > 1) {
      this.product.quantity -= 1;
      this.change.emit(this.product);

      return;
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

  quantityChange() {
    if (this.product.quantity < 1) {
      this.product.quantity = 1;
      return;
    }
    this.change.emit(this.product);
  }

  onDelete() {
    this.delete.next(this.product);
  }
}
