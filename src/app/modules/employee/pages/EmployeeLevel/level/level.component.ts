import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeLevel } from '../../../../../model/employeeLevel';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeLevelService } from 'src/app/services/employee-level.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeLevelAddModalComponent } from '../employee-level-add-modal/employee-level-add-modal.component';
import { EmployeeLevelEditModalComponent } from './../employee-level-edit-modal/employee-level-edit-modal.component';
import { EmployeeLevelDeleteModalComponent } from './../employee-level-delete-modal/employee-level-delete-modal.component';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {

  employeeLevels!: EmployeeLevel[];

  constructor(
    private employeeLevelService: EmployeeLevelService,
    public modalService: NgbModal
    ) {}

  ngOnInit(): void {
    this.getEmployeesLevel();
  }

  modalNewEmployeeLevel() {
    this.modalService.open(EmployeeLevelAddModalComponent);
  }

  modalEditEmployeeLevel(employeeLevelCode: string) {
    const transportToModal = this.modalService.open(EmployeeLevelEditModalComponent);
    transportToModal.componentInstance.updateByEmployeeLevelCode = employeeLevelCode;
  }

  modalDeleteEmployeeLevel(employeeLevelCode: string) {
    const transportToModal = this.modalService.open(EmployeeLevelDeleteModalComponent);
    transportToModal.componentInstance.deleteByEmployeeLevelCode = employeeLevelCode;
  }

  public getEmployeesLevel(): void {
    this.employeeLevelService.getEmployeesLevel().subscribe(
      (response: EmployeeLevel[]) => {
        this.employeeLevels = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
