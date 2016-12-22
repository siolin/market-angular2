import { Component } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'cart-button',
  template: require('./cart-button.html')
})

export class CartButtonComponent {

  constructor(
    private cartService: CartService
  ) { }

  getCount() {
    return this.cartService.countPoducts();
  }
}
