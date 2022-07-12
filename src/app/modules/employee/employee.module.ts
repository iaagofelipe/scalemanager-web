import { SkillComponent } from './pages/skill/skill/skill.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { InitalScreenComponent } from './pages/inital-screen/inital-screen.component';
import { CreateEmployeesComponent } from './pages/create-employees/create-employees.component';
import { LevelComponent } from './pages/EmployeeLevel/level/level.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SkillAddModalComponent } from './pages/skill/skill-add-modal/skill-add-modal.component';
import { SkillEditModalComponent } from './pages/skill/skill-edit-modal/skill-edit-modal.component';
import { SkillDeleteModalComponent } from './pages/skill/skill-delete-modal/skill-delete-modal.component';
import { EmployeeLevelAddModalComponent } from './pages/EmployeeLevel/employee-level-add-modal/employee-level-add-modal.component';
import { EmployeeLevelEditModalComponent } from './pages/EmployeeLevel/employee-level-edit-modal/employee-level-edit-modal.component';
import { EmployeeLevelDeleteModalComponent } from './pages/EmployeeLevel/employee-level-delete-modal/employee-level-delete-modal.component';
import { DeleteEmployeeComponent } from './pages/delete-employee/delete-employee.component';
import { TypeScaleComponent } from './pages/type-scale/type-scale/type-scale.component';
import { TypeScaleAddModalComponent } from './pages/type-scale/type-scale-add-modal/type-scale-add-modal.component';
import { TypeScaleEditModalComponent } from './pages/type-scale/type-scale-edit-modal/type-scale-edit-modal.component';
import { TypeScaleDeleteModalComponent } from './pages/type-scale/type-scale-delete-modal/type-scale-delete-modal.component';


@NgModule({
  declarations: [
    CreateEmployeesComponent,
    InitalScreenComponent,
    CreateEmployeesComponent,
    LevelComponent,
    NavbarComponent,
    SkillComponent,
    SkillAddModalComponent,
    SkillEditModalComponent,
    SkillDeleteModalComponent,
    EmployeeLevelAddModalComponent,
    EmployeeLevelEditModalComponent,
    EmployeeLevelDeleteModalComponent,
    DeleteEmployeeComponent,
    TypeScaleComponent,
    TypeScaleAddModalComponent,
    TypeScaleEditModalComponent,
    TypeScaleDeleteModalComponent

  ],
  imports: [
SharedModule,
    RouterModule,
    CommonModule

  ]
})
export class EmployeeModule { }
