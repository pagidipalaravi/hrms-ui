import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationService {
    logout() {
        throw new Error('Method not implemented.');
    }

    baseUrl = "http://localhost:6010/";

    constructor(public httpClient: HttpClient) {
        console.log("AuthenticationService constructor");
    }

    login(body: any) {
        return this.httpClient.post<any>(this.baseUrl + 'token/generate-token', body);
    }

    getToken() {
        sessionStorage.getItem('token');
    }

    isAuthenticated(): boolean {
        const token = sessionStorage.getItem('token');
        if (token == null || token == "") {
            return false;
        }
        else {
            return true;
        }
    }
    signout() {
        sessionStorage.removeItem('token');
        sessionStorage.clear();
    }
}
