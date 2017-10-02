import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './routing/routing.module';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StatusMessageComponent } from './status-message/status-message.component';
import { GradeComponent } from './grade/grade.component';
import { GradeFormComponent } from './grade-form/grade-form.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { CourseComponent } from './course/course.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { InstructorComponent } from './instructor/instructor.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { MajorComponent } from './major/major.component';
import { MajorFormComponent } from './major-form/major-form.component';
import { MajorcourseComponent } from './majorcourse/majorcourse.component';
import { MajorcourseFormComponent } from './majorcourse-form/majorcourse-form.component';
import { StudentcourseComponent } from './studentcourse/studentcourse.component';
import { StudentcourseFormComponent } from './studentcourse-form/studentcourse-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StudentComponent,
    HomeComponent,
    DeleteConfirmComponent,
    StudentFormComponent,
    StatusMessageComponent,
    GradeComponent,
    GradeFormComponent,
    AssignmentComponent,
    AssignmentFormComponent,
    CourseComponent,
    CourseFormComponent,
    InstructorComponent,
    InstructorFormComponent,
    MajorComponent,
    MajorFormComponent,
    MajorcourseComponent,
    MajorcourseFormComponent,
    StudentcourseComponent,
    StudentcourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  entryComponents: [DeleteConfirmComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
