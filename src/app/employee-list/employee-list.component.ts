import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../../model/Employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[]= ['id_employee','first name', 'last name', 'emailId','Actions'];
  employees : Employee[] = [];


  sortEmployeesBy = [
    {value: "id",viewValue: "Id"},
    {value: "firstName",viewValue: "First name"},
    {value: "lastName",viewValue: "Last name"},
    {value: "emailId",viewValue: "email"},
  ];
  constructor(private employeeService : EmployeeService,
              private router : Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }

  deleteEmployee(id : number){
    this.employeeService.deleteEmployeeById(id).subscribe(()=>{
      window.location.reload();
    });


  }

  updateEmployee(id : number) {
    this.router.navigate(['updateEmployee',id]);

  }

  detailsEmployee(id : number){

  }

}
