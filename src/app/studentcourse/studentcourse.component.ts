import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { DataService } from '../data.service'
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component'

@Component({
  selector: 'app-studentcourse',
  templateUrl: './studentcourse.component.html',
  styleUrls: ['./studentcourse.component.css']
})
export class StudentcourseComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  studentcourses: any[];
  mode = 'Observable';

  constructor(private dataService: DataService, public dialog: MdDialog) { }

  ngOnInit() { this.getStudentcourses(); }
  
   getStudentcourses() {
     this.dataService.getRecords("studentcourse")
       .subscribe(
         studentcourses => this.studentcourses = studentcourses,
         error =>  this.errorMessage = <any>error);
   }
 
   deleteStudentcourses(id:number) {
 
     let dialogRef = this.dialog.open(DeleteConfirmComponent);
 
     dialogRef.afterClosed().subscribe(result => {
       if(result){
         this.dataService.deleteRecord("studentcourse", id)
           .subscribe(
             studentcourse => {this.successMessage = "Record(s) deleted succesfully"; this.getStudentcourses(); },
             error =>  this.errorMessage = <any>error);
       }
     });
   }
 
 }
