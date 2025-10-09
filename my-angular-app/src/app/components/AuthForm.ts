
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: '../pages/AuthForm.html',
})
export class AuthForm {
  isLoginMode = signal(true);

  email = '';
  password = '';
  confirmPassword = '';

  constructor(private http:HttpClient, private router:Router){}

  toggleMode(event: Event) {
    event.preventDefault();
    this.isLoginMode.set(!this.isLoginMode());
  }

  onSubmit() {
    if (this.isLoginMode()) {
      alert(`Logged in as ${this.email}`);
      this.http.post("http://localhost:5000/auth/login", {
        email: this.email,
        password: this.password
      }).subscribe({
        next: (response) => {
          localStorage.setItem("auth_token", (response as any).token);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error("Login failed", error);
        }
      });

    } else {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
    }
  }
}
