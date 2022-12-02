import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/interfaces/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() product!: Product;

  constructor(private cartServ: CartService) {}

  empty = true;
  cartProducts: any[] = [];

  emptyCartHandler = () => this.cartServ.emptyCart();
  removeFromCartHandler = () => this.cartServ.removeFromCart(this.product);

  ngOnInit(): void {
    this.cartProducts = this.cartServ.getCart();
  }
}
