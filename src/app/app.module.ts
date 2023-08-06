import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WorldbankApiService } from './worldbank-api.service';
import { WorldMapComponent } from './components/worldMap/worldMap.component';
import { CountryInformationComponent } from './components/countryInformation/countryInformation.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WorldMapComponent,
    CountryInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}