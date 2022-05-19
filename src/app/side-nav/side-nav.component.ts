import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../../model/Employee";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  sortEmployees : Employee[];

  constructor(private employeeService : EmployeeService) {
    this.employeeService.getEmployeesList().subscribe((data)=>{
      this.sortEmployees = data;
    });
  }

  ngOnInit(): void {
  }

  addEmployee(){

  }

  deleteAllEmployees(){

  }

}
