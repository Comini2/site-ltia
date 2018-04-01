import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtiaCarouselItemComponent } from './ltia-carousel-item.component';

describe('LtiaCarouselItemComponent', () => {
  let component: LtiaCarouselItemComponent;
  let fixture: ComponentFixture<LtiaCarouselItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtiaCarouselItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtiaCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
