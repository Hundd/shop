import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  categories = ['Laptop', 'Desktop', 'SmartPhone', 'Tablet', 'EBook'];
  constructor() {}

  ngOnInit() {}
}
// {
//   "id": "7",
//   "name": "Lorem ipsum product 3",
//   "description": "Lorem ipsum product 3",
//   "price": 19,
//   "category": "Desktop",
//   "isAvailable": true
// }
