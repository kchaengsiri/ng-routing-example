import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationsTableComponent } from './locations-table/locations-table.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LocationsTableComponent
  },
  {
    path: ':id',
    component: LocationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule {}
