import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing, RootComponent} from './routes';
import {Ng2Webstorage} from 'ng2-webstorage';

import {HeaderComponent} from './components/header/header';
import {UserComponent} from './components/user/user';
import {LoginComponent} from './pages/login/login.component';
import {RegistrateComponent} from './pages/registrate/registrate.component';
import {ListComponent} from './pages/list/list';
import {ProductComponent} from './pages/product/product';
import {LogoutDirective} from './directives/logout';
import { AuthService } from './services/auth.service';
import { CanActivateTeam, Permissions, UserToken } from './services/can-activate.service';

import { CartModule } from './modules/cart';
import { AddCartButtonComponent } from './modules/cart/components/add-cart-button/add-cart-button.component';
import { CartButtonComponent } from './modules/cart/components/cart-button/cart-button.component';
import { CartService } from './modules/cart/services/cart.service';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    Ng2Webstorage,
    CartModule
  ],
  declarations: [
    RootComponent,
    HeaderComponent,
    UserComponent,
    LoginComponent,
    RegistrateComponent,
    ListComponent,
    ProductComponent,
    LogoutDirective,
    AddCartButtonComponent,
    CartButtonComponent
  ],
  providers: [ AuthService, CartService, CanActivateTeam, Permissions, UserToken ],
  bootstrap: [RootComponent]
})
export class MarketModule {}
