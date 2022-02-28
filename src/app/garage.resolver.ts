import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TrackerapiService } from './trackerapi.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GarageResolver implements Resolve<any> {
  constructor(private tracker: TrackerapiService) {}
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   return of(true);
  resolve(): Observable<any> {
    return this.tracker.createAPIObservable().pipe(catchError(() => {
      return of('data not available at this time')
    }));
  }
}
