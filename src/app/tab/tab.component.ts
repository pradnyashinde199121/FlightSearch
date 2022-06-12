import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  id:any="flight";
  constructor(private route:Router) { }

  ngOnInit(): void {
    // this.route.navigate(['/flight']);
  }

  changeTab(currentId:any){
    this.id=currentId;
    if(this.id == 'flight'){
      this.route.navigate(['/flight']);
      }
      if(this.id == 'activity'){
        this.route.navigate(['/activity']);
        }
        if(this.id == 'car'){
          this.route.navigate(['/car']);
          }
          if(this.id == 'hotels'){
            this.route.navigate(['/hotels']);
            }
      
  }

}
