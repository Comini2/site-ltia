import { Component, OnInit } from '@angular/core';
import { AcessibilityService } from '../acessibility.service';

@Component({
  selector: 'app-underhome',
  templateUrl: './underhome.component.html',
  styleUrls: ['./underhome.component.css'],
})
export class UnderhomeComponent {

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

  constructor(private access: AcessibilityService) { }

  ngOnInit() {
  }


}
