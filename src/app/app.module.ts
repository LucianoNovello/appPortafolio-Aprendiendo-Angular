import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Projects } from './Projects/projects';

import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    Projects,
   
    ProjectComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
