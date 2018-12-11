import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/services/product.service';
import { IProduct } from '@models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  products: Promise<IProduct[]>;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onSave(product) {
    this.productService.updateProduct(product).subscribe(() => {
      alert('Product was updated!');
    });
  }

  onDelete(product) {
    this.productService.deleteProduct(product).subscribe(() => {
      this.products = this.productService.getProducts();
    });
  }

  trackByFn(_, item) {
    return item.id;
  }
}
