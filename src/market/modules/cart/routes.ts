import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './cart';
import { CanActivateTeam } from '../../services/can-activate.service';

export const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [CanActivateTeam]
  }
];

export const routing = RouterModule.forRoot(routes);
