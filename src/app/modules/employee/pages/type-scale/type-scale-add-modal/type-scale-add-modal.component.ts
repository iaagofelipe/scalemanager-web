import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TypeScaleService } from './../../../../../services/type-scale.service';

@Component({
  selector: 'app-type-scale-add-modal',
  templateUrl: './type-scale-add-modal.component.html',
  styleUrls: ['./type-scale-add-modal.component.scss']
})
export class TypeScaleAddModalComponent implements OnInit {

  formGroupNewScaleType: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    private typeScaleService: TypeScaleService
  ) {
    this.formGroupNewScaleType = this.formBuilder.group({
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  save() {
    this.typeScaleService.addTypeScale(this.formGroupNewScaleType.value).subscribe(
      response => {
        alert("Type saved successfully");
        window.location.reload();
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
