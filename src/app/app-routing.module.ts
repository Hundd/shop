import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { PathNotFoundComponentComponent } from './pages/path-not-found-component/path-not-found-component.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent, pathMatch: 'full' },

  { path: '**', component: PathNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
