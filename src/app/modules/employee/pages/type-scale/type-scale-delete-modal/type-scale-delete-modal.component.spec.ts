import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeScaleDeleteModalComponent } from './type-scale-delete-modal.component';

describe('TypeScaleDeleteModalComponent', () => {
  let component: TypeScaleDeleteModalComponent;
  let fixture: ComponentFixture<TypeScaleDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeScaleDeleteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeScaleDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
