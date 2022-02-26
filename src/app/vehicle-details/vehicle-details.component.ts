import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackerapiService } from '../trackerapi.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {
  vehicle: any;
  test: any = [1,2,3,4,5,6,]
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      let paramId: string = params.get('id') || 'error';
      console.log(paramId);
      this.http.get(`https://garage-tracker.herokuapp.com/api/vehicles/${paramId}`).subscribe(response => {
        console.log(response)
        this.vehicle = response;
        // if(response.id === par)
      })
    })
  }

}
