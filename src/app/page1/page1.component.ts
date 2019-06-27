import { Component, OnInit,Inject } from '@angular/core';
import { HelloService } from '../hello.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  public myParentStr:string;
  public count:number;
  constructor(
    private m_HelloService:HelloService,
    private m_ActivatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.myParentStr="from parent";
    //this.count = this.m_HelloService.getClickCount();
    this.count = this.m_HelloService['getClickCount']();
    //router傳直
    console.log('ActivatedRoute',this.m_ActivatedRoute.snapshot.data[0])
  }

  public countChange(data:number):void{
    this.count = data;
    this.m_HelloService.setClickCount(data);
    
  }

}