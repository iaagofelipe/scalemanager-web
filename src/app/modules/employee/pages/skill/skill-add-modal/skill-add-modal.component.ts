import { SkillService } from 'src/app/services/skill.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-skill-add-modal',
  templateUrl: './skill-add-modal.component.html',
  styleUrls: ['./skill-add-modal.component.scss']
})
export class SkillAddModalComponent implements OnInit {

  formGroupNewSkill: FormGroup;



  constructor(
    private skillService: SkillService,
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
  ) {
    this.formGroupNewSkill = this.formBuilder.group({
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }


  saveNewSkill() {
    this.skillService.addSkill(this.formGroupNewSkill.value).subscribe(
      response => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
