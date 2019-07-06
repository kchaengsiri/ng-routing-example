import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesTableComponent } from './devices-table/devices-table.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DevicesTableComponent
  },
  {
    path: ':id',
    component: DeviceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule {}
