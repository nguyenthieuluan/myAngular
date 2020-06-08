import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimViewComponent } from './chim-view.component';

describe('ChimViewComponent', () => {
  let component: ChimViewComponent;
  let fixture: ComponentFixture<ChimViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChimViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChimViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
