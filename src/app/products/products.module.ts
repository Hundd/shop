import { ProductCommentsComponent } from './components/product-comments/product-comments.component';
import { ProductsRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCommentsComponent
  ],
  imports: [CommonModule, SharedModule, ProductsRoutingModule],
  exports: [ProductListComponent]
})
export class ProductsModule {}
