import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeLevelService } from 'src/app/services/employee-level.service';

@Component({
  selector: 'app-employee-level-delete-modal',
  templateUrl: './employee-level-delete-modal.component.html',
  styleUrls: ['./employee-level-delete-modal.component.scss']
})
export class EmployeeLevelDeleteModalComponent implements OnInit {

  @Input() deleteByEmployeeLevelCode!: string;

  constructor(
    public activeModal: NgbActiveModal,
    private employeeLevelService: EmployeeLevelService,
  ) { }

  ngOnInit(): void {
  }

  getAllEmployeeLevels() {
    this.employeeLevelService.getEmployeesLevel().subscribe(
      response => {
        console.log(response)
    }, error => {
        alert("error occurred during delete process. " + error);
    }
    );
  }

  delete() {
    this.employeeLevelService.deleteEmployeeLevel(this.deleteByEmployeeLevelCode).subscribe(
      (response) => {
        alert("Level deleted successfully")
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
