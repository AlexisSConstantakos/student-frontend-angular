import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service'

@Component({
  selector: 'app-major-form',
  templateUrl: './major-form.component.html',
  styleUrls: ['./major-form.component.css']
})
export class MajorFormComponent implements OnInit {

  majorForm: NgForm;
  @ViewChild('majorForm') currentForm: NgForm;

  successMessage: string;
  errorMessage: string;

  major: object;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  getRecordForEdit(){
    this.route.params
      .switchMap((params: Params) => this.dataService.getRecord("major", +params['id']))
      .subscribe(major => this.major = major);
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        (+params['id']) ? this.getRecordForEdit() : null;
      });

    }

  saveMajor(major: NgForm){
    if(typeof major.value.major_id === "number"){
      this.dataService.editRecord("major", major.value, major.value.major_id)
          .subscribe(
            major => this.successMessage = "Record updated succesfully",
            error =>  this.errorMessage = <any>error);
    }else{
      this.dataService.addRecord("major", major.value)
          .subscribe(
            major => this.successMessage = "Record added succesfully",
            error =>  this.errorMessage = <any>error);
            this.major = {};
    }

}

ngAfterViewChecked() {
  this.formChanged();
}

formChanged() {
  this.majorForm = this.currentForm;
  this.majorForm.valueChanges
    .subscribe(
      data => this.onValueChanged(data)
    );
}

onValueChanged(data?: any) {
let form = this.majorForm.form;

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
'major_id': '',
'major': '',
'sat': '',
};

validationMessages = {
'major_id': {
  'required': 'Major ID is required.',
},
'major': {
  'required': 'Major is required.',
  'minlength': 'Major must be at least 2 characters long.',
  'maxlength': 'Major cannot be more than 30 characters long.'
},
'sat': {
  'pattern': 'SAT score must be between 400 and 1600 characters long.',
  'maxlength': 'SAT cannot be more than 4 characters long.'
}

};

}

