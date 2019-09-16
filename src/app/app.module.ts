import { NgModule,InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page1ChildComponent } from './page1/page1-child.component';
import { PageContentComponent } from './page2/page-content.component';
import { COUNT_MESSAGE } from './default-value.module';
import { HelloService } from './hello.service';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppHttpInterceptorService } from './interceptor/app-http-interceptor.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent,HomeComponent, Page1Component, Page2Component, Page1ChildComponent,PageContentComponent ],
  bootstrap:    [ AppComponent ],
  providers:[
    { provide: APP_BASE_HREF, useValue : '/' },
    { provide: COUNT_MESSAGE,useValue:0},
    HelloService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptorService,
    multi: true,
  }
  ]
})
export class AppModule { }
