import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarPresenter } from "./navbar.preseter";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.view.html',
    standalone: true,
    providers: [NavBarPresenter],
    imports: [CommonModule, RouterModule]

})

export class NavBarComponent{

    presenter = inject(NavBarPresenter);
    
    onLogout(){
        this.presenter.logout();
    }
    
}