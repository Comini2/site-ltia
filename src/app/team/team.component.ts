import { Component, OnInit, QueryList } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  members = [];

  constructor(private jsonService : JsonService) { 

  }

  ngOnInit() {
    this.jsonService.getJSON('assets/json/members.json', (data) => {
      this.members = data;
    })
  }

}
