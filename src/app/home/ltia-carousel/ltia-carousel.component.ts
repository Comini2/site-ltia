import { Component, OnInit, AnimationPlayer, ViewChild, ElementRef } from '@angular/core';
import { trigger, style, transition, state, animate, query, AnimationFactory, AnimationBuilder } from  '@angular/animations';
@Component({
  selector: 'ltia-carousel',
  templateUrl: './ltia-carousel.component.html',
  styleUrls: ['./ltia-carousel.component.css']
})
export class LtiaCarouselComponent implements OnInit {

  paths: String[] = [
    'assets/img/site-sobre.png',
    'assets/img/site-ltia-no-mundo.png',
    'assets/img/site-projetos.png',
    'assets/img/site-cursos.png',
    'assets/img/site-equipe.png'
  ];

  texts: String[] = [
    'SOBRE',
    'LTIA NO MUNDO',
    'PROJETOS',
    'CURSOS',
    'EQUIPE'
  ];

  totalSize: number = this.paths.length*100;
  eachSize: number = 100/this.paths.length;

  currentText: String = this.texts[0];
  currentIndex: number = 0;
  private player : AnimationPlayer;
  @ViewChild('carousel') private carousel : ElementRef;


  constructor(private builder: AnimationBuilder) { }

  ngOnInit() {

  }

  showNext() : void{
    this.currentIndex == this.paths.length - 1 ? this.currentIndex = 0 : ++this.currentIndex;
    this.currentText = this.texts[this.currentIndex];

    const myAnimation : AnimationFactory = this.builder.build([
       animate('500ms ease-out', style({ transform: 'translateX(-'+this.eachSize*this.currentIndex+'%)' }))
    ]);

    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

}
