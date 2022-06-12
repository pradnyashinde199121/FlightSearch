import { Component, OnInit } from '@angular/core';
import { GetMockDataService} from '../flight/service/get-mock-data.service';

@Component({
  selector: 'app-search-flight-result',
  templateUrl: './search-flight-result.component.html',
  styleUrls: ['./search-flight-result.component.css']
})
export class SearchFlightResultComponent implements OnInit {

  fightSearchData:any;
  arrivalCode:any;
  deptCode:any;

  constructor(private GetMockDataService:GetMockDataService) { }

  ngOnInit(): void {
    this.GetMockDataService.getFlightSearchData().subscribe(x=>{
      this.fightSearchData = x;
      this.arrivalCode = x[0].ArrivalDetails.ArrvCode;
      this.deptCode =  x[0].DepartureDetails.DeptCode;
      console.log(this.fightSearchData);
    });
  }

}
