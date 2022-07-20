import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { observable } from 'rxjs';
import { EmployeeService } from 'src/app/service/EmployeeService';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee:any;
  jobs:any=[];
  departments:any=[];
  managers:any=[];
  constructor(private createEmployeeService : EmployeeService) { }

  ngOnInit(): void {
    console.log("create employee InIt method");
    
    this.employee={
      
      "firstName": "Ravi",
      "lastName": "Bandi",
      "email": "ravi@gmail.com",
      "phoneNumber": "123456789",
      "hireDate": "2022-07-09",
      "salary": 24000,
      "jobId": "AD_PRES",
      "commisionPct": null,
      "managerId": null,
      "departmentId": 90
  }
  //TODO Read the data from form ans assign it to employee
  //this.employee=
  /*this.employee.firstName="chakri";
  this.employee.lastName=;
  this.employee.email=;
  this.employee.phoneNumber=;
  this.employee.hireDate=;
  this.employee.salary=;
  this.employee.jobId=;
  this.employee.commisionPct=;
  this.employee.departmentId=;*/

   
  }

  onSubmit(createEmployeeForm:NgForm):void{
    const Observable = this.createEmployeeService.createEmployee(this.employee);
   Observable.subscribe();
  }

}
