import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [JsonService]
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
