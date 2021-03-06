import { Injectable } from '@angular/core';
import { NgbDateAdapter,  NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 * https://ng-bootstrap.github.io/#/components/datepicker/examples#adapter
 */

@Injectable({
  providedIn: 'root'
})
export class CustomadapterService extends NgbDateAdapter<string>  {


  readonly DELIMITER = '/';
  // MM/DD/YYYY format
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
