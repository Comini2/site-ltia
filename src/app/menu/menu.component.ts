import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'ltia-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('anim', [
      state('true', style({
        transform: 'translateX(0)'
    })),
      state('false', style({
        transform: 'translateX(-250px)'
    })),
      transition('* => *', animate('150ms ease-in-out'))
  ])]
})
export class MenuComponent implements OnInit {

  check : boolean = true;

  menuHomeStyle = { 'menu-button-pages' : false }

  menuPagesStyle = { 'menu-button-pages' : true }

  barHomeStyle = { 'lateral-bar-pages' : false }

  barPagesStyle = { 'lateral-bar-pages' : true }

  barStyle = this.barHomeStyle;
  menuStyle = this.menuHomeStyle;

  pages = [
    { path: 'about', text: 'Sobre' },
    { path: 'ltia-no-mundo', text: 'LTIA no mundo' },
    { path: 'project', text: 'Projetos' },
    { path: '', text: 'Cursos' },
    { path: '', text: 'Equipe' },
    { path: 'location', text: 'Local'},
    { path: '', text: 'Contato'}
  ]

  setPagesStyle(){
    this.barStyle = this.barPagesStyle;
    this.menuStyle = this.menuPagesStyle;
  }

  setHomeStyle(){
    this.barStyle = this.barHomeStyle;
    this.menuStyle = this.menuHomeStyle;
  }

  setStyle(){
    if(this.location.path() != "")
      this.setPagesStyle();
    else
      this.setHomeStyle();
  }

  changeState(){
    this.check = !this.check;
  }

  constructor(private location: Location, private router: Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        this.setStyle();
        if(this.location.path() == "")
          return;
        this.check = false;
      }
    });
   }

  ngOnInit() {
    this.setStyle();
  }

}
