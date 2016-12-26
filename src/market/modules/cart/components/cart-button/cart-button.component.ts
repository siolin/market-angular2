import { Component, HostListener } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'cart-button',
  template: require('./cart-button.html'),
})

export class CartButtonComponent {
  showPopUp: boolean = false;

  constructor(
    private cartService: CartService
  ) { }

  @HostListener('mouseenter') onMouseenter() {
    this.showPopUp = true;
  }

  getCount() {
    return this.cartService.countPoducts();
  }

  showElement(e: any) {
    this.showPopUp = e.show;
  }


}
