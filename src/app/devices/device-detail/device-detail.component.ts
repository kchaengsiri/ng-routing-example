import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
  selectedId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // read from Subscriptions
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.selectedId = +params.get('id');
    // });
    // read from Snapshot
    this.selectedId = +this.route.snapshot.params.id;
  }
}
