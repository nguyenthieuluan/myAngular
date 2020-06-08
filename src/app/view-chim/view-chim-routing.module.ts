import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewChimComponent } from './view-chim.component';

const routes: Routes = [{ path: '', component: ViewChimComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewChimRoutingModule { }
