import { Component, OnInit } from '@angular/core';
import {HttpTestService} from '../http-test.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

	id: number;
  private sub: any;
  name:string;
  constructor(private httpTestService:HttpTestService, private route:ActivatedRoute) { }

  ngOnInit() {  	
  console.log(this.httpTestService.paramCheck(this.route));
  this.id=this.httpTestService.paramCheck(this.route).id;
  this.name=this.httpTestService.paramCheck(this.route).name;
  }

}
