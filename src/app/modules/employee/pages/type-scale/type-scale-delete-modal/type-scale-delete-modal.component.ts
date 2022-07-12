import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TypeScaleService } from 'src/app/services/type-scale.service';

@Component({
  selector: 'app-type-scale-delete-modal',
  templateUrl: './type-scale-delete-modal.component.html',
  styleUrls: ['./type-scale-delete-modal.component.scss']
})
export class TypeScaleDeleteModalComponent implements OnInit {

  @Input() typeScaleIdentifier!: string;

  constructor(
    public activeModal: NgbActiveModal,
    private typeScaleService: TypeScaleService
  ) { }

  ngOnInit(): void {
  }

  delete() {
    this.typeScaleService.deleteTypeScale(this.typeScaleIdentifier).subscribe(
      (response) => {
        alert("Type deleted successfully")
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
