import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { VehicleSearchComponent} from './vehicle-search/vehicle-search.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: VehicleSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
