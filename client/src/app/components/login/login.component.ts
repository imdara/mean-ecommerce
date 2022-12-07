import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { NgToastService } from 'ng-angular-popup';
import LoginForm from 'src/app/interfaces/LoginForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private toast: NgToastService, private userServ: UsersService) {}

  hide = true;
  loginForm: LoginForm = {
    email: '',
    password: '',
  };

  ngOnInit(): void {}

  submitHandler = () => {
    this.userServ.login(this.loginForm).subscribe((res: any) =>
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
