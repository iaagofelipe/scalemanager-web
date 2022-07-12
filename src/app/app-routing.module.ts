import { SkillComponent } from './modules/employee/pages/skill/skill/skill.component';
import { LevelComponent } from './modules/employee/pages/EmployeeLevel/level/level.component';
import { InitalScreenComponent } from './modules/employee/pages/inital-screen/inital-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeScaleComponent } from './modules/employee/pages/type-scale/type-scale/type-scale.component';

const routes: Routes = [
  {
  path: "",
    // component: MainLayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: InitalScreenComponent },
      { path: "level", component: LevelComponent },
      { path: "skill", component: SkillComponent },
      { path: "type-scale", component: TypeScaleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
