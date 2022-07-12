import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/model/employee';
import { EmployeeLevel } from 'src/app/model/employeeLevel';
import { Skill } from 'src/app/model/skill';
import { EmployeeLevelService } from 'src/app/services/employee-level.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { SkillService } from 'src/app/services/skill.service';



@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.scss'],
})
export class CreateEmployeesComponent implements OnInit {
  formGroupNewEmployee: FormGroup;
  employees!: Employee[];
  employee!: Employee;


  skills!: Skill[];
  employeeLevels!: EmployeeLevel[];

  @Input()
  updateByEmployeeCode!: string;


  constructor(
    private employeeService: EmployeeService,
    public formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private skillService: SkillService,
    private employeeLevelService: EmployeeLevelService,
  ) {
    this.formGroupNewEmployee = this.formBuilder.group({
      name: ['', Validators.required, Validators.min(5)],
      email: ['', Validators.required, Validators.min(4)],
      phone: ['', Validators.required],
      skills: [[]],
      levels: [[]],
    });
  }

  ngOnInit(): void {
    this.getAllEmployees();
    this.getSkills();
    this.getLevels();
  }

  getAllEmployees() {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addSkill(skill: Skill) {
    

    let selectedSkills = this.formGroupNewEmployee.get("skills")?.value;
    selectedSkills.push(skill.description);
  }


  // selectParcel(parcel: number) {
  //   if (this.parcels_data.includes(parcel)) {
  //     this.parcels_data.splice(
  //       this.parcels_data.findIndex((p) => p == parcel),
  //       1
  //     );
  //   } else {
  //     this.parcels_data.push(parcel);
  //   }
  // }


  getByEmployeeCode() {
    this.employeeService.getByEmployeeCode(this.updateByEmployeeCode).subscribe(
        (response: Employee) => {
          this.formGroupNewEmployee.get('name')?.setValue(response.name);
          this.formGroupNewEmployee.get('email')?.setValue(response.email);
          this.formGroupNewEmployee.get('phone')?.setValue(response.phone);
          this.formGroupNewEmployee.get('skills')?.setValue(response.skills);
          this.formGroupNewEmployee.get('level')?.setValue(response.level);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

  saveNewEmployee() {
    this.employeeService.addEmployee(this.formGroupNewEmployee.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.formGroupNewEmployee.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }

  getSkills() {
    this.skillService.getAllSkills().subscribe(
      (response: Skill[]) => {
        this.skills = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getLevels() {
    this.employeeLevelService.getEmployeesLevel().subscribe(
      (response: EmployeeLevel[]) => {
        this.employeeLevels = response;
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
