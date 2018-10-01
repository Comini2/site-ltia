import { Component, OnInit, QueryList } from '@angular/core';
import { JsonService } from '../json.service';
import { AcessibilityService } from '../acessibility.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

      /***************** Acessibility Scripts ***************/
      aOn = {
        'font-size' : '30px',
        'background-color' : '#88ccda',
        'color' : 'black',
        'padding' : '10px',
        'font-weight' : 'bold'
       };
    
      getAccessibilityState() {
        return AcessibilityService.accessibilityIsOn;
      }
    
      /********************************************************/

  projects = [];

  constructor(private jsonService : JsonService) {
    
   }

  ngOnInit() {
    this.jsonService.getJSON('assets/json/projects.json', (data) => {
      this.projects = data;
    })
  }

}
