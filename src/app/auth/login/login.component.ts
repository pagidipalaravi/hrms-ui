import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from 'src/app/service/AuthService';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public router: Router;
  public loginForm: FormGroup;
  public userName: AbstractControl;
  public passWord: AbstractControl;

  constructor(router: Router, fb: FormBuilder, private authService: AuthService) {
    this.router = router;
    this.loginForm = fb.group({
      'userName': [''],
      'passWord': ['']
    });

    this.userName = this.loginForm.controls['userName'];
    this.passWord = this.loginForm.controls['passWord'];

  }

  ngOnInit(): void { }



  public onSubmit(values: Object): void {
    // if(this.loginForm.valid){
    //   this.authService.login(this.loginForm.value);
    // }
  }

}
