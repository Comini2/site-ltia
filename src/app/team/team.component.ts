import { Component, OnInit, QueryList, Input } from '@angular/core';
import { JsonService } from '../json.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  members = [];


  aOn = {'font-size' : '60px'}
  aOff = {'font-size' : '30px'}

  constructor(private jsonService : JsonService) {
  }

  ngOnInit() {
    this.jsonService.getJSON('assets/json/members.json', (data) => {
      this.members = data;
    })
  }

}
