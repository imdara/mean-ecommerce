import { Injectable } from '@angular/core';
import Product from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: Product[] = [];

  getCart = () => this.cart;

  addToCart = (product: Product) => this.cart.push(product);

  removeFromCart = (product: Product) =>
    (this.cart = this.cart.filter((item) => item != product));

  emptyCart = () => {
    this.cart = [];
    return this.cart;
  };
}
