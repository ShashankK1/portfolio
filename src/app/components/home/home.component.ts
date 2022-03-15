import { style, transition, trigger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


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

  constructor() { }

  ngOnInit(): void {
  }

}
