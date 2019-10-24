import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario6-child1',
  template: `<div>
  <span> Enter email in child 1</span>
  <input type=”text” [(ngModel)]="email" (focusout) = "onFire(email)" >
  </div>`,
  styleUrls: []
})
export class Scenario6Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() public childEvent = new EventEmitter();
  onFire(email){this.childEvent.emit(email)}

}
