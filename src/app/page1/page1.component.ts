import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  public myParentStr:string;
  public count:number=0;
  constructor() { }

  ngOnInit() {
    this.myParentStr="from parent";
  }

  public countChange(data:number):void{
    this.count = data;
  }

}