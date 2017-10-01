import { Component, OnInit ,Inject} from '@angular/core';
import {HttpTestService} from './http-test.service';
import { Router,ActivatedRoute,NavigationEnd }   from '@angular/router';

import {TestClass} from './test-class';

import { WOW } from 'wowjs/dist/wow.min';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  // getData:TestClass[];
  // postDataString:string = 'POst Data';


  baal="jhonny";
  // router:Router;

  

  constructor(private httpTestService:HttpTestService, private router:Router,private route:ActivatedRoute){
  }

  ngOnInit(){

     new WOW().init();
      $(function () {
            $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
        });
        
        // Material Select Initialization
        $(document).ready(function() {
            (<any>$('.mdb-select')).material_select();
        });
  }
 ngAfterViewInit(){
   

   (<any>$(".button-collapse")).sideNav();
        var el = document.querySelector('.custom-scrollbar');
        // Ps.initialize(el);
        var el = document.querySelector('.custom-scrollbar');
        // Ps.initialize(el);  
  }

  getHttpData1(){
  	this.httpTestService.getHttpData2().subscribe(
  			data=>console.log(data),error=>alert(error),()=>console.log('finished')
  		);
  }

  // postHttpData(){
  // 		this.httpTestService.postData().subscribe(
  // 			data=>this.postDataString=JSON.stringify(data),error=>alert(error),()=>console.log('finished')
  // 		);	
  // }

  // goToProductDetails(id,name){
  //   this.router.navigate(['/detail', id,name]);
  // }


// When the user clicks the button, open the modal 



  
}


