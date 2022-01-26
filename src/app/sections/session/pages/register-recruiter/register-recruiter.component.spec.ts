import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRecruiterWorkerComponent } from './register-recruiter.component';

describe('RegisterRecruiterComponent', () => {
  let component: RegisterRecruiterComponent;
  let fixture: ComponentFixture<RegisterRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRecruiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});