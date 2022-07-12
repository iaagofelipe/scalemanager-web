import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeLevelService } from 'src/app/services/employee-level.service';

@Component({
  selector: 'app-employee-level-add-modal',
  templateUrl: './employee-level-add-modal.component.html',
  styleUrls: ['./employee-level-add-modal.component.scss']
})
export class EmployeeLevelAddModalComponent implements OnInit {

  formGroupNewEmployeeLevel: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    private employeeLevelService: EmployeeLevelService
  ) {
    this.formGroupNewEmployeeLevel = this.formBuilder.group({
      description: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }


  saveLevel(): void {
    this.employeeLevelService.addEmployeeLevel(this.formGroupNewEmployeeLevel.value).subscribe(
      response => {
        alert("Level saved successfully");
        window.location.reload();
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
