import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationEnd }   from '@angular/router';


@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.css']
})
export class LandingComponentComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) {

  		 router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log(e.url);
        if(e.url==="/landing"){
          console.log("matcheddd");
          $('.hostel-lp .navbar').css('background-color', "");
        }
      }
    });

   }

  ngOnInit() {
  	 // $('.hostel-lp .navbar').css('background-color', 'red');
  }

}
