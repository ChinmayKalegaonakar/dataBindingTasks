import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario2',
  template: `<div>
              <span> Enter email</span>
              <input type=”text” [(ngModel)]="email" />
              <div>{{email}}</div>
            </div>`,
  styleUrls: []
})
export class Scenario2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
