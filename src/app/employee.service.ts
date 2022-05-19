import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../model/Employee";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL : string;
  urlGetById : string;
  constructor(private httpClient: HttpClient) {
    this.baseURL =  "http://localhost:8080/api/v1/employees";
  }

  getEmployeesList() : Observable<Employee[]>{
    console.log("test");
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  addEmployee(employee :Employee) : Observable<Employee>{
    return this.httpClient.post<Employee>(this.baseURL,employee);
  }
}
