import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-countryInformation',
  templateUrl: './countryInformation.component.html',
  styleUrls: ['./countryInformation.component.css']
})

export class CountryInformationComponent {
// @Input to receive data from components
  @Input() 
    countryId!: string;
  @Input() 
    countryCap!: string;
  @Input() 
    countryRegion!: string;
  @Input() 
    countryIncome!: string;
  @Input() 
    countryLat!: string;
  @Input() 
    countryLong!: string;

  constructor() {
  }
}