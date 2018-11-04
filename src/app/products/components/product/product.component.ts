import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { ProductCategory, IProduct } from './../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()
  product: IProduct;

  @Output('buy')
  onBuying: EventEmitter<IProduct> = new EventEmitter();

  public name: string;
  public description: string;
  public price: number;
  public displayedCategory: string;
  public isAvailable: boolean;
  public features?: string[];

  constructor() {}

  ngOnInit() {
    Object.assign(this, this.product);
    this.displayedCategory = ProductCategory[this.product.category];
  }

  onBuy() {
    console.log(`Buying ${this.name}...`);
    this.onBuying.emit(this.product);
  }
}
