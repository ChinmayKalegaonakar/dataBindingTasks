import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4-child',
  template:`<div>
  <span> Enter email</span>
  <input type=”text” [(ngModel)]="email" (focusout) = "onFire(email)" >
  </div>`,
  styleUrls: []
})
export class Scenario4ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() public childEvent = new EventEmitter();
  onFire(email){this.childEvent.emit(email)}

}