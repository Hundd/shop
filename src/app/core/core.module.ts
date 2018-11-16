import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartModule } from '../cart/cart.module';
import { ConstantsService, appInfo } from './constants.service';
import { GeneratorService, GeneratorFactory } from './generator.service';

const randomStringLength = 32;

@NgModule({
  declarations: [],
  providers: [
    { provide: ConstantsService, useValue: appInfo },
    {
      provide: GeneratorService,
      useFactory: GeneratorFactory(randomStringLength)
    }
  ],
  imports: [CommonModule, CartModule]
})
export class CoreModule {}
