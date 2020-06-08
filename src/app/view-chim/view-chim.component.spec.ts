import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChimComponent } from './view-chim.component';

describe('ViewChimComponent', () => {
  let component: ViewChimComponent;
  let fixture: ComponentFixture<ViewChimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
