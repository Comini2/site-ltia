import { Component, OnInit } from '@angular/core';
import { AcessibilityService } from '../acessibility.service';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.css'],
})
export class AccessibilityComponent {

  /***************** Acessibility Scripts ***************/
  aOn = {
    'font-size' : '30px',
    'background-color' : 'white',
    'color' : 'black'
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
