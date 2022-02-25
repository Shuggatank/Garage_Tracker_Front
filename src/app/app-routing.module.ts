import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { VehicleSearchComponent} from './vehicle-search/vehicle-search.component';
import { GarageComponent } from './garage/garage.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: VehicleSearchComponent},
  {path: 'garage', component: GarageComponent},
  {path: 'vehicle/:id', component: VehicleDetailsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
