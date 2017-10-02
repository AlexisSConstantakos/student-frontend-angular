import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorcourseComponent } from './majorcourse.component';

describe('MajorcourseComponent', () => {
  let component: MajorcourseComponent;
  let fixture: ComponentFixture<MajorcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
