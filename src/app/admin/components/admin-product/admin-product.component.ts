import { ProductCategory } from '@models/product.model';
import { IProduct } from '@models/product.model';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

const DEFAULT_PHOTO = '/assets/images/placeholder.png';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {
  @Input()
  product: IProduct;

  @Input()
  isNew: boolean;

  @Output()
  save: EventEmitter<IProduct> = new EventEmitter();

  @Output()
  delete: EventEmitter<IProduct> = new EventEmitter();

  public displayedCategory: string;
  public photo: string;
  public checked: number;

  categories = ['Laptop', 'Desktop', 'SmartPhone', 'Tablet', 'EBook'];

  displayedCategories = this.categories.map(category => ({
    name: category,
    value: ProductCategory[category]
  }));

  private originalProduct: IProduct;

  constructor() {}

  ngOnInit() {
    this.originalProduct = { ...this.product };
    this.displayedCategory = ProductCategory[this.product.category];
    this.photo = this.product.photo || DEFAULT_PHOTO;
    this.checked = Date.now();
  }

  onSave() {
    this.save.emit(this.product);
  }

  onReset() {
    this.product = { ...this.originalProduct };
  }

  onDelete() {
    this.delete.emit(this.product);
  }

  valid(): boolean {
    return (
      this.product.description &&
      this.product.name &&
      this.product.isAvailable !== undefined &&
      this.product.price !== undefined &&
      this.product.category !== undefined
    );
  }
}
