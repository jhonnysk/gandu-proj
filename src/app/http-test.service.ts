import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class HttpTestService {

 url:string;
  
  constructor(private _htttp:Http) { }

  getHttpData(){
  	this.url="http://ip.jsontest.com/";
  	return this._htttp.get(this.url).map(res=>res.json());
  }

  postData(){
  	this.url="http://validate.jsontest.com/";
  	var json=JSON.stringify({var1:'test1',var2:3});
  	var params='json=' + json;
  	var headers=new Headers();
  	headers.append('Content-Type','application/x-www-form-urlencoded');

  	return this._htttp.post(this.url,params,{headers:headers}).map(res=>res.json());
  }
}
