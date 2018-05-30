import { Directive, ElementRef, HostListener, Input, HostBinding, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[lazy-load]'
})
export class LazyLoadDirective implements AfterViewInit{

  constructor(private el: ElementRef) { }

  public loaded : boolean = false;
  public loading : boolean = false;
  public onLoad : () => void;

  @Input('lazy-src') url : string;
  @HostBinding() src : string = '';

  @HostListener('window:load', []) onWindowLoad(){
    if((!this.loaded || !this.loading) && this.elementInViewport(this.el.nativeElement)){
      this.loading = true;
      this.src = this.url;
    }
  }

  @HostListener('window:scroll', []) onWindowScroll(){
    if((!this.loaded || !this.loading) && this.elementInViewport(this.el.nativeElement)){
      this.loading = true;
      this.src = this.url;
    } 
  }

  @HostListener('load') onImgLoad(){
    this.loaded = true;
    this.loading = false;
    if(this.onLoad != undefined)
      this.onLoad();
  }

  ngAfterViewInit() {
    if((!this.loaded || !this.loading) && this.elementInViewport(this.el.nativeElement)){
      this.loading = true;
      this.src = this.url;
    } 
  }



  elementInViewport(el) : boolean {
    var rect = el.getBoundingClientRect();

    return (
       rect.top    >= 0
    && rect.left   >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }
}
