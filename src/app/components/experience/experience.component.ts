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
    console.log(this.contacts);
  }

}
