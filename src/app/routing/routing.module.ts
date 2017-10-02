import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { StudentComponent }   from '../student/student.component';
import { StudentFormComponent }   from '../student-form/student-form.component';
import { GradeComponent }   from '../grade/grade.component';
import { GradeFormComponent }   from '../grade-form/grade-form.component';
import { AssignmentComponent }   from '../assignment/assignment.component';
import { AssignmentFormComponent }   from '../assignment-form/assignment-form.component';
import { CourseComponent }   from '../course/course.component';
import { CourseFormComponent }   from '../course-form/course-form.component';
import { InstructorComponent }   from '../instructor/instructor.component';
import { InstructorFormComponent }   from '../instructor-form/instructor-form.component';
import { MajorComponent }   from '../major/major.component';
import { MajorFormComponent }   from '../major-form/major-form.component';
import { MajorcourseComponent }   from '../majorcourse/majorcourse.component';
import { MajorcourseFormComponent }   from '../majorcourse-form/majorcourse-form.component';
import { StudentcourseComponent }   from '../studentcourse/studentcourse.component';
import { StudentcourseFormComponent }   from '../studentcourse-form/studentcourse-form.component';
import { HomeComponent }   from '../home/home.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'student',  component: StudentComponent },
  { path: 'student/edit/:id', component: StudentFormComponent },
  { path: 'student/add', component: StudentFormComponent },
  { path: 'grade',  component: GradeComponent },
  { path: 'grade/edit/:id', component: GradeFormComponent },
  { path: 'grade/add', component: GradeFormComponent },
  { path: 'assignment',  component: AssignmentComponent },
  { path: 'assignment/edit/:id', component: AssignmentFormComponent },
  { path: 'assignment/add', component: AssignmentFormComponent },
  { path: 'course',  component: CourseComponent },
  { path: 'course/edit/:id', component: CourseFormComponent },
  { path: 'course/add', component: CourseFormComponent },
  { path: 'instructor',  component: InstructorComponent },
  { path: 'instructor/edit/:id', component: InstructorFormComponent },
  { path: 'instructor/add', component: InstructorFormComponent },
  { path: 'major',  component: MajorComponent },
  { path: 'major/edit/:id', component: MajorFormComponent },
  { path: 'major/add', component: MajorFormComponent },
  { path: 'majorcourse',  component: MajorcourseComponent },
  { path: 'majorcourse/edit/:id', component: MajorcourseFormComponent },
  { path: 'majorcourse/add', component: MajorcourseFormComponent },
  { path: 'studentcourse',  component: StudentcourseComponent },
  { path: 'studentcourse/edit/:id', component: StudentcourseFormComponent },
  { path: 'studentcourse/add', component: StudentcourseFormComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
