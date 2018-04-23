import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ltia-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuHomeStyle = { 'menu-button-pages' : false }

  menuPagesStyle = { 'menu-button-pages' : true }

  barHomeStyle = { 'lateral-bar-pages' : false }

  barPagesStyle = { 'lateral-bar-pages' : true }

  barStyle = this.barHomeStyle;
  menuStyle = this.menuHomeStyle;

  pages = [
    { path: 'about', text: 'Sobre' },
    { path: '', text: 'LTIA no mundo' },
    { path: '', text: 'Projetos' },
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

  constructor(private location: Location, private router: Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd)
        this.setStyle();
    });
   }

  ngOnInit() {
    this.setStyle();
  }

}
