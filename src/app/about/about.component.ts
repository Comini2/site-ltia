import { Component, OnInit, AfterViewInit} from '@angular/core';
import { JsonService } from '../json.service';
import { trigger, transition, query, style, animate, stagger } from '@angular/animations';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

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
export class AboutComponent implements AfterViewInit, OnInit {

  participations : any;
  selectedParticipation : any;
  activeButton : number = -1;
  private fragment : string;

  constructor(private jsonService : JsonService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {this.fragment = fragment});

    this.router.events.subscribe( e => {
      if( e instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        try{
          document.querySelector('#' + this.fragment).scrollIntoView();
          window.scrollBy(0, -80);
        } catch (e) {}
      }
    });

    this.jsonService.getJSON('../assets/json/teams.json', (data) => {
      this.participations = data;
    })
  }

  ngAfterViewInit(){
    try{
      document.querySelector('#' + this.fragment).scrollIntoView();
      window.scrollBy(0, -80);
    } catch (e) {}
  }

  // smoothScroll(totalTime : number){
  //   let deltaTime = 1000/60;
  //   let targetPosition = this.target.nativeElement.offsetTop - this.target.nativeElement.offsetHeight;
  //   let speed = targetPosition/totalTime;
  //   let loops = targetPosition/(speed*deltaTime);
  //   let currentPosition = 0;
  //   for(let i = 0; i<loops; i++){
  //     setTimeout(() => {
  //       currentPosition += speed*deltaTime;
  //       window.scrollTo(0, currentPosition);
  //     }, deltaTime*i);
  //   }
  // }

  selectYear(index){
    this.activeButton = index;
    this.selectedParticipation = this.participations[index];
  }

}
