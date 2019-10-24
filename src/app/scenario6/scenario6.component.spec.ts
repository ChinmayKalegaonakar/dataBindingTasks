import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6Component } from './scenario6.component';

describe('Scenario6Component', () => {
  let component: Scenario6Component;
  let fixture: ComponentFixture<Scenario6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
