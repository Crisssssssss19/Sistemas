import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavegationViewModule } from '../navegation-view/navegation-view.module';
import { NavegationViewComponent } from '../navegation-view/navegation-view.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,NavegationViewModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
