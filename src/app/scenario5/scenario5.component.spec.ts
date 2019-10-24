import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5Component } from './scenario5.component';

describe('Scenario5Component', () => {
  let component: Scenario5Component;
  let fixture: ComponentFixture<Scenario5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
