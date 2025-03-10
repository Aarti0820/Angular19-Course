import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassDirectiveComponent } from './ngclass-directive.component';

describe('NgclassDirectiveComponent', () => {
  let component: NgclassDirectiveComponent;
  let fixture: ComponentFixture<NgclassDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgclassDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgclassDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
