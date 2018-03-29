import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtiaCarouselComponent } from './ltia-carousel.component';

describe('LtiaCarouselComponent', () => {
  let component: LtiaCarouselComponent;
  let fixture: ComponentFixture<LtiaCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtiaCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtiaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
