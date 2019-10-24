import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario3',
  template:`<div>
  <span> Enter email</span>
  <input type=”text” [(ngModel)]="email" >
  </div>
<app-scenario3-child [email]="email"></app-scenario3-child>`,
  styleUrls: []
})
export class Scenario3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
