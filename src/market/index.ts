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
import {requestOptionsProvider} from './services/default-request-options.service';

import {MainComponent} from './main';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    Ng2Webstorage
  ],
  declarations: [
    RootComponent,
    HeaderComponent,
    UserComponent,
    LoginComponent,
    RegistrateComponent,
    ListComponent,
    ProductComponent,
    MainComponent,
    LogoutDirective
  ],
  providers: [ requestOptionsProvider ],
  bootstrap: [RootComponent]
})
export class MarketModule {}
