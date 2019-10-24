import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-scenario1></app-scenario1><br>
  <app-scenario2></app-scenario2><br>
  <app-scenario3></app-scenario3><br>
  <app-scenario4></app-scenario4><br>
  <app-scenario5></app-scenario5><br>
  <app-scenario6></app-scenario6>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataBindingTasks';
}
