import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private toast: NgToastService, private http: HttpClient) {}

  login = (user: any) =>
    this.http.post('http://localhost:4000/api/auth/login', user);

  signup = (user: any) =>
    this.http.post('http://localhost:4000/api/auth/signup', user);
}
