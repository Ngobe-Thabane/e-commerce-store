import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { NavBarComponent } from "./features/navbar/navbar.component";
import { AuthService } from './features/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './core/shared/homepage.component.html',
  standalone: true,
  imports: [RouterModule, NavBarComponent],

})
export class App {
  protected readonly title = signal('my-angular-app');

  constructor(private authService:AuthService){
    this.authService.restoresession();
  }

}
