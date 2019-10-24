import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario4Component } from './scenario4.component';

describe('Scenario4Component', () => {
  let component: Scenario4Component;
  let fixture: ComponentFixture<Scenario4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
