import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { LazyLoadDirective } from '../lazy-load.directive';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'outline-item',
  templateUrl: './outline-item.component.html',
  styleUrls: ['./outline-item.component.css'],
  animations: [
    trigger('fadeIn', [
      state('false', style({opacity: 0, transform: 'translateX(100%)'})),
      state('true', style({ opacity: 1, transform: 'translateX(0%)'})),
      transition('false => true', animate('0.75s cubic-bezier(0.68, -0.55, 0.265, 1.55)'))
    ])
  ]
})
export class OutlineItemComponent implements OnInit, AfterViewInit {

  constructor(private cdRef : ChangeDetectorRef) { }
  public loaded : boolean = false;

  @ViewChild(LazyLoadDirective) lazy : LazyLoadDirective;

  @Input() name : string;
  @Input() imgUrl : string;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.lazy.onLoad = () => {
      this.loaded = true;
    }
    this.cdRef.detectChanges();
  }

}
