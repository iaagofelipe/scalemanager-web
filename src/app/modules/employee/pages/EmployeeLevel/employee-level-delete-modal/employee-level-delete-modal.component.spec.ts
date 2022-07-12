import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLevelDeleteModalComponent } from './employee-level-delete-modal.component';

describe('EmployeeLevelDeleteModalComponent', () => {
  let component: EmployeeLevelDeleteModalComponent;
  let fixture: ComponentFixture<EmployeeLevelDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLevelDeleteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLevelDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
