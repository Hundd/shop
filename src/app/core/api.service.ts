import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host = 'http://localhost:1333';
  products = `${this.host}/products`;

  product(id: string) {
    return `${this.products}/${id}`;
  }
}
