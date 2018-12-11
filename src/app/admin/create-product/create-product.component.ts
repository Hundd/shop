import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit() {}

  onSave(product) {
    this.productService.createProduct(product).subscribe(() => {
      alert('Product created!');
    });
  }
}
