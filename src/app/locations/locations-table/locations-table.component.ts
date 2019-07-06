import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations-table.component.html',
  styleUrls: ['./locations-table.component.scss']
})
export class LocationsTableComponent implements OnInit {
  locations: any[];

  constructor() {}

  ngOnInit() {
    this.locations = [
      { id: 1, name: 'Living Room' },
      { id: 2, name: 'Dining Room' },
      { id: 3, name: 'Kitchen' }
    ];
  }
}
