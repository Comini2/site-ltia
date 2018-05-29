import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects = [];

  constructor(private jsonService : JsonService) {
    jsonService.getJSON('assets/json/projects.json', (data) => {
      this.projects = data;
    })
   }

  ngOnInit() {
  }

}
