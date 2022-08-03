import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeBean } from '../Bean/employeeBean';

@Injectable()
export class EmployeeService {
  baseUrl: string = "http://localhost:6010/employees/";
  token: string | null = sessionStorage.getItem("token");
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<any> {
    let httpHeaders = new HttpHeaders({ 'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXZpIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0LmNvbSIsImlhdCI6MTY1OTUyNzkzNywiZXhwIjoxNjU5NTQ1OTM3fQ.zkiQ466YBmFqOMdsXdNX4wtQ1wircyujarsKoUVXCoI' })
    let httpOptions = { headers: httpHeaders }
    return this.http.get<any>(this.baseUrl, httpOptions);

  }
  createEmployee(employeeObj: EmployeeBean): Observable<any> {
    const employeeJsonString = JSON.stringify(employeeObj);
    return this.http.post<any>(this.baseUrl, employeeJsonString);
  }

  getDepartment(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  // getDepartment():Observable<any>{
  //   return this.http.get<any>(this.baseUrl);
  // }
  getEmail(email: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + "get/" + email);
  }
  getEmployeeByDepartmentId(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "getEmployeeByDepartmentId/{id}");
  }
}
