import { Component, OnInit, AfterViewInit } from '@angular/core';
import { JsonService } from '../json.service';
import { trigger, state, style, transition, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        query(':enter', style({opacity: 0, transform: 'translateX(100%)'}), {optional: true}),
        query(':enter', [
          stagger('100ms',[
            animate('.3s ease-out',style({ opacity: 1, transform: 'translateX(0%)'}))
          ])
        ], {optional: true})
      ])
    ])
  ]
})
export class ProjectComponent implements OnInit, AfterViewInit {

  projects = [];

  constructor(private jsonService : JsonService) {
    jsonService.getJSON('assets/json/projects.json', (data) => {
      this.projects = data;
    })
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }

}
