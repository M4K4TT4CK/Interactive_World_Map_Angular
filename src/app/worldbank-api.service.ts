import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class WorldbankApiService {

  constructor(private http: HttpClient) {}
  // Method to fetch country data from the World Bank API
  getCountryData(countryId: string): Observable<any> {
    const url = `http://api.worldbank.org/v2/country/${countryId}?format=json`;
    // Return an Observable that emits the response data
    return this.http.get<any>(url);
  }
}