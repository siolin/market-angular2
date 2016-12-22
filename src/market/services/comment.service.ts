import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {AuthService} from './auth.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {
  token: string;
  constructor(
    private http: Http,
    private authService: AuthService
  ) {
    this.token = this.authService.getToken();
  }

  getComments(id: Number) {
    let headers = new Headers({ 'Authorization': `Token ${this.token}` });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`http://smktesting.herokuapp.com/api/reviews/${id}`, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.errorComment);
  }

  addComment(id: Number, data: Object) {
    let headers = new Headers({ 'Authorization': `Token ${this.token}` });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`http://smktesting.herokuapp.com/api/reviews/${id}`, data, options)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.errorComment);
  }

  errorComment(error: any): Observable<any> {
    return error;
  }

}
