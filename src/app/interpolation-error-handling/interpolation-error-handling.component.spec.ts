import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationErrorHandlingComponent } from './interpolation-error-handling.component';

describe('InterpolationErrorHandlingComponent', () => {
  let component: InterpolationErrorHandlingComponent;
  let fixture: ComponentFixture<InterpolationErrorHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolationErrorHandlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolationErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
