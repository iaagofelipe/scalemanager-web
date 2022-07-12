import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeScaleAddModalComponent } from './type-scale-add-modal.component';

describe('TypeScaleAddModalComponent', () => {
  let component: TypeScaleAddModalComponent;
  let fixture: ComponentFixture<TypeScaleAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeScaleAddModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeScaleAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
