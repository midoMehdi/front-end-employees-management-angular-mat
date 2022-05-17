import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../../model/Employee";

@Component({
  selector: 'app-employees-detail',
  templateUrl: './employees-detail.component.html',
  styleUrls: ['./employees-detail.component.css']
})
export class EmployeesDetailComponent implements OnInit {

  @Input('employees') employees : Employee[];
  constructor() { }

  ngOnInit(): void {
  }

  deleteEmployee(id : number){

  }

  updateEmployee(id : number) {

  }

  detailsEmployee(id : number){

  }

}
