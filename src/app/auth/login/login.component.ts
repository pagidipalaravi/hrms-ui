import { Component, OnInit, Output } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/AuthService';
const TOKEN_KEY = 'AuthToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  username: string = "";
  password: string = "";
  message: string = '';
  error: boolean = false;
  loginMessage: boolean = false;
  successMessage: string = "";
  errorMessage: string = "";
  @Output() isLoggedIn = "false";

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.router = router;
    this.formGroup = formBuilder.group({'username': [''],'password': ['']});
  }

  ngOnInit(): void { }

  public onSubmit(loginForm: NgForm): void {
    if (this.formGroup.invalid) {
      return;
    }
    const loginRequestObject = {username: loginForm.value.username, password: loginForm.value.password}
    console.log(loginRequestObject);
    this.authService.login(loginRequestObject).subscribe(data => {
      if (data.status === 200) {
        sessionStorage.setItem(TOKEN_KEY, data.result.token);
        sessionStorage.setItem('username', loginRequestObject.username);
        console.log("Login Successful");
        this.router.navigate(['viewemployee']);
        //this.invalidLogin = false;
        //this.loginSuccess = true;
        //this.isLoggedIn = "true";
      }
    })
  }
}
