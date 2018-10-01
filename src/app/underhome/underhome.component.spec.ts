import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderhomeComponent } from './underhome.component';

describe('UnderhomeComponent', () => {
  let component: UnderhomeComponent;
  let fixture: ComponentFixture<UnderhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
