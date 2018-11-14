import { NgModule } from '@angular/core';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartComponent, CartListComponent, CartItemComponent],
  imports: [SharedModule],
  exports: [CartComponent, CartListComponent, CartItemComponent],
  entryComponents: [CartListComponent]
})
export class CartModule {}
