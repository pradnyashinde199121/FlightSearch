import { Component, OnInit } from '@angular/core';
import{ GetMockDataService} from'../flight/service/get-mock-data.service';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {
  sortData:any;
  constructor(private GetMockDataService:GetMockDataService) { }

  ngOnInit(): void {
    this.sortFlight()
  }

  sortFlight(){
    this.GetMockDataService.getSort().subscribe(x=>{
      this.sortData=x;
    });
  }
}
