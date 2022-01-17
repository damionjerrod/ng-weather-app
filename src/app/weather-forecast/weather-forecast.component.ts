import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../services/forecast/forecast.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent implements OnInit {
  currentTemp: string = 'N/A';
  localCity: number = 4180531;

  constructor(private forecastService: ForecastService) {}

  ngOnInit(): void {
    // this.forecastService
    //   .getForecast(this.localCity)
    //   .subscribe((data) => console.log(data));
  }
}
