import { Component } from '@angular/core';
import { trigger, transition, query, style, animate, group, stagger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ trigger('routerAnimation', [
    transition('projects => project', [
      query(':enter, :leave', style({position: 'absolute', width: '100%'}), {optional: true}),
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
          ], { optional: true })
        ])
      ]),
      transition('project => projects', [
        query(':enter, :leave', style({position: 'absolute', width: '100%'}), {optional: true}),
        query('.project-item', style({opacity: 0})),
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
          ], { optional: true })
        ])
      ])
  ])]
})
export class AppComponent {


  getState(outlet){
    return outlet.activatedRouteData.state;
  }
}
