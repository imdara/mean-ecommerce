import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private prodServ: ProductsService) {}

  products: any;

  ngOnInit(): void {
    this.prodServ.getProducts().subscribe((data) => (this.products = data));
  }
}
