import { Component, Input, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { CartService } from 'src/app/services/cart.service';
import Product from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  isInCart: boolean = false;

  constructor(private toast: NgToastService, private cartServ: CartService) {}

  ngOnInit(): void {}

  addToCartHandler = () => {
    this.isInCart = true;
    this.cartServ.addToCart(this.product);
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Added to cart',
      duration: 3000,
    });
  };

  removeFromCartHandler = () => {
    this.isInCart = false;
    this.cartServ.removeFromCart(this.product);
    this.toast.info({
      detail: 'INFO',
      summary: 'Removed from the cart',
      duration: 3000,
    });
  };
}
