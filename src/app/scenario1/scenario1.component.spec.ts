import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario1Component } from './scenario1.component';

describe('Scenario1Component', () => {
  let component: Scenario1Component;
  let fixture: ComponentFixture<Scenario1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
