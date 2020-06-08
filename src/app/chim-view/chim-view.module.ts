import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChimViewRoutingModule } from './chim-view-routing.module';
import { ChimViewComponent } from './chim-view.component';

@NgModule({
  declarations: [ChimViewComponent],
  imports: [
    CommonModule,
    ChimViewRoutingModule
  ]
})
export class ChimViewModule {
  constructor() {
    console.log(' 🐦 🔢');
  }
}
