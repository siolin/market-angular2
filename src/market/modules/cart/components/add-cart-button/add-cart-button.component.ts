import { Component, Input } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'add-cart-button',
  template: require('./add-cart-button.html')
})

export class AddCartButtonComponent {
  @Input() product: string;
  @Input() image: string;
  @Input() ptitle: string;
  buttonDisable: boolean;

  constructor(
    private cartService: CartService
  ) { }

  addProduct() {
    this.cartService.addProduct(this.product, this.ptitle, this.image);
    this.buttonDisable = true;
  }

  ngOnChanges() {
    if (this.product) {
      this.buttonDisable =  this.cartService.checkProduct(+this.product);
    }
  }
}
