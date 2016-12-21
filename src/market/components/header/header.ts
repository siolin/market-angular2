import {Component} from '@angular/core';

@Component({
  selector: 'site-header',
  template: require('./header.html')
})

export class HeaderComponent {
  siteName: string;

  constructor() {
    this.siteName = 'Market';
  }
}
