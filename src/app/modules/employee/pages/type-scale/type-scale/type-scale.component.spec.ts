import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeScaleComponent } from './type-scale.component';

describe('TypeScaleComponent', () => {
  let component: TypeScaleComponent;
  let fixture: ComponentFixture<TypeScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeScaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
