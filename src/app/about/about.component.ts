import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { Location } from '@angular/common';
import { JsonService } from '../json.service';
import { trigger, transition, query, style, animate, stagger } from '@angular/animations';

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

  @ViewChild("scrollTarget") target : ElementRef;
  @ViewChildren("img") imgs : QueryList<ElementRef>;
  participations : any;
  selectedParticipation : any;
  activeButton : number = -1;
  loadedImgs : number = 0;

  constructor(private jsonService : JsonService, private location : Location, private renderer : Renderer2) { }

  ngOnInit() {
    this.jsonService.getJSON('../assets/json/teams.json', (data) => {
      this.participations = data;
    })
  }

  ngAfterViewInit(){

    if(this.location.path() === '/ltia-no-mundo'){
      if(this.loadedImgs === this.imgs.length){
        this.smoothScroll(250);
        return;
      }
      this.imgs.forEach(img => {
        this.renderer.listen(img.nativeElement, 'load', () => {
          this.loadedImgs++;
          if(this.loadedImgs === this.imgs.length)
            this.smoothScroll(250);
        })
      });
    }
    else{
      window.scrollTo(0, 0);
    }  
  }

  smoothScroll(totalTime : number){
    let deltaTime = 1000/60;
    let targetPosition = this.target.nativeElement.offsetTop - this.target.nativeElement.offsetHeight;
    let speed = targetPosition/totalTime;
    let loops = targetPosition/(speed*deltaTime);
    let currentPosition = 0;
    for(let i = 0; i<loops; i++){
      setTimeout(() => {
        currentPosition += speed*deltaTime;
        window.scrollTo(0, currentPosition);
      }, deltaTime*i);
    }
  }

  selectYear(index){
    this.activeButton = index;
    this.selectedParticipation = this.participations[index];
  }

}
