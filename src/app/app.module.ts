import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { VehicleSearchComponent } from './vehicle-search/vehicle-search.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { GarageComponent } from './garage/garage.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { OilchangeformComponent } from './vehicle-details/oilchangeform/oilchangeform.component';
import { GasfillformComponent } from './vehicle-details/gasfillform/gasfillform.component';
import { MaintenanceformComponent } from './vehicle-details/maintenanceform/maintenanceform.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VehicleSearchComponent,
    HomeComponent,
    GarageComponent,
    VehicleDetailsComponent,
    OilchangeformComponent,
    GasfillformComponent,
    MaintenanceformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgProgressModule,
    NgProgressHttpModule,
    NgProgressRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
