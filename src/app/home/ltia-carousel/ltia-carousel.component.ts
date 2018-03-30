import { Component, OnInit, AnimationPlayer, ViewChild, ElementRef } from '@angular/core';
import { trigger, group, style, transition, stagger, animate, keyframes, query } from  '@angular/animations';
@Component({
  selector: 'ltia-carousel',
  templateUrl: './ltia-carousel.component.html',
  styleUrls: ['./ltia-carousel.component.css'],
  animations: [
    trigger('next', [
      transition(':enter', [
        query(':enter', [], {optional: true})
      ]),
      transition('* => *', [
        group([query('.carousel-text', animate('500ms ease-out', keyframes([
            style({ left: '-50%', offset: 0.5}),
            style({ left: '100%', offset: 0.50001}),
            style({ left: '50%', offset: 1})
          ]))
        ),
        query('.carousel-item', animate('500ms ease-out', 
          style({transform: 'translateX(-100%)'})), {optional: true}
      )])
      ])
    ])
  ]

})
export class LtiaCarouselComponent implements OnInit {

  items: any[] = [
    {order: 0, path: 'assets/img/site-sobre.png', text: 'SOBRE'},
    {order: 1, path: 'assets/img/site-ltia-no-mundo.png', text: 'LTIA NO MUNDO'},
    {order: 2, path: 'assets/img/site-projetos.png', text: 'PROJETOS'},
    {order: 3, path: 'assets/img/site-cursos.png', text: 'CURSOS'},
    {order: 4, path: 'assets/img/site-equipe.png', text: 'EQUIPE'}
  ];

  order: string = 'order';

  totalSize: number = this.items.length*100;
  eachSize: number = 100/this.items.length;
  isDisabled = true;
  canChange = true;

  currentText: String = this.items[0].text;
  currentIndex: number = 0;
  private player : AnimationPlayer;

  constructor() { }

  ngOnInit() { }

  showNext() : void{
    if(this.isDisabled)
      this.isDisabled = !this.isDisabled;
    if(!this.canChange)
      return;

    this.canChange = false;
    this.currentIndex == this.items.length - 1 ? this.currentIndex = 0 : ++this.currentIndex;
  }

  animationDone($event){
    this.canChange = true;
    if(this.isDisabled)
      return;

    this.items.forEach(item => {
       item.order--;
       if(item.order < 0)
         item.order = this.items.length - 1;
   })
  }

  animationStart($event){
    setTimeout(() => {
      this.currentText = this.items[this.currentIndex].text;
    }, 150);
  }

}
