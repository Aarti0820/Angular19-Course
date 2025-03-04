import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPipeComponent } from './new-pipe.component';

describe('NewPipeComponent', () => {
  let component: NewPipeComponent;
  let fixture: ComponentFixture<NewPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
