import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { DirectivesComponent } from './directives/directives.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

import { FormsModule } from '@angular/forms';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { EmployeecrudComponent } from './employeecrud/employeecrud.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatypesComponent,
    DirectivesComponent,
    TwowaybindingComponent,
    EventbindingComponent,
    EmployeecrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
