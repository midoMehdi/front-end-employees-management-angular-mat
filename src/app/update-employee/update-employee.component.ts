import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../model/Employee";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  hide = true;
  employee : Employee = new Employee();

  firstName = new FormControl('',Validators.required);
  lastName = new FormControl('',Validators.required);
  emailId = new FormControl('',[Validators.required,Validators.email]);
  password = new FormControl('',Validators.required);
  id : string | null;
  constructor(private employeeService : EmployeeService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeById(Number(this.id)).subscribe((data) => {
      this.employee = data;
    })
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

  updateEmployee(){
    this.employeeService.updateEmployee(Number(this.id),this.employee).subscribe(data => {
      this.router.navigate(['/employees']);
    });

  }

}
