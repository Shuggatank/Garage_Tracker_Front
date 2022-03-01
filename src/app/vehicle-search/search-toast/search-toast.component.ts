import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-search-toast',
  templateUrl: './search-toast.component.html',
  styleUrls: ['./search-toast.component.scss']
})
export class SearchToastComponent implements OnInit {
// This component if for holding the logic for the toast notification


  constructor(private toast: NgToastService) {
 }

  ngOnInit(): void {

  }
  // These are position at the bottom right. If positioned at the top they go under the nav bar.
  openSuccess() {
    this.toast.success({detail:"Success",summary:"Vehicle has been added to your garage", duration: 5000, position:'br'})
    }

  searchInfo() {
    this.toast.info({detail:"Found",summary:"Matching VIN found", duration: 5000, position:'br'})
  }

}
