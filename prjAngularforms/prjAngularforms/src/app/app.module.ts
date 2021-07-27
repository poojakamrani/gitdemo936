import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatedformsComponent } from './templatedforms/templatedforms.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DepartmentcrudComponent } from './departmentcrud/departmentcrud.component';
import { Reactiveforms1Component } from './reactiveforms1/reactiveforms1.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { HomeComponent } from './home/home.component';
import { Reactiveforms2Component } from './reactiveforms2/reactiveforms2.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplatedformsComponent,
    DepartmentcrudComponent,
    Reactiveforms1Component,
    NotfoundcomponentComponent,
    HomeComponent,
    Reactiveforms2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
