import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-child',
  template:`<div>
  <span> Enter emailin child</span>
  <input type=”text” [(ngModel)]="email" (focusout) = "onFire(email)" >
  </div>`,
  styleUrls: []
})
export class Scenario5ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() public childEvent = new EventEmitter();
  onFire(email){this.childEvent.emit(email)}
}