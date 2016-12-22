import { Injectable } from '@angular/core';

import { LocalStorageService } from 'ng2-webstorage';

@Injectable()
export class CartService {

  constructor(
    private storage: LocalStorageService
  ) { }

  addProduct(id: string, title: string, img: string) {
    let data = {
      id: id,
      totalPrice: 230,
      price: 230,
      count: 1,
      title,
      img
    };
    const totalPrice = data.price * data.count;
    data.totalPrice = totalPrice;
    const cart = this.storage.retrieve('cart') || [];
    cart.push(data);
    this.storage.store('cart', cart);
    // this.$rootScope.$broadcast('cartUpdate');
  }

  getProducts() {
    return this.storage.retrieve('cart');
  }

  checkProduct(product) {
    const cart = this.storage.retrieve('cart');
    if (cart) {
      const result = cart.find(el => {
        if (el.id === product) {
          return true;
        }
      });
      return !!result;
    }
  }

  countPoducts() {
    const data = this.storage.retrieve('cart');
    if (data) {
      return data.length;
    }
    return 0;
  }

  updateProduct(id: number, count: number) {
    console.log(id);
    const data = this.storage.retrieve('cart');
    const obj = data.map(el => {
      if (el.id === id) {
        el.count = count;
        el.totalPrice = el.price * count;
      }
      return el;
    });
    this.storage.store('cart', obj);
  }

  deleteProduct(id: number) {
    const data = this.storage.retrieve('cart');
    const obj = data.filter(el => {
      if (el.id === id) {
        return false;
      }
      return true;
    });
    this.storage.store('cart', obj);
    // this.$rootScope.$broadcast('cartUpdate');
    return true;
  }

}
