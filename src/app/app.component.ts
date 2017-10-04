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
  showNav=false;
  createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  eraseCookie(name) {
      this.createCookie(name,"",-1);
  }


  constructor(private httpTestService:HttpTestService, private router:Router,private route:ActivatedRoute){
     
    router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          console.log(e.url);
          
          if(e.url==="/landing"){
            $('.hostel-lp .navbar').css('background-color', "");
          }
          if(e.url==="/detail"){
            $('.hostel-lp .navbar').css('background-color', "#26a69a");
          }
          if(e.url==="/team"){
           // this.eraseCookie("name");
            $('.hostel-lp .navbar').css('background-color', '#114861');
          }
           window.scrollTo(0, 0);

           if(this.readCookie("name")){
             this.showNav=true;
           }
           else{
            this.showNav=false; 
           }
           console.log(this.readCookie("name"));
        }

      });

     // this.createCookie("name","john","");
      
  }


  ngOnInit(){

    
  }
 ngAfterViewInit(){}

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


