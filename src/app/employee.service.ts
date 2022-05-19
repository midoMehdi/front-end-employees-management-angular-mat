import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../model/Employee";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL : string;
  constructor(private httpClient: HttpClient) {
    this.baseURL =  "http://localhost:8080/api/v1/employees";
  }

  getEmployeesList() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  getEmployeeById(id : number) : Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseURL+'/'+id);
  }

  addEmployee(employee :Employee) : Observable<Employee>{
    return this.httpClient.post<Employee>(this.baseURL,employee);
  }

  updateEmployee(id:number,employee : Employee) : Observable<Employee>{
    return this.httpClient.put<Employee>(this.baseURL+'/'+id,employee);
  }

  deleteEmployeeById(id : number) : Observable<Employee>{
    return this.httpClient.delete<Employee>(this.baseURL+'/'+id);
  }

  deleteAllEmployees(){
    return this.httpClient.delete<Employee[]>(this.baseURL);
  }
}
