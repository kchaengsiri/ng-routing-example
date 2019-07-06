import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsTableComponent } from './locations-table/locations-table.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';

@NgModule({
  imports: [CommonModule, LocationsRoutingModule],
  declarations: [LocationsTableComponent, LocationDetailComponent]
})
export class LocationsModule {}
