import { Component, ElementRef, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { CountryInformationComponent } from '../countryInformation/countryInformation.component';
import { WorldbankApiService } from '../../worldbank-api.service';

@Component({
  selector: 'app-worldMap',
  templateUrl: './worldMap.component.html',
  styleUrls: ['./worldMap.component.css']
})
export class WorldMapComponent implements AfterViewInit {
  // ViewChild to access CountryInformationComponent
  @ViewChild(CountryInformationComponent)
  private countryInfoComponent!: CountryInformationComponent;
  // Output  as EventEmitter  for sending info to parent components
  @Output() 
    svgIdenSelect = new EventEmitter<string>();
  @Output() 
    capitalSelect = new EventEmitter<string>();
  @Output() 
    regionSelect = new EventEmitter<string>();
  @Output() 
    incomeSelect = new EventEmitter<string>();
  @Output() 
    latSelect = new EventEmitter<string>();
  @Output() 
    longSelect = new EventEmitter<string>();

  constructor(
    private elementRef: ElementRef,
    private worldApiService: WorldbankApiService
  ) {
  }
  // Hook
  ngAfterViewInit() {
    this.attachMouseHoverListeners();
  }
  // Mousehover event listeners to SVG paths
  private attachMouseHoverListeners() {
    const svgElement = this.elementRef.nativeElement.querySelector("svg");
    const pathElements = svgElement.querySelectorAll("path");

    // Loop path element and add mouseenter eventlistener
    pathElements.forEach((path: SVGPathElement) => {
      path.addEventListener("mouseenter", this.handleMouseHover.bind(this));
    });
  }
  // Event handler for the mousehover event on SVG path
  private handleMouseHover(event: MouseEvent) {
    const path = event.target as SVGPathElement;
    const countryId = path.id;

    this.worldApiService.getCountryData(countryId).subscribe((data: any) => {
      const countryData = data[1][0];
      this.emitCountryData(countryData);
    });
  }
  // Emits various country-related data to parent components
  private emitCountryData(data: any) {
    this.svgIdenSelect.emit(data.name);
    this.capitalSelect.emit(data.capitalCity);
    this.regionSelect.emit(data.region.value);
    this.incomeSelect.emit(data.incomeLevel.value);
    this.latSelect.emit(data.latitude);
    this.longSelect.emit(data.longitude);
  }
}
