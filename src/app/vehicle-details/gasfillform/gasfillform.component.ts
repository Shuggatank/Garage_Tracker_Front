import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { VehicleDetailsComponent } from '../vehicle-details.component';
import { CustomadapterService } from '../customadapter.service';
import { CustomDateParserService } from '../custom-date-parser.service';


@Component({
  selector: 'app-gasfillform',
  templateUrl: './gasfillform.component.html',
  styleUrls: ['./gasfillform.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomadapterService},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserService}
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
    this.http.post<any>(`https://garage-tracker.herokuapp.com/api/vehicles/${paramId}/gas`, body, {'headers': headers}).subscribe(data => {
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
