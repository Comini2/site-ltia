import { Component, OnInit, QueryList, Input } from '@angular/core';
import { JsonService } from '../json.service';
import { MenuComponent } from '../menu/menu.component';
import { AcessibilityService } from '../acessibility.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  members = [];

   /***************** Acessibility Scripts ***************/
   aOn = {
     'font-size' : '30px',
     'background-color' : '#88ccda',
     'color' : 'black',
     'padding' : '10px',
     'font-weight' : 'bold'
    };
   public getAccessibilityState() {
     return AcessibilityService.accessibilityIsOn;
   }
   /********************************************************/



  constructor(private jsonService: JsonService, private access: AcessibilityService) {
  }

  ngOnInit() {
    this.jsonService.getJSON('assets/json/members.json', (data) => {
      this.members = data;
    });
  }

}
