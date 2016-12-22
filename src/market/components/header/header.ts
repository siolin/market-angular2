import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'site-header',
  template: require('./header.html')
})

export class HeaderComponent {
  siteName: string;

  constructor(
    private authService: AuthService
  ) {
    this.siteName = 'Market';
  }

  checkAuth() {
    return this.authService.getToken();
  }
}
