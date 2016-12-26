/* Angular component */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Opensource components */
import { Ng2Webstorage } from 'ng2-webstorage';

/* Custom components */
import { ToasterModule } from 'angular2-toaster';

import { routing, RootComponent } from './routes';

import { HeaderComponent } from './components/header/header';
import { UserComponent } from './components/user/user';
import { LoginComponent } from './pages/login/login.component';
import { RegistrateComponent } from './pages/registrate/registrate.component';
import { ListComponent } from './pages/list/list';
import { ProductComponent } from './pages/product/product';
import { LogoutDirective } from './directives/logout';
import { AuthService } from './services/auth.service';
import { CanActivateTeam, Permissions, UserToken } from './services/can-activate.service';

/* Cart Module */
import { CartModule } from './modules/cart';
import { AddCartButtonComponent } from './modules/cart/components/add-cart-button/add-cart-button.component';
import { CartButtonComponent } from './modules/cart/components/cart-button/cart-button.component';
import { CartService } from './modules/cart/services/cart.service';
import { PopUpCartComponent } from './modules/cart/components/pop-up-cart/pop-up-cart.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    Ng2Webstorage,
    CartModule,
    ToasterModule
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
    CartButtonComponent,
    PopUpCartComponent
  ],
  providers: [ AuthService, CartService, CanActivateTeam, Permissions, UserToken ],
  bootstrap: [ RootComponent ]
})
export class MarketModule {}
