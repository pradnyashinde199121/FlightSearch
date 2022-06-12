import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetMockDataService {

  constructor(private http:HttpClient) { }

  getAirportData():Observable<any>{
    const url="../assets/json/airportdetails.json"
    return this.http.get(url);
  }
  getClass():Observable<any>{
    const url="../assets/json/class.json"
    return this.http.get(url);
  }
  getTraveller():Observable<any>{
    const url="../assets/json/traveller.json"
    return this.http.get(url);
  }
  getSort():Observable<any>{
    const url="../assets/json/sort.json"
    return this.http.get(url);
  }
  getFlightSearchData():Observable<any>{
    const url="../assets/json/flight.json"
    return this.http.get(url);
  }
}
