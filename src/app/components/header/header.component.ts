import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headers:string[] = ['Home','Education','Skills','Contact'];
  smallDevice:boolean = false;
  toggle:boolean = false;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    if(window.innerWidth < 768){
      this.smallDevice = true;
    }
    window.addEventListener('resize',(event)=>{
      if(window.innerWidth<768){
        this.smallDevice = true;
      }
      else{
        this.smallDevice = false;
      }
    })
  }

  
  menuToggle(){
    this.toggle = !this.toggle;
  }


  headerClicked(e:number){
    this.router.navigate([this.headers[e].toLowerCase()])
  }

}
