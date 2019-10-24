import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario3-child',
  template:`<br><div>
  <span> Recieved email</span>
  {{email}}
  </div>`,
  styleUrls: []
})
export class Scenario3ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() public email;
}