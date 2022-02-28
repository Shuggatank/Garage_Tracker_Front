import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from "rxjs/operators";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  form : FormGroup = new FormGroup ({
    vin: new FormControl(''),
    make: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(0)
  })


 //SAJWJ6BV7G8K32305  //VIN for testing
 //2C3CDZAG9GH249554 //VIN for testing

  constructor(private http: HttpClient, private formBuild: FormBuilder) { }


  ngOnInit(): void {
    //  this.form = this.formBuild.group({
    //       vin: new FormControl(''),
    //       make: new FormControl(''),
    //       model: new FormControl(''),
    //       year: new FormControl('')
    //   })

    //Testing backend api
    // this.http.get(`http://localhost:9092/api/vehicles`)
    //   .subscribe((data:any) => {
    //     console.log(data);
    //     this.data = data;
    //   })

    //For testing purposes
    // this.http
    //   .get(`http://api.openweathermap.org/data/2.5/weather?zip=93534,us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`)
    //   .subscribe((response) => {
    //     console.log(response);
    //     this.weather = response;
    //     console.log(this.weather);
    // });
    console.log(this.vin)

    // console.log(this.weather)
    console.log(this.test)
    // this.Searcher('SAJWJ6BV7G8K32305'); //Works perfectly first time
    // this.vin = 'SAJWJ6BV7G8K32305'; // Undefined
    // this.vin = (<HTMLInputElement><unknown>document.getElementsByName("VIN")).value //Undefined on first click
    // this.Searcher((<HTMLInputElement><unknown>document.getElementsByName("VIN")).value); //Undefined on first pass(automatic), passes value on click
    
  }
  Searcher(vin: any) {
   console.log(vin)
    console.log("finding by vin: " + vin)
    console.log(this.vin)


    this.http.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`)
      .subscribe(data => {
        console.log(data);
        this.results = data;
        this.form = this.formBuild.group({
          vin: new FormControl(vin),
          make: new FormControl(this.results.Results[6].Value),
          model: new FormControl(this.results.Results[8].Value),
          year: new FormControl(this.results.Results[9].Value)
      })
      console.log(this.form.value)
  })

  }
  AddVehicle() {
    console.log("adding a vehicle")
    console.log(this.results);
    console.log(this.form.value)
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(this.form.value)
    console.log(body)
    this.http.post<any>(`http://localhost:9092/api/vehicles`, body, {'headers': headers}).subscribe(data => {
      console.log(data);
    })
    this.vin = '';
  }
  
}
