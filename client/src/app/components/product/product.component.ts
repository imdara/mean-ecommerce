import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Product from '../../interfaces/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  constructor(private cartServ: CartService) {}

  ngOnInit(): void {}

  addToCartHandler = (product: Product) => this.cartServ.addToCart(product);
}
