import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts = () =>
    this.http.get<Product[]>(
      'https://imdaras-ecommerce-backend.onrender.com/api/products'
    );
}
