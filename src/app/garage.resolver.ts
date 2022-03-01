import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TrackerapiService } from './trackerapi.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GarageResolver implements Resolve<any> {
  constructor(private tracker: TrackerapiService) {}
  resolve(): Observable<any> {
    return this.tracker.createAPIObservable().pipe(catchError(() => {
      return of('data not available at this time')
    }));
  }
}
