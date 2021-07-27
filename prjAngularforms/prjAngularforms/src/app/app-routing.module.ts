import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { Reactiveforms1Component } from './reactiveforms1/reactiveforms1.component';
import { TemplatedformsComponent } from './templatedforms/templatedforms.component';

const routes: Routes = [
  //setting a defaultpage
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:TemplatedformsComponent},
  {path:'login',component:Reactiveforms1Component},
  //page not found
  {path:'**',component:NotfoundcomponentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
