import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductCategory, IProduct } from '@models/product.model';
import { ApiService } from '@core/api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient, private api: ApiService) {}

  getProducts(): Promise<Array<IProduct>> {
    return this.http
      .get(this.api.products)
      .pipe(
        map((products: any[]) => products.map(product => buildProduct(product)))
      )
      .toPromise();
  }

  getProductById(id: string): Observable<IProduct | null> {
    return this.http
      .get(this.api.product(id))
      .pipe(map(product => buildProduct(product)));
  }

  createProduct(product) {
    return this.http.post(this.api.products, product);
  }

  updateProduct(product) {
    return this.http.put(this.api.product(product.id), product);
  }

  deleteProduct(product) {
    return this.http.delete(this.api.product(product.id));
  }
}

function buildProduct(product): IProduct {
  return {
    ...product,
    category: ProductCategory[product.category]
  };
}
