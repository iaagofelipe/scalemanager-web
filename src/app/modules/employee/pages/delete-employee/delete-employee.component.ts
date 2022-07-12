import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {

  employee!: Employee;

  @Input()
  deleteByEmployeeCode!: string;

  constructor(
    private employeeService: EmployeeService,
    public activeModal: NgbActiveModal
    ) { }

  ngOnInit(): void {
  }

  public deleteEmployee(): void {
    console.log(this.deleteByEmployeeCode)
    this.employeeService.deleteEmployee(this.deleteByEmployeeCode).subscribe(
      response => {
        console.log(response);
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

}
