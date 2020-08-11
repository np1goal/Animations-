import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssAnimationTutorialComponent } from './scss-animation-tutorial.component';

describe('ScssAnimationTutorialComponent', () => {
  let component: ScssAnimationTutorialComponent;
  let fixture: ComponentFixture<ScssAnimationTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScssAnimationTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssAnimationTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
