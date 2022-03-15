import { trigger, transition, style, animate } from '@angular/animations';
import { Skills } from './../../models/skills';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations:[
    trigger('side',[transition('void=>*',[
      style({opacity: 0, transform: 'translateX(-100%)'}),
      animate(1200)
    ])]),
    trigger('up',[transition('void=>*',[
      style({opacity: 0, transform: 'translateX(-100%)'}),
      animate(1200)
    ])])
  ]
})
export class SkillsComponent implements OnInit {

  skills:any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.skills = Skills;
  }

  

}
