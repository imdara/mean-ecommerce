import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  login = (user: User) =>
    this.http.post('http://localhost:4000/api/auth/login', user);

  signup = (user: User) =>
    this.http.post('http://localhost:4000/api/auth/signup', user);
}
