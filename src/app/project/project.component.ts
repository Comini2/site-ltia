import { Component, OnInit, QueryList } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects = [];

  constructor(private jsonService : JsonService) {
    
   }

  ngOnInit() {
    this.jsonService.getJSON('assets/json/projects.json', (data) => {
      this.projects = data;
    })
  }

}
