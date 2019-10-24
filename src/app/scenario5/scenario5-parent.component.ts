import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-parent',
  template:`<br><div>
  <span> Recieved email in parent </span>
  {{email}}
  <app-scenario5-child (childEvent)="email=$event;onFire(email)"></app-scenario5-child></div>`,
  styleUrls: []
})
export class Scenario5ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() public parentEvent = new EventEmitter();
  onFire(value){this.parentEvent.emit(value)}

}
