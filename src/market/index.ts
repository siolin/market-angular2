import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {HeaderComponent} from './components/header/header';
import {UserComponent} from './components/user/user';

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
    MainComponent
  ],
  bootstrap: [RootComponent]
})
export class MarketModule {}
