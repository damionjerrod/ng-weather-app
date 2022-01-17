import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(protected api: ApiService) {}

  public getForecast = (id: string, units = 'imperial') =>
    this.api.get$(`?id=${id}&units=${units}`);
}
