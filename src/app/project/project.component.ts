import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [JsonService],
  animations: [
    trigger('showProject', [
      state('true', style({
        transform: 'translateX(-50%)'
    })),
      state('false', style({
        transform: 'translateX(0)'
    })),
      transition('* => *', animate('150ms ease-in-out'))
  ])]
})
export class ProjectComponent implements OnInit {

  projects = [];
  selectedProject : any;
  show : boolean;

  constructor(private jsonService : JsonService) {
    jsonService.getJSON('assets/json/projects.json', (data) => {
      this.projects = data;
    })
   }

  ngOnInit() {
  }

  selectProject(project : any){
    this.show = true;
    this.selectedProject = project;
  }

  generateArray(obj){
    return Object.keys(obj).map((key)=>{ return obj[key]});
 }

 moveTop() {
   window.scroll(window.scrollX, 0);
 }

}
