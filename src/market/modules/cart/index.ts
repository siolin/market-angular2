import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing} from './routes';
import {Ng2Webstorage} from 'ng2-webstorage';

import { AuthService } from '../../services/auth.service';
import { CanActivateTeam, Permissions, UserToken } from '../../services/can-activate.service';

import {CartComponent} from './cart';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    Ng2Webstorage
  ],
  declarations: [
    CartComponent
  ],
  providers: [ AuthService, CanActivateTeam, Permissions, UserToken ],
  bootstrap: [CartComponent]
})
export class CartModule {}
