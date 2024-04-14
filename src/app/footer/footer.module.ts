import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { ContactanosComponent } from './contactanos/contactanos.component';



@NgModule({
  declarations: [
    FooterComponent,
    ContactanosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[FooterComponent]
})
export class FooterModule { }
