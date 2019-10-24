import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario1',
  template: `<div>
        <span> Enter email</span>
        <input #email (focusout) = "log(email.value)"/>
      </div>`,
  styleUrls: []
})
export class Scenario1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  log(value){
    console.log(value);
  }

}
