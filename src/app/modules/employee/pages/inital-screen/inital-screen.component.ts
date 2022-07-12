import { CreateEmployeesComponent } from '../create-employees/create-employees.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import { Employee } from './../../../../model/employee';
import { Component, OnInit} from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/model/skill';
import { EmployeeLevel } from 'src/app/model/employeeLevel';
import { SkillService } from 'src/app/services/skill.service';
import { EmployeeLevelService } from 'src/app/services/employee-level.service';


@Component({
  selector: 'app-inital-screen' ,
  templateUrl: './inital-screen.component.html',
  styleUrls: ['./inital-screen.component.scss'],
})
export class InitalScreenComponent implements OnInit {
  employees!: Employee[];
  employee!: Employee;

  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  deleteModal(employeeCode: string) {
    console.log(employeeCode)
    const transportToModal = this.modalService.open(DeleteEmployeeComponent)
    transportToModal.componentInstance.deleteByEmployeeCode = employeeCode;
  }

  editEmployee(employeeCode: string) {
    console.log(employeeCode)
    const transportToModal = this.modalService.open(CreateEmployeesComponent)
    transportToModal.componentInstance.updateByEmployeeCode = employeeCode;
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
