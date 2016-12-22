import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CartService } from './services/cart.service';

@Component({
  selector: 'cart-page',
  template: require('./cart.html')
})
export class CartComponent {
  total: number;
  products: any;

  constructor(
    private cartService: CartService
  ) {
    this.products = this.cartService.getProducts();
    this.totalPrice();
  }

  up(i: number, id: number) {
    const count: number = this.products[i].count += 1;
    this.products[i].totalPrice = this.products[i].count * this.products[i].price;
    this.totalPrice();
    this.updateCart(id, count);
  }

  down(i: number, id: number) {
    const count: number = this.products[i].count -= 1;
    this.products[i].totalPrice = this.products[i].count * this.products[i].price;
    this.totalPrice();
    this.updateCart(id, count);
  }

  totalPrice() {
    this.total = 0;
    this.products.forEach((el: any) => {
      this.total += el.totalPrice;
    });
  }

  updateCart(id: number, count: number) {
    this.cartService.updateProduct(id, count);
  }

  deleteProduct(id: number) {
    if (this.cartService.deleteProduct(id)) {
      this.products = this.cartService.getProducts();
    }
    this.totalPrice();
  }
}
