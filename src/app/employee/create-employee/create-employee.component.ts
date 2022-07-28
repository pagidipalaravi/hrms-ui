import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeBean } from 'src/app/Bean/employeeBean';
import { EmployeeService } from 'src/app/service/EmployeeService';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: any;
  jobs: any = [];
  departments: any = [];
  managers: any = [];
  message: any;
  constructor(private createEmployeeService: EmployeeService) { }
  employeeBean: EmployeeBean = new EmployeeBean(0, "", "", "", 0, new Date(""), 0, "", 0, 0);
  ngOnInit(): void {
  }
  onSubmit(createEmployeeForm: NgForm) {
    this.employeeBean.employeeId = createEmployeeForm.value.employeeId;
    this.employeeBean.firstName = createEmployeeForm.value.firstName;
    this.employeeBean.lastName = createEmployeeForm.value.lastName;
    this.employeeBean.email = createEmployeeForm.value.email;
    this.employeeBean.phoneNumber = createEmployeeForm.value.phoneNumber;
    this.employeeBean.hireDate = createEmployeeForm.value.hireDate;
    this.employeeBean.salary = createEmployeeForm.value.salary;
    this.employeeBean.jobId = createEmployeeForm.value.jobId;
    this.employeeBean.managerId = createEmployeeForm.value.managerId;
    this.employeeBean.departmentId = createEmployeeForm.value.departmentId;
    this.createEmployeeService.createEmployee(this.employeeBean).subscribe(
      data => {
        if (data.status === 200) {
          alert("Employees are created successfuly");
        }
        else {
          this.message = data.statusText;
        }
      },
      error => {
        this.message = error.message;
        console.error(error);
      }
    );
  }
<<<<<<< Updated upstream
}
=======
  onKey(event: any) {
    let value = event.target.value;
    this.employeeService.getEmail(value).subscribe(
      data => {
        if (data.status === 200) {
          alert("Email ID already exists, Please try another");
          this.error = true;
        }
        else {
          console.log("Email ID does not exist");
        }
      }
    )
  }

  presentDate: any;

  DateDisable() {
    let date: any = new Date();
    let todayDate: any = date.getDate();
    let month: any = date.getMonth() + 1;
    let year: any = date.getFullYear();
    
    if (todayDate < 10) {
      todayDate = "0" + todayDate;
    }

    if (month < 10) {
      month = "0" + month;
    }
    this.presentDate = year + "-" + month + "-" + todayDate;
    console.log(date);
  }

  //   resetForm() {
  //     this.createEmployeeForm.reset();
  // }
}


>>>>>>> Stashed changes
