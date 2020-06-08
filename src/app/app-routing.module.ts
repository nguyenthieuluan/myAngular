import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { environment } from '../environments/environment';
import { of } from 'rxjs';
import { ChimGuard } from './chim.guard';
import { CustomPreloadService } from './custom-preload.service';

const routes: Routes = [
  {
    path: 'route',
    loadChildren: () => import('./chim-view/chim-view.module')
      .then(m => m.ChimViewModule),
    data: { preload: true },
    canActivate: [ ChimGuard ]
  },
  {
    path: 'viewchim',
    loadChildren: () => import('./view-chim/view-chim.module')
      .then(m => m.ViewChimModule),
    // data: { preload: true },
    // canLoad: [ ChimGuard ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadService }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
