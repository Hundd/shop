import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HoveredDirective } from './hovered.directive';
import { ClickNMarkDirective } from './click-n-mark.directive';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [HoveredDirective, ClickNMarkDirective, ContactUsComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule],
  exports: [
    HoveredDirective,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ContactUsComponent,
    ClickNMarkDirective
  ]
})
export class SharedModule {}
