import { Component, OnInit, Input } from '@angular/core';
import { SensorInfo } from '../services/sensor/sensor.types';

@Component({
  selector: 'app-median-values',
  templateUrl: './median-values.component.html',
  styleUrls: ['./median-values.component.scss']
})
export class MedianValuesComponent implements OnInit {
  @Input() medianValueKey: string;
  @Input() medianKey: string;
  @Input() data: SensorInfo[];
  medianValues: any[] = [];
  ngOnInit() {
    this.sortData();
  }

  sortData() {
    const hashMap = new Map();

    this.data.forEach(item => {
      const keyData = hashMap.get(item[this.medianKey]) || [];
      hashMap.set(item[this.medianKey], [...keyData, item[this.medianValueKey]]);
    });

    this.setMedianValue(hashMap);
  }

  setMedianValue(hashMap) {
    hashMap.forEach((arr, index) => {
      const item = arr.sort((a,b) => a - b)[arr.length / 2];
      this.medianValues.push({name: index, value: item});
    });
  }
}
