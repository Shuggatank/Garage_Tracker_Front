import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.scss']
})
export class VehicleSearchComponent implements OnInit {
  results: any;
  weather: any;
  data: any;
  constructor(private http: HttpClient) { }

  Searcher() {
    console.log(this.results)
    console.log(this.weather.name)
    // this.data.forEach((d: any) => {
    //   console.log(d);
  // })
  }

  ngOnInit(): void {
    this.http.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/5UXWX7C5*BA?format=json`)
    .subscribe(data => {
      console.log(data)
      this.results = data;
    })

    this.http.get(`http://localhost:9092/api/vehicles`)
      .subscribe((data:any) => {
        console.log(data);
        this.data = data;
      })

    this.http
      .get(`http://api.openweathermap.org/data/2.5/weather?zip=93534,us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`)
      .subscribe((response) => {
        console.log(response);
        this.weather = response;
        console.log(this.weather);
    });

    // this.weather = 12;
    console.log(this.weather)

  this.Searcher();

  }

  

}
