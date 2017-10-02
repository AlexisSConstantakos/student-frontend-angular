import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorcourseFormComponent } from './majorcourse-form.component';

describe('MajorcourseFormComponent', () => {
  let component: MajorcourseFormComponent;
  let fixture: ComponentFixture<MajorcourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorcourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorcourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
