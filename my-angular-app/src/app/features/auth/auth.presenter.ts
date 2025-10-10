import { inject, Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { User } from "./auth.model";

@Injectable()
export class AuthPresenter{

    isLoginMode = true;

    private authService = inject(AuthService);

    toggleMode(){
        this.isLoginMode = !this.isLoginMode
    }

    login(user:User){
        this.authService.login(user);
    }

    logout(){
        this.authService.logout();
    }

    handleLogin(email:string, password:string){
        return this.authService.handleLogin(email, password);
    }

    handleregister(email:string, password:string, username:string){
        return this.authService.handleRegister(email, password, username);
    }
}