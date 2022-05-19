import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  firstName = new FormControl('',[Validators.required]);
  lastName = new FormControl('',[Validators.required]);
  emailId = new FormControl('',[Validators.required,Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }

  create(){

  }

}
