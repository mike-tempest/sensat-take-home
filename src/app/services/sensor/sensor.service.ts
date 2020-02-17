import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SensorInfo } from './sensor.types';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  constructor(private httpClient: HttpClient) { }

  getSensorData(): Observable<any> {
    return this.httpClient.get('/assets/data/sensor_readings.json');
  }
}
