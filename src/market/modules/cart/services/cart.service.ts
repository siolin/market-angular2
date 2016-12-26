import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

import { filter } from 'lodash';

@Injectable()
export class CartService {
  products: any;

  constructor(
    private storage: LocalStorageService
  ) {
    this.products = this.storage.retrieve('cart') || [];
  }

  addProduct(id: string, title: string, img: string) {
    let data = {
      price: Math.ceil(Math.random() * 100),
      count: 1,
      title,
      img,
      id
    };
    this.products.push(data);
    this.storage.store('cart', this.products);
  }

  getProducts() {
    return this.storage.retrieve('cart') || [];
  }

  getTotalPrice(id: number) {
    const obj = this.products.filter(el => {
      if (el.id === id) {
        return false;
      }
      return true;
    });
    return obj.count * obj.price;
  }

  checkProduct(id: number) {
    if (this.products) {
      const result = this.products.find(el => {
        if (el.id === id) {
          return true;
        }
      });
      return !!result;
    }
  }

  countProducts() {
    if (this.products) {
      return this.products.length;
    }
    return 0;
  }

  updateProduct(id: number, count: number) {
    const obj = this.products.map(el => {
      if (el.id === id) {
        el.count = count;
        el.totalPrice = el.price * count;
      }
      return el;
    });
    this.storage.store('cart', obj);
  }

  deleteProduct(id: number) {
    const obj = this.products.filter(el => {
      if (el.id === id) {
        return false;
      }
      return true;
    });
    this.storage.store('cart', obj);
    this.products = obj;
    return true;
  }
}
