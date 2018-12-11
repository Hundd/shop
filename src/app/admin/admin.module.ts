import { SharedModule } from './../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminProductComponent } from './components/admin-product/admin-product.component';

@NgModule({
  declarations: [
    AdminComponent,
    CreateProductComponent,
    EditProductComponent,
    OrdersComponent,
    AdminProductComponent
  ],
  imports: [CommonModule, SharedModule, AdminRoutingModule]
})
export class AdminModule {}
