import { Component, Output, EventEmitter, HostListener } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'pop-up-cart',
  template: require('./pop-up-cart.html')
})
export class PopUpCartComponent {
  @Output() mouse = new EventEmitter();

  @HostListener('mouseenter') onMouseenter() {
    this.mouse.emit({
      show: true
    });
  }

  @HostListener('mouseleave') onMouseleave() {
    this.mouse.emit({
      show: false
    });
  }

  constructor(
    private cartService: CartService
  ) { }

  getProducts() {
    return this.cartService.getProducts();
  }

};
