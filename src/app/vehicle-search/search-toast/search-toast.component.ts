import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-toast',
  templateUrl: './search-toast.component.html',
  styleUrls: ['./search-toast.component.scss']
})
export class SearchToastComponent implements OnInit {
bootstrap: any;
  constructor() {
    let bootstrap: any;
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
  })
 }

  ngOnInit(): void {
  }
  

}
