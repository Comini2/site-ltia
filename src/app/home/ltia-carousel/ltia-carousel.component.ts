import { Component, AfterViewInit, ViewChild, ElementRef, ContentChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { trigger, group, style, transition, stagger, animate, keyframes, query, AnimationBuilder, AnimationFactory, AnimationPlayer } from  '@angular/animations';
import { LtiaCarouselItemComponent } from './ltia-carousel-item/ltia-carousel-item.component';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'ltia-carousel',
  templateUrl: './ltia-carousel.component.html',
  styleUrls: ['./ltia-carousel.component.css']
})

export class LtiaCarouselComponent implements AfterViewInit {

  @ContentChildren(LtiaCarouselItemComponent) items : QueryList<LtiaCarouselItemComponent>;
  @ViewChild('main') carousel : ElementRef;

  slideSize: number;
  totalSize: number;
  currentIndex: number = 0;
  private player : AnimationPlayer;
  timeout: any;

  constructor(private cdRef:ChangeDetectorRef, private builder: AnimationBuilder, private router:Router) {
    router.events.subscribe((val) =>{
      if(val instanceof NavigationStart)
        clearTimeout(this.timeout);
    })
   }

  ngAfterViewInit(){
    this.totalSize = this.items.length*100;
    this.slideSize = 100/this.items.length;
    this.items.forEach((item, i) => {
      item.width = this.slideSize;
      item.left = i*this.slideSize;
      if(i === 0){
        item.lazyLoad();
        item.onLoad = () => this.setNextTimeOut();
      }
      item.detectChange();
    });
    this.cdRef.detectChanges();
  }

  load(index: number){
    this.items.forEach((item, i) => {
      if(i == index)
        item.lazyLoad();
    });
  }

  showNext(){
    if(this.currentIndex === this.items.length - 1) {
      this.setPrevTimeOut();
      return;
    }
    this.setNextTimeOut();
    this.currentIndex++;
    const offset = this.currentIndex*this.slideSize;
    this.animateItem(offset);
    this.load(this.currentIndex);
  }

  showPrev(){
    if(this.currentIndex === 0) {
      this.setNextTimeOut();
      return;
    }

    this.setPrevTimeOut();
    this.currentIndex--;
    const offset = this.currentIndex*this.slideSize;
    this.animateItem(offset);
  }

  animateItem(offset : number){
    const animation = this.builder.build([
      animate("500ms ease-out", style({transform: `translateX(-${offset}%`}))
    ]);

    this.player = animation.create(this.carousel.nativeElement);
    this.player.play();
  }
  
  setNextTimeOut(){
     clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.showNext();
      }, 5000);
  }

  setPrevTimeOut(){
    clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.showPrev();
      }, 5000);
  }
}
