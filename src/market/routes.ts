/// <reference path="../../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {MainComponent} from './main';
import { ListComponent } from './pages/list/list';
import {LoginComponent} from './pages/login/login.component';
import {RegistrateComponent} from './pages/registrate/registrate.component';
import {ProductComponent} from './pages/product/product';
import { CanActivateTeam } from './services/can-activate.service';

@Component({
  selector: 'fountain-root',
  template: `
    <site-header></site-header>
    <router-outlet></router-outlet>
  `
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
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
    path: 'product/:id',
    component: ProductComponent,
    canActivate: [CanActivateTeam]
  }
];

export const routing = RouterModule.forRoot(routes);
