import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineItemTeamComponent } from './outline-item-team.component';

describe('OutlineItemTeamComponent', () => {
  let component: OutlineItemTeamComponent;
  let fixture: ComponentFixture<OutlineItemTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlineItemTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineItemTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
