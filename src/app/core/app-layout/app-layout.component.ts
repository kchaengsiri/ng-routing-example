import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  menus: { label: string; key: string; url: string }[];

  constructor() {}

  ngOnInit() {
    this.menus = [
      { label: 'Dashboard', key: 'dashboard', url: '/dashboard' },
      { label: 'Devices', key: 'devices', url: '/devices' },
      { label: 'Locations', key: 'locations', url: '/locations' }
    ];
  }
}
