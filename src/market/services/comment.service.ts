import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {

  constructor(private http: Http) { }

  getComments(id) {
    return this.http.get(`http://smktesting.herokuapp.com/api/reviews/${id}`)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.errorComment);
  }

  addComment(id, data) {
    return this.http.post(`http://smktesting.herokuapp.com/api/reviews/${id}`, data)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.errorComment);
  }

  errorComment(error): Observable<any> {
    return error;
  }

}
