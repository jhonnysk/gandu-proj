import { Component, OnInit } from '@angular/core';
import {HttpTestService} from './http-test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  getData:string = 'app';

  constructor(private httpTestService:HttpTestService){}

  ngOnInit(){

  }

  getHttpData(){
  	this.httpTestService.getHttpData().subscribe(
  			data=>this.getData=data.ip,error=>alert(error),()=>console.log('finished')
  		);
  }
}
