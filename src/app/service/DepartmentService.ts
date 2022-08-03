import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";


@Injectable()
export class DepartmentService {
    baseUrl: string = "http://localhost:6010/departments/";
    constructor(private http: HttpClient) { }

    getDepartment(): Observable<any> {
        return this.http.get<any>(this.baseUrl);
    }

}