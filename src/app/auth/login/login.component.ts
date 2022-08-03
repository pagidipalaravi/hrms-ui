import { Component, OnInit, Output } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/AuthService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formGroup: FormGroup;
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

  public onSubmit(ngForm: NgForm): void {
    if (this.formGroup.invalid) {
      return;
    }
    const body = {username: ngForm.value.username, password: ngForm.value.password}
    this.authService.login(body).subscribe(data => {
      if (data.status === 200) {
        sessionStorage.clear();
        sessionStorage.removeItem('token');
        sessionStorage.setItem('token', data.result.token);
        sessionStorage.setItem('username', data.result.username);
        console.log("Login Successful");
        this.router.navigate(['viewemployee']);
        //this.invalidLogin = false;
        //this.loginSuccess = true;
        //this.isLoggedIn = "true";
      }
    })
  }
}
