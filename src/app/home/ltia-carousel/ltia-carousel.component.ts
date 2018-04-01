import { Component, AfterViewInit, AnimationPlayer, ViewChild, ElementRef, ContentChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { trigger, group, style, transition, stagger, animate, keyframes, query, AnimationBuilder, AnimationFactory } from  '@angular/animations';
import { LtiaCarouselItemComponent } from './ltia-carousel-item/ltia-carousel-item.component';

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

  constructor(private cdRef:ChangeDetectorRef, private builder: AnimationBuilder) { }

  ngAfterViewInit(){
   this.totalSize = this.items.length*100;
   this.slideSize = 100/this.items.length;
   this.items.forEach((item, i) => {
    item.width = this.slideSize;
    item.left = i*this.slideSize;
    item.detectChange();
   });
   this.cdRef.detectChanges();
  }

  showNext(){
    if(this.currentIndex === this.items.length - 1) return;

    this.currentIndex++;
    const offset = this.currentIndex*this.slideSize;
  
    const animation = this.builder.build([
      animate("500ms ease-out", style({transform: `translateX(-${offset}%`}))
    ]);

    this.player = animation.create(this.carousel.nativeElement);
    this.player.play();
  }

  showPrev(){
    if(this.currentIndex === 0) return; 
    
    this.currentIndex--;

    const offset = this.currentIndex*this.slideSize;
  
    const animation = this.builder.build([
      animate("500ms ease-out", style({transform: `translateX(-${offset}%`}))
    ]);

    this.player = animation.create(this.carousel.nativeElement);
    this.player.play();
  }

}
