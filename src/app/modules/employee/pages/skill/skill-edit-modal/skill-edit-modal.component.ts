import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-edit-modal',
  templateUrl: './skill-edit-modal.component.html',
  styleUrls: ['./skill-edit-modal.component.scss'],
})
export class SkillEditModalComponent implements OnInit {

  formGroupEditSkill: FormGroup;
  @Input() updateBySkillCode!: string;

  constructor(
    private skillService: SkillService,
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder
  ) {
    this.formGroupEditSkill = this.formBuilder.group({
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getBySkillCode();
  }

  getBySkillCode() {
    this.skillService.getBySkillCode(this.updateBySkillCode).subscribe(
      (response: Skill) => {
        console.log(response);
        this.formGroupEditSkill.get('description')?.setValue(response.description);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        alert(error.message);
      }
    );
  }

  save() {
    this.skillService
      .updateSkill(this.formGroupEditSkill.value, this.updateBySkillCode)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }


}
