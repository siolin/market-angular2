import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { LocalStorageService } from 'ng2-webstorage';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  loginUrl: string = 'http://smktesting.herokuapp.com/api/login/';
  registUrl: string = 'http://smktesting.herokuapp.com/api/register/';

  constructor(
    private http: Http,
    private storage: LocalStorageService
  ) { }

  getToken() {
    return this.storage.retrieve('token');
  }

  login(data: Object) {
    return this.http.post(this.loginUrl, data)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.errorAuth);
  }

  register(data: Object) {
    return this.http.post(this.registUrl, data)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.errorAuth);
  }

  errorAuth(error: Observable<any>) {
    return error;
  }

}
