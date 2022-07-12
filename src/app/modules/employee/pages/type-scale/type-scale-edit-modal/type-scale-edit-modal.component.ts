import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TypeScale } from 'src/app/model/typeScale';
import { TypeScaleService } from 'src/app/services/type-scale.service';

@Component({
  selector: 'app-type-scale-edit-modal',
  templateUrl: './type-scale-edit-modal.component.html',
  styleUrls: ['./type-scale-edit-modal.component.scss']
})
export class TypeScaleEditModalComponent implements OnInit {

  formGroupEditScaleType: FormGroup;
  @Input() typeScaleIdentifier!: string;


  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    private typeScaleService: TypeScaleService
  ) {
    this.formGroupEditScaleType = this.formBuilder.group({
      description: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    this.getByTypeScaleCode();
  }

  getByTypeScaleCode() {
    this.typeScaleService.getByTypeScaleCode(this.typeScaleIdentifier).subscribe(
      (response: TypeScale) => {
        this.formGroupEditScaleType.get('description')?.setValue(response.description);
      }, (error) => {
        alert('Error during edit type, ' + error);
      }
    )
  }

  save() {
    this.typeScaleService.updateTypeScale(this.formGroupEditScaleType.value, this.typeScaleIdentifier).subscribe(
        (response) => {
          alert("Type edited successfully!");
          window.location.reload();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

}
