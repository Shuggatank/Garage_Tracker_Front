import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { VehicleDetailsComponent } from '../vehicle-details.component';

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
 @Injectable()
 export class CustomAdapter extends NgbDateAdapter<string> {
 
   readonly DELIMITER = '/';
 
   fromModel(value: string | null): NgbDateStruct | null {
     if (value) {
       const date = value.split(this.DELIMITER);
       return {
         month : parseInt(date[0], 10),
         day : parseInt(date[1], 10),
         year : parseInt(date[2], 10)
       };
     }
     return null;
   }
 
   toModel(date: NgbDateStruct | null): string | null {
     return date ? date.month  + this.DELIMITER + date.day + this.DELIMITER + date.year : null;
   }
 }
 
 /**
  * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
  */
 @Injectable()
 export class CustomDateParserFormatter extends NgbDateParserFormatter {
 
   readonly DELIMITER = '/';
 
   parse(value: string): NgbDateStruct | null {
     if (value) {
       const date = value.split(this.DELIMITER);
       return {
         month : parseInt(date[0], 10),
         day : parseInt(date[1], 10),
         year : parseInt(date[2], 10)
       };
     }
     return null;
   }
 
   format(date: NgbDateStruct | null): string {
     return date ? date.month + this.DELIMITER + date.day + this.DELIMITER + date.year : '';
   }
 }
@Component({
  selector: 'app-gasfillform',
  templateUrl: './gasfillform.component.html',
  styleUrls: ['./gasfillform.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class GasfillformComponent implements OnInit {
  form : FormGroup = new FormGroup ({
    date: new FormControl('', [Validators.required]),
    totalAmount: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
  })

  constructor(private route: ActivatedRoute, private http: HttpClient, private formBuild: FormBuilder, private details: VehicleDetailsComponent) { }

  ngOnInit(): void {

    this.form = this.formBuild.group ({
      date: new FormControl('', [Validators.required]),
      totalAmount: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
    })

  }
onSubmit() {
  console.log(this.form.value)
  const headers = {'content-type': 'application/json'};
  const body = JSON.stringify(this.form.value)
  this.route.paramMap.subscribe(params =>{
    let paramId: string = params.get('id') || 'error';
    this.http.post<any>(`http://localhost:9092/api/vehicles/${paramId}/gas`, body, {'headers': headers}).subscribe(data => {
      console.log(data);
      this.details.getData()
    })

  })
  this.form = this.formBuild.group ({
    date: new FormControl('', [Validators.required]),
    totalAmount: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
  })

}
}
