import { Component, OnInit } from '@angular/core';
import { AcessibilityService } from '../acessibility.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {


  /***************** Acessibility Scripts ***************/
  aOn = {
    'font-size' : '30px',
    'background-color' : '#88ccda',
    'color' : 'black',
    'padding' : '10px',
    'font-weight' : 'bold',
    'line-height': '40px'
   };
  public getAccessibilityState() {
    return AcessibilityService.accessibilityIsOn;
  }
  /********************************************************/

  constructor() { }

  ngOnInit() {
  }

}
