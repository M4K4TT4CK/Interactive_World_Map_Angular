import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Interactive-worldMap';

  selectSvgId: string = "";
  selectCapital: string = "";
  selectRegion: string = "";
  selectIncome: string = "";
  selectLat: string = "";
  selectLong: string = "";

onSvgIdenSelect(svgId: string) {this.selectSvgId = svgId;}
onCapitalSelect(capital: string) {this.selectCapital = capital;}
onRegionSelect(region: string) {this.selectRegion = region;}
onIncomeSelect(income: string) {this.selectIncome = income;}
onLatSelect(latitude: string) {this.selectLat = latitude;}
onLongSelect(longitude: string) {this.selectLong = longitude;}
}