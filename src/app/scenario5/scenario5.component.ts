import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario5',
  template:`<br><div>
            <span> Recieved email in grandparent </span>
            {{email}}
            <app-scenario5-parent (parentEvent)="email=$event"></app-scenario5-parent></div>`,
  styleUrls: []
})
export class Scenario5Component implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }
 
  

}
