import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderAnimationsComponent } from './border-animations.component';

describe('BorderAnimationsComponent', () => {
  let component: BorderAnimationsComponent;
  let fixture: ComponentFixture<BorderAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
