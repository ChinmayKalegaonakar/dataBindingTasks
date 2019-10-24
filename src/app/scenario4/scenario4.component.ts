import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario4',
  template: `<br><div>
  <span> Recieved email</span>
  {{email}}
  <app-scenario4-child (childEvent)="email=$event"></app-scenario4-child></div>`,
  styleUrls: []
})
export class Scenario4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
