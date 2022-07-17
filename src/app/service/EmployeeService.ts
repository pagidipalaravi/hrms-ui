import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeBean } from '../Bean/employeeBean';

@Injectable()
export class EmployeeService {
baseUrl:string="http://localhost:6010/employees/";
  constructor( private http:HttpClient) { }

  getEmployee():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
 createEmployee(employeeObj: EmployeeBean): Observable<any> {
    const employeeJsonString = JSON.stringify(employeeObj);
    return this.http.post<any>(this.baseUrl, employeeJsonString);
  }
  getDepartment():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
}
