import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeBean } from '../Bean/employeeBean';

@Injectable()
export class EmployeeService {
  baseUrl: string = "http://localhost:6010/employees/";
  token: string | null = sessionStorage.getItem('token');

  constructor(private httpClient: HttpClient) { }

  getEmployee(): Observable<any> {
    // let httpHeaders = new HttpHeaders({ 'Authorization':'Bearer '+ this.token});
    // let httpOptions = { headers: httpHeaders }
    // return this.httpClient.get<any>(this.baseUrl, httpOptions);
    return this.httpClient.get<any>(this.baseUrl);

  }
  createEmployee(employeeObj: EmployeeBean): Observable<any> {
    const employeeJsonString = JSON.stringify(employeeObj);
    return this.httpClient.post<any>(this.baseUrl, employeeJsonString);
  }

  getDepartment(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }
  getEmail(email: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "get/" + email);
  }
  getEmployeeByDepartmentId(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "getEmployeeByDepartmentId/{id}");
  }
}
