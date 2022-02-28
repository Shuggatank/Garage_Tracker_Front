import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackerapiService } from '../trackerapi.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
  template: `<ng-progress></ng-progress>`
})
export class VehicleDetailsComponent implements OnInit {
  vehicle: any;
  results: any;
  vin: any;


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.route.paramMap.subscribe(params =>{
      let paramId: string = params.get('id') || 'error';

      this.http.get(`https://garage-tracker.herokuapp.com/api/vehicles/${paramId}`).subscribe(response => {
        console.log(response)
        this.vehicle = response;


        this.http.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${this.vehicle.vin}?format=json`)
        .subscribe(data => {
          this.results = data;
        })

      })
    })
  }

}
