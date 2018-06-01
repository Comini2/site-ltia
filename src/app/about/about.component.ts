import { Component, OnInit, AfterViewInit, HostListener} from '@angular/core';
import { JsonService } from '../json.service';
import { trigger, transition, query, style, animate, stagger } from '@angular/animations';
import {Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        query(':enter', style({opacity: 0, transform: 'translateX(-100px)'})),
        query(':enter', stagger('100ms', animate('0.2s', style({opacity: 1, transform: 'translateX(0px)'})))),
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  participations : any;
  selectedParticipation : any;
  activeButton : number = -1;
  private fragment : string;

  constructor(private jsonService : JsonService, private router : Router) { }

  @HostListener('window:load') onWindowLoad(){
    this.fragment = this.router.parseUrl(this.router.url).fragment;
  }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        this.fragment = this.router.parseUrl(this.router.url).fragment;
        try{
          document.querySelector('#' + this.fragment).scrollIntoView();
          window.scrollBy(0, -80);
        } catch (e) {console.log}
      }
    });

    this.jsonService.getJSON('../assets/json/teams.json', (data) => {
      this.participations = data;
    })
  }

  selectYear(index){
    this.activeButton = index;
    this.selectedParticipation = this.participations[index];
  }

}
