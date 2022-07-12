import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeLevel } from 'src/app/model/employeeLevel';
import { EmployeeLevelService } from 'src/app/services/employee-level.service';

@Component({
  selector: 'app-employee-level-edit-modal',
  templateUrl: './employee-level-edit-modal.component.html',
  styleUrls: ['./employee-level-edit-modal.component.scss'],
})
export class EmployeeLevelEditModalComponent implements OnInit {
  @Input() updateByEmployeeLevelCode!: string;

  formGroupEditEmployeeLevel: FormGroup;

  constructor(
    private employeeLevelService: EmployeeLevelService,
    public formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {
    this.formGroupEditEmployeeLevel = this.formBuilder.group({
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getByEmployeeLevelCode();
  }

  getByEmployeeLevelCode() {
    this.employeeLevelService.getByEmployeeLevelCode(this.updateByEmployeeLevelCode).subscribe(
        (response: EmployeeLevel) => {
          this.formGroupEditEmployeeLevel.get('description')?.setValue(response.description);
        },
        (error) => {
          alert('Error during editing level,  ' + error);
        }
      );
  }

  save() {
    this.employeeLevelService.updateEmployeeLevel(this.formGroupEditEmployeeLevel.value, this.updateByEmployeeLevelCode).subscribe(
        (response) => {
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }
}
