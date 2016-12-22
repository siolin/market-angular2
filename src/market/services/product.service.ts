import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
  productUrl: string = 'http://smktesting.herokuapp.com/api/products/';

  constructor(
    private http: Http
  ) { }

  getProducts(): Observable<any> {
    return this.http.get(this.productUrl)
      .map((res: Response) => {
        return res.json();
      })
      .catch(this.errorProducts);
  }

  errorProducts(error: Observable<any>) {
    return error;
  }
}
