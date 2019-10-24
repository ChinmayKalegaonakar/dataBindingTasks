import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario6-child2',
  template: `<br><div>
  <span> Recieved email in Child2 </span>
  {{email}}`,
  styleUrls: []
})
export class Scenario6Child2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() public email;

}
