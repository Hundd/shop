import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCommentsComponent } from './components/product-comments/product-comments.component';

const routes: Routes = [
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    children: [
      {
        path: 'comments',
        component: ProductCommentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
