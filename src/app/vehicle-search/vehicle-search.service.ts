import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleSearchService {
  createAPIObservable(vin: any) {
    return this.http.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
      );
}
  constructor(private http: HttpClient) { }
}
