import { Injectable } from '@angular/core';

import { ProductCategory } from './../models/product.model';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Promise<Array<IProduct>> {
    return Promise.resolve([
      {
        id: Math.round(Math.random() * 1000).toString(),
        name: 'Motorola DynaTAC',
        description: 'Commercial portable cellular phone',
        price: 1299,
        category: ProductCategory.SmartPhone,
        isAvailable: true,
        photo: '/assets/images/phone.jpg'
      },
      {
        id: Math.round(Math.random() * 1000).toString(),
        name: 'Nokia N800',
        description:
          'Tablet with no support for GSM voice communication, SMS, and MMS.',
        price: 1999,
        category: ProductCategory.Tablet,
        isAvailable: true,
        photo: '/assets/images/tablet.jpg'
      },
      {
        id: Math.round(Math.random() * 1000).toString(),
        name: 'Toughbook CF-29',
        description:
          'Toughbook is a trademarked brand name owned by Panasonic Corporation and refers to its line of rugged computers',
        price: 2499,
        category: ProductCategory.Laptop,
        isAvailable: false,
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Panasonic_cf-29.jpg/300px-Panasonic_cf-29.jpg'
      },
      {
        id: Math.round(Math.random() * 1000).toString(),
        name: 'IBM 5150',
        description:
          'The IBM Personal Computer, commonly known as the IBM PC, is the original version and progenitor of the\
           IBM PC compatible hardware platform.',
        price: 399,
        category: ProductCategory.Desktop,
        isAvailable: false,
        photo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ibm_pc_5150.jpg/220px-Ibm_pc_5150.jpg'
      }
    ]);
  }
}
