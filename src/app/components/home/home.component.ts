import { ResumeDialogComponent } from './resume-dialog/resume-dialog.component';
import { style, transition, trigger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('fade',[transition('void=>*',[
      style({opacity: 0, transform: 'translateY(-100%)'}),
      animate(850)
    ])])
  ]
})
export class HomeComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openResumeDialog(){
    let dialogRef = this.dialog.open(ResumeDialogComponent,{
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe();
  }

}
