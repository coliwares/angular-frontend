import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable()
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>("/api/v1/employees");
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post('/api/v1/employees', employee);
  }
}
