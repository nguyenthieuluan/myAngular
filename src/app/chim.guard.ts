import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChimGuard implements CanActivate, CanLoad {

  canLoad(route: Route, segments: any[]): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canload ne ', environment.allowViewChim);
    return environment.allowViewChim;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('canactive ne');

    return !environment.allowViewChim;
  }

}
