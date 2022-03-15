import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {


  particlesOptions:any = {
    background: {
        color: {
            value:'#a517ba'
        }
    },
    fpsLimit: 120,
    fullScreen: {
      enable: true,
      zIndex: 0 
    },
    interactivity: {
        events: {
            // onClick: {
            //     enable: true,
            //     mode: "push"
            // },
            // onHover: {
            //     enable: true,
            //     mode: "repulse"
            // },
            resize: true
        },
        // modes: {
        //     bubble: {
        //         distance: 400,
        //         duration: 2,
        //         opacity: 0.4,
        //         size: 40
        //     },
        //     push: {
        //         quantity: 4
        //     },
        //     repulse: {
        //         distance: 200,
        //         duration: 1
        //     }
        // }
    },
    particles: {
        color: {
            value: "#fff"
        },
        links: {
            color: "#fff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
        },
        move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 2,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 50
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            value: { min: 1, max: 5 }
        }
    },
    detectRetina: true
};

  constructor() { }

  ngOnInit(): void {
  }

}
