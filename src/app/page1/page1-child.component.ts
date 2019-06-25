import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-page1-child',
  templateUrl: './page1-child.component.html',
  styleUrls: ['./page1-child.component.css']
})
export class Page1ChildComponent implements OnInit {
  //@Input() public myChild:string;
  private _myChild:string = '';
  @Input()
  public set myChild(value:string){
    console.log('value',value);
    this._myChild=value;
  }

  public get myChild(){
    return this._myChild;
  }

  constructor() { }

  ngOnInit() {
  }

}