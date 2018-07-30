import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { LazyLoadDirective } from '../lazy-load.directive';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AcessibilityService } from '../acessibility.service';

@Component({
  selector: 'outline-item-team',
  templateUrl: './outline-item-team.component.html',
  styleUrls: ['./outline-item-team.component.css'],
  animations: [
    trigger('fadeIn', [
      state('false', style({opacity: 0, transform: 'translateX(100%)'})),
      state('true', style({ opacity: 1, transform: 'translateX(0%)'})),
      transition('false => true', animate('0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55)'))
    ])
  ]
})
export class OutlineItemTeamComponent implements OnInit, AfterViewInit {

   /***************** Acessibility Scripts ***************/
   aOn = {
    'background-color' : 'white',
    'color' : 'black',
    'padding' : '40px',
    'font-weight' : 'bold'
   };
  public getAccessibilityState() {
    return AcessibilityService.accessibilityIsOn;
  }
  /********************************************************/

  constructor(private cdRef : ChangeDetectorRef, private access: AcessibilityService) { }
  public loaded : boolean = false;

  @ViewChild(LazyLoadDirective) lazy : LazyLoadDirective;

  @Input() name : string;
  @Input() role : string;
  @Input() imgUrl : string;
  @Input() behance : string;
  @Input() github : string;
  @Input() linkedin : string;
  @Input() facebook : string;
  @Input() instagram : string;
  @Input() twitter : string;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.lazy.onLoad = () => {
      this.loaded = true;
    }
    this.cdRef.detectChanges();
  }

}
