import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

 /**
  * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
  * https://ng-bootstrap.github.io/#/components/datepicker/examples#adapter
  */

@Injectable({
  providedIn: 'root'
})
export class CustomDateParserService extends NgbDateParserFormatter {


  readonly DELIMITER = '/';
  // MM/DD/YYYY format
   parse(value: string): NgbDateStruct | null {
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
 
   format(date: NgbDateStruct | null): string {
     return date ? date.month + this.DELIMITER + date.day + this.DELIMITER + date.year : '';
   }
}
