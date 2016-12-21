import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'user',
  template: require('./user.html'),
  providers: [AuthService]
})

export class UserComponent {
  token: any;
  state: string;

  constructor(private authService: AuthService) {
    this.token = this.authService.getToken();
  }

  onClickLogout(e: any) {
    e.preventDefault();
    this.token= this.authService.getToken();
  }
}
