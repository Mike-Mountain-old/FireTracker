import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubLandingComponent } from './pub-landing.component';

describe('PubLandingComponent', () => {
  let component: PubLandingComponent;
  let fixture: ComponentFixture<PubLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
