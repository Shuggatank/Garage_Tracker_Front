import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { VehicleDetailsComponent } from '../vehicle-details.component';
import { CustomadapterService } from '../customadapter.service';
import { CustomDateParserService } from '../custom-date-parser.service';

@Component({
  selector: 'app-oilchangeform',
  templateUrl: './oilchangeform.component.html',
  styleUrls: ['./oilchangeform.component.scss'],
  providers: [
        {provide: NgbDateAdapter, useClass: CustomadapterService},
        {provide: NgbDateParserFormatter, useClass: CustomDateParserService}
      ]
})
export class OilchangeformComponent implements OnInit {
  vehicle: any;
  form : FormGroup = new FormGroup ({
    mileage: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    oilGrade: new FormControl('', [Validators.required]),
    oilFilter: new FormControl('', [Validators.required]),
  })


  constructor(private route: ActivatedRoute, private http: HttpClient, private formBuild: FormBuilder, private ngbCalendar: NgbCalendar, private dateAdapter: NgbDateAdapter<string>, private details: VehicleDetailsComponent) { }

  ngOnInit(): void {

    this.form = this.formBuild.group ({
      mileage: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      oilGrade: new FormControl('', [Validators.required]),
      oilFilter: new FormControl('', [Validators.required]),
    })

  }
  onSubmit(){


    console.log(this.form.value)
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(this.form.value)
    this.route.paramMap.subscribe(params =>{
      let paramId: string = params.get('id') || 'error';
      this.http.post<any>(`http://localhost:9092/api/vehicles/${paramId}/oil`, body, {'headers': headers}).subscribe(data => {
        console.log(data);
        this.details.getData()
      })

    })
    
    
    this.form = this.formBuild.group ({
      mileage: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      oilGrade: new FormControl('', [Validators.required]),
      oilFilter: new FormControl('', [Validators.required]),
    }) 
  }
}

