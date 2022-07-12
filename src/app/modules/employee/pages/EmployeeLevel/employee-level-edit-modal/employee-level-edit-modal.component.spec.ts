import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLevelEditModalComponent } from './employee-level-edit-modal.component';

describe('EmployeeLevelEditModalComponent', () => {
  let component: EmployeeLevelEditModalComponent;
  let fixture: ComponentFixture<EmployeeLevelEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLevelEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLevelEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
