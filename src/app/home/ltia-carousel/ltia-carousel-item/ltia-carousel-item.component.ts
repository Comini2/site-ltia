import { Component, AfterViewInit, ChangeDetectorRef, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'ltia-carousel-item',
  templateUrl: './ltia-carousel-item.component.html',
  styleUrls: ['./ltia-carousel-item.component.css']
})

export class LtiaCarouselItemComponent implements AfterViewInit {

  public width: number;
  public left: number;

  @Input() imgSrc : string;
  @Input('itemText') text: string;

  constructor(private cdRef:ChangeDetectorRef, private element: ElementRef) { }

  ngAfterViewInit() {
    let elem = this.element.nativeElement.querySelector('.carousel-item');
    elem.style.backgroundImage = "url("+this.imgSrc+")";
  }

  getStyle(){
    let myStyle = {
      'width': this.width + '%',
      'left': this.left + '%'
    }

    return myStyle;
  }

  public detectChange(){
    this.cdRef.detectChanges();
  }

}
