import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {HeaderComponent} from './components/header/header';
import {UserComponent} from './components/user/user';
import {LoginComponent} from './pages/login/login';
import {RegistrateComponent} from './pages/registrate/registrate';
import {ListComponent} from './pages/list/list';
import {ProductComponent} from './pages/product/product';

import {MainComponent} from './main';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    HeaderComponent,
    UserComponent,
    LoginComponent,
    RegistrateComponent,
    ListComponent,
    ProductComponent,
    MainComponent
  ],
  bootstrap: [RootComponent]
})
export class MarketModule {}
