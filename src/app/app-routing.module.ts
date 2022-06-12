import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { HotelComponent } from './hotel/hotel.component';
import { CarComponent } from './car/car.component';
import { ActivityComponent } from './activity/activity.component';
import { TabComponent } from './tab/tab.component';
import { SearchFlightResultComponent } from './search-flight-result/search-flight-result.component';  
import { HeaderComponent } from './header/header.component';
import { FilterByComponent } from './filter-by/filter-by.component';  
import { SortByComponent } from './sort-by/sort-by.component';  
const routes: Routes = [{path:'', component:FlightComponent},
{path:'hotels', component:HotelComponent},
{path:'flight', component:FlightComponent},
{path:'car', component:CarComponent},
{path:'activity', component:ActivityComponent},
{path:'search-flight-result', component:SearchFlightResultComponent},
{path:'header', component:HeaderComponent},
{path:'filter-by', component:FilterByComponent},
{path:'sort-by', component:SortByComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
