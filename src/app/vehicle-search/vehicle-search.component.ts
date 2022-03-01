import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchToastComponent } from './search-toast/search-toast.component'

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.scss'],
  providers: [SearchToastComponent]
})
export class VehicleSearchComponent implements OnInit {
  results: any;
  data: any;
  vin: string = '';
  form : FormGroup = new FormGroup ({
    vin: new FormControl('', [Validators.required]),
    make: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    year: new FormControl(0, [Validators.required])
  })


 //SAJWJ6BV7G8K32305  //VIN for testing
 //2C3CDZAG9GH249554 //VIN for testing

  constructor(private http: HttpClient, private formBuild: FormBuilder, private toast: SearchToastComponent) { }


  ngOnInit(): void {
  }

  /* Method for searching by VIN and filling in the form data. If partial data is found(not a full VIN)
  * then the validators won't let you add the vehicle
  */
  Searcher(vin: any) {
    this.http.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`)
      .subscribe(data => {
        this.results = data;
        this.form = this.formBuild.group({
          vin: new FormControl(vin, [Validators.required]),
          make: new FormControl(this.results.Results[6].Value, [Validators.required]),
          model: new FormControl(this.results.Results[8].Value, [Validators.required]),
          year: new FormControl(this.results.Results[9].Value, [Validators.required])
        })
        // If all fields are filled in then the found message is called.
        if (this.form.value.make != null && this.form.value.model != null && this.form.value.year != null) {
          this.toast.searchInfo()
        }
      
  })

  }
  AddVehicle() {
    const headers = {'content-type': 'application/json'}; // Sets up the headers for post
    const body = JSON.stringify(this.form.value) // Sets up the form data in JSON format to be posted
    this.toast.openSuccess();
    this.http.post<any>(`https://garage-tracker.herokuapp.com/api/vehicles`, body, {'headers': headers}).subscribe();

    // Clears all fields
    this.vin = '';
    this.results = '';


  }
  
}
