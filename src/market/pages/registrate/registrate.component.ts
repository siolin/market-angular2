import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ng2-webstorage';

import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'registrate',
  template: require('./registrate.html'),
  providers: [AuthService]
})

export class RegistrateComponent {
  errorRegistrate: any = {
    status: false,
    message: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: LocalStorageService
  ) {}

  onSubmit(f: NgForm) {
    if (f.value.password === f.value.cPassword) {
      this.authService.register(f.value)
      .subscribe((data: any) => {
        if (data.success === true) {
          this.storage.store('token', data.token)
          this.router.navigate(['']);
        } else {
          this.errorRegistrate.status = true;
          this.errorRegistrate.message = data.message;
        }
    });
    } else {
      this.errorRegistrate.status = true;
      this.errorRegistrate.message = 'Check our password';
    }
  }
}
