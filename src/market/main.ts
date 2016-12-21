import {Component} from '@angular/core';
import {ProductService} from './services/product.service';

@Component({
  selector: 'fountain-app',
  template: require('./main.html'),
  providers: [ProductService]
})
export class MainComponent {

  constructor() {
    // this.authService.getProducts();
  }
}
