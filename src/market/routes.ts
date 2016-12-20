/// <reference path="../../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main';
import {LoginComponent} from './pages/login/login';
import {RegistrateComponent} from './pages/registrate/registrate';
import {ProductComponent} from './pages/product/product';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrate',
    component: RegistrateComponent
  },
  {
    path: 'product',
    component: ProductComponent
  }
];

export const routing = RouterModule.forRoot(routes);
