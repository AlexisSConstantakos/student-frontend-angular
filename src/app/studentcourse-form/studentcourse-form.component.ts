import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service'

@Component({
  selector: 'app-studentcourse-form',
  templateUrl: './studentcourse-form.component.html',
  styleUrls: ['./studentcourse-form.component.css']
})
export class StudentcourseFormComponent implements OnInit {

  studentcourseForm: NgForm;
  @ViewChild('studentcourseForm') currentForm: NgForm;

  successMessage: string;
  errorMessage: string;

  studentcourse: object;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getRecordForEdit(){
    this.route.params
      .switchMap((params: Params) => this.dataService.getRecord("studentcourse", +params['id']))
      .subscribe(studentcourse => this.studentcourse = studentcourse);
  }


  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        (+params['id']) ? this.getRecordForEdit() : null;
      });

  }

  saveStudentcourse(studentcourse: NgForm){
    if(typeof studentcourse.value.studentcourse_id === "number"){
      this.dataService.editRecord("studentcourse", studentcourse.value, studentcourse.value.studentcourse_id)
          .subscribe(
            studentcourse => this.successMessage = "Record updated succesfully",
            error =>  this.errorMessage = <any>error);
    }else{
      this.dataService.addRecord("studentcourse", studentcourse.value)
          .subscribe(
            studentcourse => this.successMessage = "Record added succesfully",
            error =>  this.errorMessage = <any>error);
            this.studentcourse = {};
    }

  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.studentcourseForm = this.currentForm;
    this.studentcourseForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

onValueChanged(data?: any) {
  let form = this.studentcourseForm.form;

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
  'student_course_id': '',
  'student_id': '',
  'course_id': '',
};

validationMessages = {
  'student_course_id': {
    'required': 'Student Course ID is required.',
  },
  'student_id': {
    'required': 'Student ID is required.',
  },
  'course_id': {
    'required': 'Course ID is required.'
  }

};

}