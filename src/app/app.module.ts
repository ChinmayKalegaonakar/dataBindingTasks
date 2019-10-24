import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario3Component } from './scenario3/scenario3.component';
import { Scenario3ChildComponent } from './scenario3/scenario3-child.component';
import { Scenario4Component } from './scenario4/scenario4.component';
import { Scenario4ChildComponent } from './scenario4/scenario4-child.component';
import { Scenario5Component } from './scenario5/scenario5.component';
import { Scenario5ParentComponent } from './scenario5/scenario5-parent.component';
import { Scenario5ChildComponent } from './scenario5/scenario5-child.component';
import { Scenario6Component } from './scenario6/scenario6.component';
import { Scenario6Child1Component } from './scenario6/scenario6-child1.component';
import { Scenario6Child2Component } from './scenario6/scenario6-child2.component';
@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component,
    Scenario3ChildComponent,
    Scenario4Component,
    Scenario4ChildComponent,
    Scenario5Component,
    Scenario5ParentComponent,
    Scenario5ChildComponent,
    Scenario6Component,
    Scenario6Child1Component,
    Scenario6Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
