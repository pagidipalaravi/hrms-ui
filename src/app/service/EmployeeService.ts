import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
baseUrl:string="http://localhost:6010/employees/";
  constructor( private http:HttpClient) { }
  getEmployee():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
  createEmployee(employee:any):Observable<any>{
      return this.http.post<any>(this.baseUrl, employee);
  }
  getDepartment():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
}
