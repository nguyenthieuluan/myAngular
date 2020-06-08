import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChimViewComponent } from './chim-view.component';

const routes: Routes = [{ path: '', component: ChimViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChimViewRoutingModule { }
