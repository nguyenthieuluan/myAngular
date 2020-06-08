import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewChimRoutingModule } from './view-chim-routing.module';
import { ViewChimComponent } from './view-chim.component';

@NgModule({
  declarations: [ViewChimComponent],
  imports: [
    CommonModule,
    ViewChimRoutingModule
  ]
})
export class ViewChimModule {
  constructor() {
    console.log('view chim work 🐦');
  }
}
