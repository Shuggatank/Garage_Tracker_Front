import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackerapiService {



  constructor(private http: HttpClient) { }

  createAPIObservable() {
    return this.http.get(`http://localhost:9092/api/vehicles`)
  }
}
