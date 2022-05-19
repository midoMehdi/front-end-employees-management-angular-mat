import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";
import {Employee} from "../../model/Employee";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  firstName = new FormControl('',[Validators.required]);
  lastName = new FormControl('',[Validators.required]);
  emailId = new FormControl('',[Validators.required,Validators.email]);
  password = new FormControl('',[Validators.required]);
  hide = true;

  employee : Employee = new Employee();

  constructor(private employeeService : EmployeeService,
              private router : Router) { }

  ngOnInit(): void {
  }


  getErrorMessageFirstName(){
    if(this.firstName.hasError('required')){
      return 'You must fill this field.';
    }
    return '';
  }
  getErrorMessageLastName(){
    if(this.lastName.hasError('required')){
      return 'You must fill this field.';
    }
    return '';
  }
  getErrorMessageEmail(){
    if(this.emailId.hasError('required')){
      return 'You must enter an email';
    }
    return this.emailId.hasError('email') ? 'Email not valid.':'';
  }

  getErrorMessagePassword(){
    if (this.password.hasError('required')){
      return 'You must enter a password';
    }
    return '';
  }

  create(){
    if (Object.keys(this.firstName).length === 0){

    }
    else{
      this.employee.firstName = this.firstName.value;
      this.employee.lastName = this.lastName.value;
      this.employee.emailId = this.emailId.value;
      this.employee.password = this.password.value;
      this.employeeService.addEmployee(this.employee).subscribe(()=>{
        this.router.navigate(['/employees']);
      })
    }

  }
}
