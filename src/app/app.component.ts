import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegationViewModule } from './navegation-view/navegation-view.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavegationViewModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Siste+';
}
