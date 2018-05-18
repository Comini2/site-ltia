import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ltia-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public hidden : boolean = false;

  constructor(private location: Location, private router: Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd)
        if(this.location.path() == "")
          this.hidden = true;
        else
          this.hidden = false;
    });
   }

  ngOnInit() {
    if(this.location.path() == "")
      this.hidden = true;
    else
      this.hidden = false;
  }

}
