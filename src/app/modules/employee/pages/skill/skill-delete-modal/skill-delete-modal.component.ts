import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-delete-modal',
  templateUrl: './skill-delete-modal.component.html',
  styleUrls: ['./skill-delete-modal.component.scss']
})
export class SkillDeleteModalComponent implements OnInit {

  @Input() deleteBySkillCode!: string;
  skills!: Skill[];

  constructor(
    private skillService: SkillService,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
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

  delete() {
    this.skillService.deleteSkill(this.deleteBySkillCode).subscribe(
      (response) => {
        window.location.reload();
        this.getSkills();
      },
      (error) => {
        alert(error.message);
      }
    );
  }

}
