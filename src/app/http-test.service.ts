import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class HttpTestService {

 url:string="http://ip.jsontest.com/";
  
  constructor(private _htttp:Http) { }

  getHttpData(){
  	return this._htttp.get(this.url).map(res=>res.json());
  }
}
