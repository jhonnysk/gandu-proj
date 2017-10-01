import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	 $('.hostel-lp .navbar').css('background-color', '#114861');
  }

}
