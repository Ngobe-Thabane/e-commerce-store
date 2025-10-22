import { computed, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

export class NavBarPresenter {
  private authService = inject(AuthService);

  currentUser = this.authService.currentUser;



  isLoggedIn = computed(() => !!this.currentUser());
  displayName = computed(() => this.currentUser()?.email ?? 'Guest');

  logout() {
    this.authService.logout();
  }
}
