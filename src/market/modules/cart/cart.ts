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
    this.products.forEach((el: any) => {
      el.totalPrice = el.count * el.price;
    });
    this.totalPrice();
  }

  /**
   * Up count of product
   */
  up(i: number, id: number) {
    const count: number = this.products[i].count += 1;
    this.products[i].totalPrice = this.products[i].count * this.products[i].price;
    this.totalPrice();
    this.updateCart(id, count);
  }

  /**
   * Down count of product
   */
  down(i: number, id: number) {
    const count: number = this.products[i].count -= 1;
    this.products[i].totalPrice = this.products[i].count * this.products[i].price;
    this.totalPrice();
    this.updateCart(id, count);
  }

  /**
   * Full Price of all products
   */
  totalPrice() {
    this.total = 0;
    if (this.products.length > 0) {
      this.products.forEach((el: any) => {
        this.total += el.price * el.count;
      });
    }
  }

  /**
   * Update data in service
   */
  updateCart(id: number, count: number) {
    this.cartService.updateProduct(id, count);
  }

  /**
   * Detele product form service
   */
  deleteProduct(id: number) {
    if (this.cartService.deleteProduct(id)) {
      this.products = this.cartService.getProducts();
    }
    this.totalPrice();
  }
}
