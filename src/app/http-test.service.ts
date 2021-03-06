import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {Observable} from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import {TestClass} from './test-class';

// const headers=new Headers();
// headers.append('Content-Type','application/x-www-form-urlencoded');

@Injectable()
export class HttpTestService {

 url:string;
  params:any;

  apiUrl="http://127.0.0.1:3000";

  headers = new Headers({'Content-Type': 'application/json'});

  constructor(private _htttp:Http, private route:ActivatedRoute) { 

  }

  // getHttpData():Observable<TestClass[]>{
  // 	// this.url="http://ip.jsontest.com/";
  //   this.url="http://172.22.1.36:3000/api/getData"
  // 	return this._htttp.get(this.url).map((res:Response)=><TestClass[]>res.json().articleList)
  //   .do(data=>console.log(JSON.stringify(data)));
  // }

  getHttpData2(){
    // this.url="http://ip.jsontest.com/";
    this.url="http://127.0.0.1:3000/api/getData"
    return this._htttp.get(this.url).map((res:Response)=>res.json())
    .do(data=>console.log(JSON.stringify(data)));
  }


  postData(){
  	this.url="http://validate.jsontest.com/";
  	var json=JSON.stringify({var1:'test1',var2:3});
  	var params='json=' + json;
  	return this._htttp.post(this.url,params,{headers:this.headers}).map(res=>res.json());
  }

  paramCheck(route){
    
   // this.route=route;
   route.params.subscribe(params =>{
     this.params=params;
   });
   return this.params;
  }

  getImageFromServer(){
    this.url=this.apiUrl+'/api/getImage';
    return this._htttp.get(this.url).map((res:Response)=>res.json());

  }
  getApiUrl(){
    return this.apiUrl;
  }

  deleteImageServer(imgId,imgSrc){
    let imgObj={imgId:imgId,imgSrc:imgSrc};
    this.url=this.apiUrl+'/api/deleteImage';   
    var a='imgObj:'+JSON.stringify(imgObj);
    return this._htttp.post(this.url,JSON.stringify({imgObj: imgObj}),{headers:this.headers}).map(res=>res.json());
  }
}
