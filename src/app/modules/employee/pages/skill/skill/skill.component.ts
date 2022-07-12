import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { SkillAddModalComponent } from '../skill-add-modal/skill-add-modal.component';
import { SkillEditModalComponent } from '../skill-edit-modal/skill-edit-modal.component';
import { SkillDeleteModalComponent } from '../skill-delete-modal/skill-delete-modal.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  skills!: Skill[];

  constructor(
    private skillService: SkillService,
    public formBuilder: FormBuilder,
    public modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getSkills();
  }

  modalNewSkill() {
    this.modalService.open(SkillAddModalComponent);
  }

  modalEditSkill(skillCode: string) {
    const transportToModal = this.modalService.open(SkillEditModalComponent);
    transportToModal.componentInstance.updateBySkillCode = skillCode;
  }

  modalDeleteSkill(skillCode: string) {
    const transportToModal = this.modalService.open(SkillDeleteModalComponent);
    transportToModal.componentInstance.deleteBySkillCode = skillCode;
  }

  getSkills() {
    this.skillService.getAllSkills().subscribe(
      (response: Skill[]) => {
        this.skills = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
