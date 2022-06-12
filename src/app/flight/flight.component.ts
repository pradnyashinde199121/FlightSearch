import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetMockDataService} from './service/get-mock-data.service'

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  serachData:any={};
  maxDate: Date; 
  minDate: Date;
  sdate:any; edate:any; 
  airportData:any; travellerData:any; classData:any; destinationData:any;
  sortData:any; sortformData:any;fightSearchData :any;
  constructor(private GetMockDataService:GetMockDataService,private route:Router) { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear + 1, 11, 31);
    this.serachData.traveler = "1Adult";
    this.serachData.class ="Economy"
    this.sdate = new Date(2022,6,12);
    this.edate = new Date(2022,6,15);
  }

  ngOnInit(): void {
      this.getAirportData();
      this.getTraveller();
      this.getClass();
      this.sortFlight();
  }

  getAirportData(){
    this.GetMockDataService.getAirportData().subscribe(x=>{
      this.airportData=x;
    });
  }
 
  getTraveller(){
    this.GetMockDataService.getTraveller().subscribe(x=>{
      this.travellerData=x;
    });
  }
  getClass(){
    this.GetMockDataService.getClass().subscribe(x=>{
      this.classData=x;
    });
  }
  sortFlight(){
    this.GetMockDataService.getSort().subscribe(x=>{
      this.sortData=x;
    });
  }
  searchFlight(){
    this.serachData.startDate=this.sdate;
    this.serachData.endDate=this.edate;
    this.route.navigate(['/search-flight-result']);
  }

}
