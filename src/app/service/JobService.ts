import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";

@Injectable()
export class JobService {
    baseUrl: string = "http://localhost:6010/jobs/";
    constructor(private http: HttpClient) { }
    getJob(): Observable<any> {
        return this.http.get<any>(this.baseUrl);
    }
}