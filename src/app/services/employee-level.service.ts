import { EmployeeLevel } from './../model/employeeLevel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLevelService {

  constructor(private api: ApiService) { }


  public getEmployeesLevel(): Observable<EmployeeLevel[]> {
    return this.api.get(`/employee-level/all`);
  }

  public getByEmployeeLevelCode(employeeLevelCode: string): Observable<EmployeeLevel> {
    return this.api.get(`/employee-level/find/${employeeLevelCode}`);
  }


  public addEmployeeLevel(employeeLevel: EmployeeLevel): Observable<EmployeeLevel> {
    return this.api.post(`/employee-level/add`, employeeLevel);
  }

  public updateEmployeeLevel(employeeLevel: EmployeeLevel, employeeLevelCode: string): Observable<EmployeeLevel> {
    return this.api.put(`/employee-level/update/${employeeLevelCode}`, employeeLevel);
  }

  public deleteEmployeeLevel(employeeLevelCode: string): Observable<void> {
    return this.api.delete(`/employee-level/delete/${employeeLevelCode}`);
  }
}

