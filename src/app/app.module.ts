import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { CarComponent } from './car/car.component';
import { ActivityComponent } from './activity/activity.component';
import { TabComponent } from './tab/tab.component';
import { HotelComponent } from './hotel/hotel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { SearchFlightResultComponent } from './search-flight-result/search-flight-result.component';
import { HeaderComponent } from './header/header.component';
import { FilterByComponent } from './filter-by/filter-by.component';
import { SortByComponent } from './sort-by/sort-by.component';  
@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    CarComponent,
    ActivityComponent,
    TabComponent,
    HotelComponent,
    SearchFlightResultComponent,
    HeaderComponent,
    FilterByComponent,
    SortByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,MatDatepickerModule,MatTableModule,MatFormFieldModule,
    MatNativeDateModule,MatInputModule,HttpClientModule,NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
