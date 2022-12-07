import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/interfaces/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent implements OnInit {
  @Input() product!: Product;

  constructor(private cartServ: CartService) {}

  ngOnInit(): void {}

  removeFromCartHandler = () => this.cartServ.removeFromCart(this.product);
}
