import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss'],
  template: `<ng-progress></ng-progress>`
})
export class GarageComponent implements OnInit {
  data: any;

  // rdata: any;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.http.get(`http://localhost:9092/api/vehicles`)
    .subscribe((data:any) => {
      console.log(data);
      this.data = data;
    })
    // this.data = this.route.snapshot.data;

    // console.log(this.rdata.garage)
  }

}
