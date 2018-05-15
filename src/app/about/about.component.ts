import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  @ViewChild("scrollTarget") target : ElementRef;

  constructor(private location : Location) { }

  ngAfterViewInit(){
    if(this.location.path() == '/ltia-no-mundo'){
      this.smoothScroll(250);
    }
    else
      window.scrollTo(0, 0);
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

}
