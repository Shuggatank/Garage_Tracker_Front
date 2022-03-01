import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss'],
  template: `<ng-progress></ng-progress>`
})
export class GarageComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Loads in garage data from the resolver
    this.data = this.route.snapshot.data;
  }
}
