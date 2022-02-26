import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {
  test: any = [1,2,3,4,5,6,]
  data: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(`https://garage-tracker.herokuapp.com/api/vehicles`)
    .subscribe((data:any) => {
      console.log(data);
      this.data = data;
    })


  }

}
