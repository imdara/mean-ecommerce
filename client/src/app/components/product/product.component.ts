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
  starsArray: any[] = [];

  calculateStars = () => {
    for (let i = 0; i < Math.round(+this.product.rating); i++) {
      this.starsArray[i] = i + 1;
    }
  };

  constructor(private toast: NgToastService, private cartServ: CartService) {}

  ngOnInit(): void {
    this.calculateStars();
  }

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
