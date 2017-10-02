import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service'

@Component({
  selector: 'app-majorcourse-form',
  templateUrl: './majorcourse-form.component.html',
  styleUrls: ['./majorcourse-form.component.css']
})
export class MajorcourseFormComponent implements OnInit {

  majorcourseForm: NgForm;
  @ViewChild('majorcourseForm') currentForm: NgForm;

  successMessage: string;
  errorMessage: string;

  majorcourse: object;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getRecordForEdit(){
    this.route.params
      .switchMap((params: Params) => this.dataService.getRecord("majorcourse", +params['id']))
      .subscribe(majorcourse => this.majorcourse = majorcourse);
  }


  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        (+params['id']) ? this.getRecordForEdit() : null;
      });

  }

  saveMajorcourse(majorcourse: NgForm){
    if(typeof majorcourse.value.majorcourse_id === "number"){
      this.dataService.editRecord("majorcourse", majorcourse.value, majorcourse.value.majorcourse_id)
          .subscribe(
            majorcourse => this.successMessage = "Record updated succesfully",
            error =>  this.errorMessage = <any>error);
    }else{
      this.dataService.addRecord("majorcourse", majorcourse.value)
          .subscribe(
            majorcourse => this.successMessage = "Record added succesfully",
            error =>  this.errorMessage = <any>error);
            this.majorcourse = {};
    }

  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.majorcourseForm = this.currentForm;
    this.majorcourseForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

onValueChanged(data?: any) {
  let form = this.majorcourseForm.form;

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
  'major_course_id': '',
  'major_id': '',
  'course_id': '',
};

validationMessages = {
  'major_course_id': {
    'required': 'Major Course ID is required.',
  },
  'major_id': {
    'required': 'Major ID is required.',
  },
  'course_id': {
    'required': 'Course ID is required.'
  }

};

}

