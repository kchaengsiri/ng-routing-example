import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesTableComponent } from './devices-table/devices-table.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';

@NgModule({
  imports: [CommonModule, DevicesRoutingModule],
  declarations: [DevicesTableComponent, DeviceDetailComponent]
})
export class DevicesModule {}
