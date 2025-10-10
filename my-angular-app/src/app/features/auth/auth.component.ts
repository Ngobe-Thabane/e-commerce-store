import { Component, inject } from "@angular/core";
import { AuthPresenter } from "./auth.presenter";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from "@angular/common";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth-form',
    standalone: true,
    templateUrl: './auth.view.html',
    imports: [ReactiveFormsModule, CommonModule],
    providers:[AuthPresenter]
})

export class AuthComponent{

    presenter = inject(AuthPresenter);

    form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required])
    })

    
    toggleMode(){
        this.presenter.toggleMode();
    }

    onSubmit(){

        const email = this.form.get('email')?.value as string;
        const password = this.form.get('password')?.value as string;

        if(this.presenter.isLoginMode){
            this.presenter.login({email:email});
        }else{
            this.presenter.login({email:email});
        }
    }

}