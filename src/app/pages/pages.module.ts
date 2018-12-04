import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathNotFoundComponentComponent } from './path-not-found-component/path-not-found-component.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [PathNotFoundComponentComponent, LoginComponent],
  imports: [CommonModule, SharedModule]
})
export class PagesModule {}
