import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { NgToastService } from 'ng-angular-popup';
import SignupForm from 'src/app/interfaces/SignupForm';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private toast: NgToastService, private userServ: UsersService) {}

  hide = true;
  signupForm: SignupForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  ngOnInit(): void {}

  submitHandler = () => {
    this.userServ.signup(this.signupForm).subscribe((res: any) =>
      res.message == 'User signed up successfully'
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
