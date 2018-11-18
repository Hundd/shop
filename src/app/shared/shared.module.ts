import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HoveredDirective } from './hovered.directive';
import { ClickNMarkDirective } from './click-n-mark.directive';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    HoveredDirective,
    ClickNMarkDirective,
    ContactUsComponent,
    OrderByPipe
  ],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule],
  exports: [
    HoveredDirective,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ContactUsComponent,
    ClickNMarkDirective,
    OrderByPipe
  ]
})
export class SharedModule {}
