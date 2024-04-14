import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../main/main.component';
import { MisionYVisionComponent } from './mision-yvision/mision-yvision.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { NuestrosLogrosComponent } from './nuestros-logros/nuestros-logros.component';
import { CarruselComponent } from './carrusel/carrusel.component';



@NgModule({
  declarations: [
    MainComponent,
    MisionYVisionComponent,
    ConocenosComponent,
    NuestrosLogrosComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MainComponent]
})
export class MainModule { }
