import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component'
import { NavbarComponent }   from './navbar/navbar.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyPortfolio';
}
