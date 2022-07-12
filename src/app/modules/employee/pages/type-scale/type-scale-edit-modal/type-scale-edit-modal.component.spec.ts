import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeScaleEditModalComponent } from './type-scale-edit-modal.component';

describe('TypeScaleEditModalComponent', () => {
  let component: TypeScaleEditModalComponent;
  let fixture: ComponentFixture<TypeScaleEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeScaleEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeScaleEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
