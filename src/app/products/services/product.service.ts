import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductCategory, IProduct } from '@models/product.model';
import { ApiService } from '@core/api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient, private api: ApiService) {}

  getProducts(): Promise<Array<IProduct>> {
    return this.http
      .get(this.api.products)
      .toPromise()
      .then((products: any[]) =>
        products.map(product => buildProduct(product))
      );
  }

  getProductById(id: string): Promise<IProduct | null> {
    return this.http
      .get(this.api.product(id))
      .pipe(map(product => buildProduct(product)))
      .toPromise();
  }
}

function buildProduct(product): IProduct {
  return {
    ...product,
    category: ProductCategory[product.category]
  };
}
