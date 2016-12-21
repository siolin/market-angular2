import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

import {AuthService} from './auth.service';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

  constructor(
    private authService: AuthService
  ) {
    super();

    // Set the default 'Content-Type' header
    this.headers.set('Authorization:', `Token ${this.authService.getToken()}` );
  }
}

export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };
