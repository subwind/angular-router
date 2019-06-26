import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page1-child',
  templateUrl: './page1-child.component.html',
  styleUrls: ['./page1-child.component.css']
})
export class Page1ChildComponent implements OnInit {
  //Methold 1
  private _myChild:string = '';
  @Input()
  public set myChild(value:string){
    console.log('value',value);
    this._myChild=value;
  }

  public get myChild(){
    return this._myChild;
  }

  //Methold 2
  @Input() myChild2:string;


  @Input() count:number;

  @Output() change: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  //+
  public add():void{
    this.count++;
    this.change.emit(this.count);

  }

  //-
  public minus():void{
    this.count--;
    this.change.emit(this.count);
  }

}