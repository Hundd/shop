import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PathNotFoundComponentComponent } from './pages/path-not-found-component/path-not-found-component.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', component: ProductListComponent, pathMatch: 'full' },
  { path: '**', component: PathNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
