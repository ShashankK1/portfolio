import { Contacts } from './../../models/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  contacts:any[] = []
  constructor() { }

  ngOnInit(): void {
    this.contacts = Contacts;
  }

  redirect(e:any){
    if(e.type === 'Y'){
      // console.log(e.link);
      // window.open("www.linkedin.com/in/shashank-kumar-7a2546207");
    }
  }
}
