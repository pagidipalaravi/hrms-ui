import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    baseUrl = "http://localhost:6010/";
    public redirectUrl: any;

    constructor(public httpClient: HttpClient) { }

    login(loginRequestBody: any) {
        console.warn("loginRequestObject = " + loginRequestBody);
        return this.httpClient.post<any>(this.baseUrl + 'token/generate-token', loginRequestBody);
        //return "success";
    }
}
