import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegationViewModule } from './navegation-view/navegation-view.module';
import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderModule,MainModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Siste+';
}
