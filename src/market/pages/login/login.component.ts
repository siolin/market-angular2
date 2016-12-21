import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ng2-webstorage/';

import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'login',
  template: require('./login.html'),
  providers: [AuthService]
})

export class LoginComponent {
    errorRegistrate: any = {
    status: false,
    message: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: LocalStorageService
  ) {}

  onSubmit(f: NgForm, e: any) {
    this.authService.login(f.value)
      .subscribe((data: any) => {
        if (data.success === true) {
          this.storage.store('token', data.token);
          this.router.navigate(['']);
        } else {
          this.errorRegistrate.status = true;
          this.errorRegistrate.message = data.message;
        }
    });
  }
}
