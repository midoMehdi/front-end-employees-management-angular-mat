import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../../model/Employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[]= ['id_employee','first name', 'last name', 'emailId','Actions'];
  employees : Employee[] = [];
  isTable = true;
  isCard = false;
  constructor(private employeeService : EmployeeService) { }

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

  }

  updateEmployee(id : number) {

  }

  detailsEmployee(id : number){

  }
  displayEmployeesByTable(){
    this.isTable = true;
    this.isCard = false;
  }
  displayEmployeesByCard(){
    this.isTable = false;
    this.isCard = true;
  }
}
