import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsAnimationTutorialComponent } from './js-animation-tutorial.component';

describe('JsAnimationTutorialComponent', () => {
  let component: JsAnimationTutorialComponent;
  let fixture: ComponentFixture<JsAnimationTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsAnimationTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsAnimationTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
