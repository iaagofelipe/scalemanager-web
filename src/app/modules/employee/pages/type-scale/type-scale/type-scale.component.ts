import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TypeScaleService } from 'src/app/services/type-scale.service';
import { TypeScale } from './../../../../../model/typeScale';
import { HttpErrorResponse } from '@angular/common/http';
import { TypeScaleAddModalComponent } from './../type-scale-add-modal/type-scale-add-modal.component';
import { TypeScaleEditModalComponent } from './../type-scale-edit-modal/type-scale-edit-modal.component';
import { TypeScaleDeleteModalComponent } from './../type-scale-delete-modal/type-scale-delete-modal.component';

@Component({
  selector: 'app-type-scale',
  templateUrl: './type-scale.component.html',
  styleUrls: ['./type-scale.component.scss']
})
export class TypeScaleComponent implements OnInit {

  typeScales!: TypeScale[];

  constructor(
    private typeScaleService: TypeScaleService,
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getAllTypes();
  }

  modalNewTypeScale() {
    this.modalService.open(TypeScaleAddModalComponent);
  }

  modalEditTypeScale(typeScaleCode: string) {
    const transportToModal = this.modalService.open(TypeScaleEditModalComponent);
    transportToModal.componentInstance.typeScaleIdentifier = typeScaleCode;
  }

  modalDeleteTypeScale(typeScaleCode: string) {
    const transportToModal = this.modalService.open(TypeScaleDeleteModalComponent);
    transportToModal.componentInstance.typeScaleIdentifier = typeScaleCode;
  }

  getAllTypes() {
    this.typeScaleService.getAllTypeScales().subscribe(
     (response: TypeScale[]) => {
      this.typeScales = response;
     }, (error: HttpErrorResponse) => {
      alert(error.message);
     }
    );
  }

}
