import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { MainModule } from './main/main.module';
import { FooterModule } from './footer/footer.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarModule,MainModule,FooterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SystePlus';
}
