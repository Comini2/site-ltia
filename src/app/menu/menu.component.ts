import { Component, OnInit, Input} from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
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

  aOn = { 'border' : '2px solid green'}

  aOff = { 'border' : '2px solid red'}

  menuHomeStyle = { 'menu-button-pages' : false }

  menuPagesStyle = { 'menu-button-pages' : true }

  barHomeStyle = { 'lateral-bar-pages' : false }

  barPagesStyle = { 'lateral-bar-pages' : true }

  barStyle = this.barHomeStyle;
  menuStyle = this.menuHomeStyle;

  accessibilityState: boolean = false;


  pages = [
    { path: 'about', text: 'Sobre' },
    { path: 'about', fragment: 'no-mundo', text: 'LTIA no mundo' },
    { path: 'projects', text: 'Projetos' },
    //{ path: '', text: 'Cursos' },
    { path: 'team', text: 'Equipe' },
    { path: 'location', text: 'Local'},
    { path: 'contact', text: 'Contato'},
    { path: 'accessibility', text: 'Acessibilidade'}
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

  accessibilitySwitch(){
    this.accessibilityState = !this.accessibilityState;
  }

  public getAccessibilityState(){
    return this.accessibilityState;
  }

  onKeydown(event) {
    if (event.key === "Enter" || event.keyCode === 32 /*spacebar*/) {
      this.accessibilitySwitch();
    }
  }

  constructor(private location: Location, private router: Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        window.scrollTo(0, 0);
        this.setStyle();
        if(this.location.path() == ""){
          this.check = true;
          return;
        }
        this.check = false;
      }
    });
   }

  ngOnInit() {
    this.setStyle();
  }


}
