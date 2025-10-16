import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../features/navbar/navbar.component';

@Component({
  templateUrl: './homepage.component.html',
  imports: [NavBarComponent, RouterOutlet],
  selector: 'app-homepage',
})
export class HomeComponent {}
