import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-oilchangeform',
  templateUrl: './oilchangeform.component.html',
  styleUrls: ['./oilchangeform.component.scss']
})
export class OilchangeformComponent implements OnInit {
  vehicle: any;
  form : FormGroup = new FormGroup ({
    mileage: new FormControl(''),
    date: new FormControl(''),
    oilGrade: new FormControl(''),
    oilFilter: new FormControl(''),
  })


  constructor(private route: ActivatedRoute, private http: HttpClient, private formBuild: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuild.group ({
      mileage: new FormControl(''),
      date: new FormControl(''),
      oilGrade: new FormControl(''),
      oilFilter: new FormControl(''),
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
    })

  })
}
}
