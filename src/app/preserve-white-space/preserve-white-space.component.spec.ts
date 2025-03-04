import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreserveWhiteSpaceComponent } from './preserve-white-space.component';

describe('PreserveWhiteSpaceComponent', () => {
  let component: PreserveWhiteSpaceComponent;
  let fixture: ComponentFixture<PreserveWhiteSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreserveWhiteSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreserveWhiteSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
