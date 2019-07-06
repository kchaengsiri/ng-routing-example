import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices-table.component.html',
  styleUrls: ['./devices-table.component.scss']
})
export class DevicesTableComponent implements OnInit {
  devices: any[];

  constructor() {}

  ngOnInit() {
    this.devices = [
      { id: 1, name: 'Air Conditioning' },
      { id: 2, name: 'Television' },
      { id: 3, name: 'Refrigerator' }
    ];
  }
}
