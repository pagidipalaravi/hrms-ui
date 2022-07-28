import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subscription } from "rxjs";



@Injectable()
export class AuthService {
    // loginUrl = "/flow/token/generate-token";
    public redirectUrl: any;
    constructor(public http: HttpClient, private router: Router, private loader: NgxUiLoaderService) { }


    timerSub: Subscription = new Subscription;
    login(userName: '', passWord: '') {
        console.warn("URL" + this.redirectUrl);
        this.http.post<any>(userName, passWord).subscribe();
    }

}