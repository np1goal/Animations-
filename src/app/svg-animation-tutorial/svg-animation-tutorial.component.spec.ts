import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAnimationTutorialComponent } from './svg-animation-tutorial.component';

describe('SvgAnimationTutorialComponent', () => {
  let component: SvgAnimationTutorialComponent;
  let fixture: ComponentFixture<SvgAnimationTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgAnimationTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgAnimationTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
