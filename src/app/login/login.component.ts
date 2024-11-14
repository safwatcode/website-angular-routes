import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private _router: Router) {}

  loginForm: FormGroup = new FormGroup({
    // controls
    username: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    const { username, password } = this.loginForm.value;
    if (username === 'admin' && password === 'admin') {
      this._router.navigate(['dashboard']);
      console.log(this.loginForm.value);
    } else {
      alert('wrong username or password');
    }

    // console.log(this.loginForm.value.username);
    // console.log(this.loginForm.value.password);
    // console.log('login successful');
  }
}
