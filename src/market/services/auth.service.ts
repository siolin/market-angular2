import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {LocalStorageService} from 'ng2-webstorage';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  constructor(
    private http: Http,
    private storage: LocalStorageService
  ) { }

  getToken(): string {
    return this.storage.retrieve('token');
  }

  login(data: Object): Observable<any> {
    return this.http.post('http://smktesting.herokuapp.com/api/login/', data)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.errorAuth);
  }

  register(data: Object): Observable<any> {
    return this.http.post('http://smktesting.herokuapp.com/api/register/', data)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.errorAuth);
  }

  errorAuth(error: Observable<any>) {
    return error;
  }

}
