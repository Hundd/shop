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
}

function buildProduct(product): IProduct {
  return {
    ...product,
    category: ProductCategory[product.category]
  };
}
