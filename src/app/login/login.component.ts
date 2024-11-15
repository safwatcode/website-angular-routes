import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private _router: Router, private _auth: AuthService) {}

  loginForm: FormGroup = new FormGroup({
    // controls
    username: new FormControl(''),
    password: new FormControl(''),
  });



  errorMessage: string = '';
  login() {
    const { username, password } = this.loginForm.value;
    this._auth.postLogin(username, password).subscribe({
      next: () => {
        this._router.navigate(['dashboard']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        console.log(err);
      },
    });

    // emilys emilyspass
    // if (username === 'admin' && password === 'admin') {
    //   this._router.navigate(['dashboard']);
    //   console.log(this.loginForm.value);
    // } else {
    //   alert('wrong username or password');
    // }

    // console.log(this.loginForm.value.username);
    // console.log(this.loginForm.value.password);
    // console.log('login successful');
  }
}
