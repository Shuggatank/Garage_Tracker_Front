import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from "rxjs/operators";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.scss']
})
export class VehicleSearchComponent implements OnInit {
  results: any;
  weather: any;
  data: any;
  test: any;
  vin: string = '';


 //SAJWJ6BV7G8K32305  //VIN for testing

  constructor(private http: HttpClient) { }

  // Searcher(vin: string) {
  //   console.log("finding by vin: " + vin)
  //   console.log(this.results)
  //   console.log(this.weather.name)
  //   this.http.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`)
  //   .subscribe(data => {
  //     console.log(data)
  //     this.results = data;
  //   })
  //   // this.data.forEach((d: any) => {
  //   //   console.log(d);
  // // })
  // }

  ngOnInit(): void {
    // this.http.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/5UXWX7C5*BA?format=json`)
    // .subscribe(data => {
    //   console.log(data)
    //   this.results = data;
    // })
    
    // this.http.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${this.vin}?format=json`)
    // .subscribe(data => {
    //   console.log(data)
    //   this.results = data;
    // })

    this.test = "working"


    //Testing backend api
    this.http.get(`http://localhost:9092/api/vehicles`)
      .subscribe((data:any) => {
        console.log(data);
        this.data = data;
      })

    //For testing purposes
    this.http
      .get(`http://api.openweathermap.org/data/2.5/weather?zip=93534,us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`)
      .subscribe((response) => {
        console.log(response);
        this.weather = response;
        console.log(this.weather);
    });


    console.log(this.weather)
    console.log(this.test)
    // this.Searcher('SAJWJ6BV7G8K32305'); //Works perfectly first time
    // this.vin = 'SAJWJ6BV7G8K32305'; // Undefined
    // this.vin = (<HTMLInputElement><unknown>document.getElementsByName("VIN")).value //Undefined on first click
    // this.Searcher((<HTMLInputElement><unknown>document.getElementsByName("VIN")).value); //Undefined on first pass(automatic), passes value on click
    
  }
  async Searcher(vin: any) {
   console.log(vin)
    console.log("finding by vin: " + vin)


    this.http.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`)
      .subscribe(data => {
        console.log(data);
        this.results = data;
      })

  }
  

}
