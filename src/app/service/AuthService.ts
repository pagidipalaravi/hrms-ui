import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    baseUrl = "http://localhost:6010/";

    constructor(public httpClient: HttpClient) { }

    login(body: any) {
        return this.httpClient.post<any>(this.baseUrl + 'token/generate-token', body);
    }
    getToken() {
        sessionStorage.getItem('token');
    }

}
