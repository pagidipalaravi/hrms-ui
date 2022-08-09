//import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { catchError, observable } from 'rxjs';
import { EmployeeService } from 'src/app/service/EmployeeService';

@Component({
  selector: 'view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employees:any;
  message: any;
  searchText:any;
  p:number=1;
  count:number=10;

  constructor(private viewEmployeeService:EmployeeService) { }

  ngOnInit(): void {
    const observable = this.viewEmployeeService.getEmployee();
    observable.subscribe(
      data => {
        if (data.status=200){
            this.employees=data.result;
            console.log(data.result);
        }
        else {
          this.message=data.message;
          //console.error(error);
        }
        

      }
    );
    
  }

}
