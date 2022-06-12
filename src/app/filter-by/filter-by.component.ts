import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.css']
})
export class FilterByComponent implements OnInit {
  value: number = 50;  
  maxvalue: number = 70;  
  options: Options = {  
      floor: 0,  
      ceil: 100  
  };  
    constructor() { }
  
    ngOnInit(): void {
      
    }
  
  }
  