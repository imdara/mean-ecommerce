import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private toast: NgToastService, private userServ: UsersService) {}

  hide = true;
  email = '';
  password = '';

  ngOnInit(): void {}

  submitHandler = (event: any) => {
    event.preventDefault();
    this.userServ
      .login({
        email: this.email,
        password: this.password,
      })
      .subscribe((res: any) =>
        res.message == 'User logged in successfully'
          ? this.toast.success({
              detail: 'SUCCESS',
              summary: res.message,
              duration: 3000,
            })
          : this.toast.error({
              detail: 'ERROR',
              summary: res.message,
              duration: 3000,
            })
      );
  };
}
