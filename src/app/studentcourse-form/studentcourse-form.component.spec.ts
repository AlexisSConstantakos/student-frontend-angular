import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcourseFormComponent } from './studentcourse-form.component';

describe('StudentcourseFormComponent', () => {
  let component: StudentcourseFormComponent;
  let fixture: ComponentFixture<StudentcourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentcourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
