import { Injectable,Inject } from '@angular/core';
import { COUNT_MESSAGE } from './default-value.module';

@Injectable()
export class HelloService {
  private clickCount:number=this.m_countM;
  constructor(
    @Inject(COUNT_MESSAGE) private m_countM: number
  ) { }

  public getClickCount():number{
    return this.clickCount
  }

  public setClickCount(value:number):void{
    this.clickCount = value;
  }

}