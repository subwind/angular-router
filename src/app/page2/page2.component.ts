import { Component, OnInit,ContentChild,ViewChild } from '@angular/core';
import { PageContentComponent } from './page-content.component';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  @ViewChild(PageContentComponent)public pContent:PageContentComponent;

  constructor() { }

  ngOnInit() {
    console.log('111',this.pContent)
  }

}