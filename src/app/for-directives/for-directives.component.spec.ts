import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDirectivesComponent } from './for-directives.component';

describe('ForDirectivesComponent', () => {
  let component: ForDirectivesComponent;
  let fixture: ComponentFixture<ForDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
