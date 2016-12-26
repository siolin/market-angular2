import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'site-header',
  template: require('./header.html')
})

export class HeaderComponent {
  siteName: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.siteName = 'Market';
  }

  checkAuth() {
    return this.authService.getToken();
  }

  checkUrl() {
    if (this.router.url === '/cart') {
      return true;
    }
  }
}
