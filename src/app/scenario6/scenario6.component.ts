import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario6',
  template:`<br><div>
            <span> Recieved email in parent </span>
            {{email}}
            <app-scenario6-child2 [email]="email"></app-scenario6-child2>
            <app-scenario6-child1 (childEvent)="email=$event"></app-scenario6-child1></div>`,
  styleUrls: []
})
export class Scenario6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
