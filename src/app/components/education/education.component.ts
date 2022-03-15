import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations:[
    trigger('fade',[transition('void=>*',[
      style({opacity: 0,transform:'translateY(-100%)'}),
      animate(850)
    ])])
  ]
})
export class EducationComponent implements OnInit {

  smallSize:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.checkSize();
    window.addEventListener('resize',()=>{
      this.checkSize();
    })
  }

  checkSize(){
    if(window.innerWidth < 576){
      this.smallSize = true;
    }
    else{
      this.smallSize = false;
    }
  }

}
