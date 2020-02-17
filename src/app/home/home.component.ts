import { Component, OnInit } from '@angular/core';
import { SensorService } from '../services/sensor/sensor.service';
import { SensorInfo } from '../services/sensor/sensor.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: SensorInfo[];
  sortKey: string;
  constructor(private sensorService: SensorService) { }

  ngOnInit() {
    this.sensorService.getSensorData().subscribe((data) => {
      this.data = data;
    })
  }

  trackId(index, item) {
    return item.id;
  }
}
