import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundAnimationsComponent } from './background-animations.component';

describe('BackgroundAnimationsComponent', () => {
  let component: BackgroundAnimationsComponent;
  let fixture: ComponentFixture<BackgroundAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
