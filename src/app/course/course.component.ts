import { Component, OnInit,Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { DataService } from '../data.service'
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  courses: any[];
  mode = 'Observable';

  constructor(private dataService: DataService, public dialog: MdDialog) {}

  ngOnInit() { this.getCourses(); }
  
   getCourses() {
     this.dataService.getRecords("course")
       .subscribe(
         courses => this.courses = courses,
         error =>  this.errorMessage = <any>error);
   }
 
   deleteCourses(id:number) {
 
     let dialogRef = this.dialog.open(DeleteConfirmComponent);
 
     dialogRef.afterClosed().subscribe(result => {
       if(result){
         this.dataService.deleteRecord("course", id)
           .subscribe(
             course => {this.successMessage = "Record(s) deleted succesfully"; this.getCourses(); },
             error =>  this.errorMessage = <any>error);
       }
     });
   }
 
 }