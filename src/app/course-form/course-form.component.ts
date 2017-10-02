import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service'

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  
  courseForm: NgForm;
  @ViewChild('courseForm') currentForm: NgForm;

  successMessage: string;
  errorMessage: string;

  course: object;

  constructor(    
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  getRecordForEdit(){
    this.route.params
      .switchMap((params: Params) => this.dataService.getRecord("course", +params['id']))
      .subscribe(course => this.course = course);
  }


  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        (+params['id']) ? this.getRecordForEdit() : null;
      });

  }

  saveCourse(course: NgForm){
    if(typeof course.value.course_id === "number"){
      this.dataService.editRecord("course", course.value, course.value.course_id)
          .subscribe(
            course => this.successMessage = "Record updated succesfully",
            error =>  this.errorMessage = <any>error);
    }else{
      this.dataService.addRecord("course", course.value)
          .subscribe(
            course => this.successMessage = "Record added succesfully",
            error =>  this.errorMessage = <any>error);
            this.course = {};
    }

  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.courseForm = this.currentForm;
    this.courseForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

onValueChanged(data?: any) {
  let form = this.courseForm.form;

  for (let field in this.formErrors) {
    this.formErrors[field] = '';
    const control = form.get(field);

    if (control && control.dirty && !control.valid) {
      const messages = this.validationMessages[field];
      for (const key in control.errors) {
        this.formErrors[field] += messages[key] + ' ';
      }
    }
  }
}

formErrors = {
  'course_id': '',
  'instructor_id': '',
  'subject': '',
  'course': '',
};

validationMessages = {
  'course_id': {
    'required': 'Course ID is required.',
  },
  'instructor_id': {
    'required': 'Instructor ID is required.',
  },
  'subject': {
    'required': 'Subject is required.',
    'minlength': 'Subject must be at least 3 characters long.',
  },
  'course': {
    'required': 'Course is required',
    'minlength': 'Course must be at least 3 characters long.',
  }

};

}
