import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ProductService } from './../../services/product.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: IProduct[];

  constructor(private productService: ProductService) {}

  @Output()
  buy: EventEmitter<IProduct> = new EventEmitter();

  ngOnInit() {
    this.productService
      .getProducts()
      .then(products => (this.products = products));
  }

  onBuy(product) {
    this.buy.emit(product);
  }
}
