import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthenticationService } from '../service/AuthenticationService';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public authenticationService: AuthenticationService) {
        console.log("TokenInterceptor constructor");
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = sessionStorage.getItem('token');
        console.log("intercept method token = " + token)
        if (token == null || token == "") {
            console.log("if block");
            return next.handle(request);
        }
        else {
            console.log("else block");
            request = request.clone({ setHeaders: { 'Authorization': 'Bearer ' + token } });
            return next.handle(request);
        }
    }
}