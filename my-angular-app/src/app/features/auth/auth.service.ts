import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { environment } from '../../../enviroment';
import { User } from './auth.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  private BASE_URL = environment.apiUrl;
  private platformId = inject(PLATFORM_ID);

  currentUser = signal<User | null>(null);


  handleLogin(email: string, password: string) {
    return this.http.post(`${this.BASE_URL}/auth/login`, { email: email, password: password });
  }

  restoresession(){
    if(isPlatformBrowser(this.platformId)){
      const user = localStorage.getItem('auth_user');
      if(user){
        this.currentUser.set(JSON.parse(user));
      }
    }
  }

  login(user: User) {
    this.currentUser.set(user);
    localStorage.setItem('auth_user', JSON.stringify(user));
  }

  logout() {
    this.currentUser.set(null);
    localStorage.removeItem('auth_user');
  }

  handleRegister(email: string, password: string, username: string) {
    return this.http.post(`${this.BASE_URL}/auth/register`, {
      email: email,
      password: password,
      name: username,
    });
  }
}
