import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { DataService } from '../data.service'
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component'


@Component({
  selector: 'app-majorcourse',
  templateUrl: './majorcourse.component.html',
  styleUrls: ['./majorcourse.component.css']

})
export class MajorcourseComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  majorcourses: any[];
  mode = 'Observable';

  constructor(private dataService: DataService, public dialog: MdDialog) { }

  ngOnInit() { this.getMajorcourses(); }
  
   getMajorcourses() {
     this.dataService.getRecords("majorcourse")
       .subscribe(
        majorcourses => this.majorcourses = majorcourses,
         error =>  this.errorMessage = <any>error);
   }
 
   deleteMajorcourse(id:number) {
 
     let dialogRef = this.dialog.open(DeleteConfirmComponent);
 
     dialogRef.afterClosed().subscribe(result => {
       if(result){
         this.dataService.deleteRecord("majorcourse", id)
           .subscribe(
             majorcourse => {this.successMessage = "Record(s) deleted succesfully"; this.getMajorcourses(); },
             error =>  this.errorMessage = <any>error);
       }
     });
   }
 
 }
