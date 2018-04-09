import { Component, AfterViewInit, ChangeDetectorRef, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'ltia-carousel-item',
  templateUrl: './ltia-carousel-item.component.html',
  styleUrls: ['./ltia-carousel-item.component.css']
})

export class LtiaCarouselItemComponent implements AfterViewInit {

  preloadURL: string;
  public width: number;
  public left: number;
  isLoaded = false;

  public onLoad: () => void;

  @Input() imgSrc : string;
  @Input('itemText') text: string;
  @ViewChild('item') item : ElementRef;

  constructor(private cdRef:ChangeDetectorRef) { }

  ngAfterViewInit() {

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

  public lazyLoad() {
    if(!this.isLoaded){
      this.preloadURL = this.imgSrc;
      this.isLoaded = true;
    }
  }

  loaded(){
    this.item.nativeElement.style.backgroundImage = "url("+this.imgSrc+")";
    if(this.onLoad != null)
      this.onLoad();
  }
}
