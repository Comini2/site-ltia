import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  swipedLeft() {
    console.log('Foi!');
  }

  swipedRight() {
    console.log('Foi2!');
  }

  @HostListener('window:scroll') onClick(){
    console.log("sauhasu");
  }

}
