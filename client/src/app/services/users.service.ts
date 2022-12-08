import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login = (user: any) =>
    this.http.post(
      'https://imdaras-ecommerce-backend.onrender.com/api/auth/login',
      user
    );

  signup = (user: any) =>
    this.http.post(
      'https://imdaras-ecommerce-backend.onrender.com/api/auth/signup',
      user
    );
}
