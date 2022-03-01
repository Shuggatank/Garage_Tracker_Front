import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { VehicleDetailsComponent } from '../vehicle-details.component';
import { CustomadapterService } from '../customadapter.service';
import { CustomDateParserService } from '../custom-date-parser.service';



@Component({
  selector: 'app-maintenanceform',
  templateUrl: './maintenanceform.component.html',
  styleUrls: ['./maintenanceform.component.scss'],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomadapterService},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserService}
  ]
})
export class MaintenanceformComponent implements OnInit {

  form : FormGroup = new FormGroup ({
    date: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })

  constructor(private route: ActivatedRoute, private http: HttpClient, private formBuild: FormBuilder, private details: VehicleDetailsComponent) { }

  ngOnInit(): void {
    this.form = this.formBuild.group  ({
      date: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    })
  }
onSubmit() {
  const headers = {'content-type': 'application/json'};
  const body = JSON.stringify(this.form.value)
  this.route.paramMap.subscribe(params =>{
    let paramId: string = params.get('id') || 'error';
    this.http.post<any>(`https://garage-tracker.herokuapp.com/api/vehicles/${paramId}/maintenance`, body, {'headers': headers}).subscribe(() => {
      // Calls getData in vehicle-details to refresh the list on submit.
      this.details.getData()
    })
  })
  // Reset form after submit
  this.form = this.formBuild.group ({
    date: new FormControl('', [Validators.required]),
    totalAmount: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
  })
}
}
