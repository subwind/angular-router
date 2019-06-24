import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent,HomeComponent, Page1Component, Page2Component ],
  bootstrap:    [ AppComponent ],
  providers:[{ provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
