import { Component, OnInit } from '@angular/core';
import {HttpTestService} from './http-test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  getData:string = 'app';
  postDataString:string = 'POst Data';
  constructor(private httpTestService:HttpTestService){}

  ngOnInit(){

  }

  getHttpData1(){
  	this.httpTestService.getHttpData().subscribe(
  			data=>this.getData=data.ip,error=>alert(error),()=>console.log('finished')
  		);
  }

  postHttpData(){
  		this.httpTestService.postData().subscribe(
  			data=>this.postDataString=JSON.stringify(data),error=>alert(error),()=>console.log('finished')
  		);	
  }
}
