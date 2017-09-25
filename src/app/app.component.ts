import { Component, OnInit } from '@angular/core';
import {HttpTestService} from './http-test.service';
import { Router }   from '@angular/router';

import {TestClass} from './test-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  getData:TestClass[];
  postDataString:string = 'POst Data';
  constructor(private httpTestService:HttpTestService, private router:Router){}

  ngOnInit(){
  }

  getHttpData1(){
  	this.httpTestService.getHttpData().subscribe(
  			data=>this.getData=data,error=>alert(error),()=>console.log('finished')
  		);
  }

  postHttpData(){
  		this.httpTestService.postData().subscribe(
  			data=>this.postDataString=JSON.stringify(data),error=>alert(error),()=>console.log('finished')
  		);	
  }

  goToProductDetails(id,name){
    // console.log(id+'   '+name)
    this.router.navigate(['/detail', id,name]);
  }
}
