import { NgModule,InjectionToken  } from '@angular/core';
import { CommonModule } from '@angular/common';

export const COUNT_MESSAGE = new InjectionToken<number>('0'); 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DefaultValueModule { }