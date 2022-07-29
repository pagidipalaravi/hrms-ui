import { Component, OnInit, Output } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  username: string = "";
  password: string = "";

  public router: Router;
  message: string = '';
  error: boolean = false;
  loginMessage: boolean = false;
  successMessage: string = "";
  errorMessage: string = "";
  @Output() isLoggedIn = "false";

  constructor(router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.router = router;
    this.loginForm = formBuilder.group({
      'username': [''],
      'password': ['']
    });
  }

  ngOnInit(): void { }

  public onSubmit(loginForm: NgForm): void {
    if (this.loginForm.invalid) {
      return;
    }
    const loginRequestObject = {
      username: loginForm.value.username,
      password: loginForm.value.password
    }
    console.log(loginRequestObject);
    this.authService.login(loginRequestObject).subscribe(data => {
      if (data.status === 200) {
        window.localStorage.setItem('token', data.result.token);
        sessionStorage.setItem('userName', loginRequestObject.username);
        //this.invalidLogin = false;
        //this.loginSuccess = true;
        //this.isLoggedIn = "true";
      }
    })
  }
}
