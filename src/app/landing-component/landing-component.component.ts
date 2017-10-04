import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationEnd }   from '@angular/router';
import { WOW } from 'wowjs/dist/wow.min';


@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.css']
})
export class LandingComponentComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
     new WOW().init();

        // Material Select Initialization
        $(document).ready(function() {
            (<any>$('.mdb-select')).material_select();
        });
  	 // $('.hostel-lp .navbar').css('background-color', 'red');
  }

}
