import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private api: ApiService) { }

  public getAllSkills(): Observable<Skill[]> {
    return this.api.get(`/skill/all`);
  }

  public getBySkillCode(skillCode: string): Observable<Skill> {
    return this.api.get(`/skill/find/${skillCode}`)
  }

  public addSkill(skill: Skill): Observable<Skill> {
    return this.api.post(`/skill/add`, skill);
  }

  public updateSkill(skill: Skill, skillCode: string): Observable<Skill> {
    return this.api.put(`/skill/update/${skillCode}`, skill);
  }

  public deleteSkill(skillCode: string): Observable<void> {
    return this.api.delete(`/skill/delete/${skillCode}`);
  }

}
