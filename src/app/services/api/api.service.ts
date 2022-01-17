import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public static BASE_URL = 'api.openweathermap.org';

  constructor(protected http: HttpClient) {}

  public get$ = <T = any>(queryParams: string) =>
    this.http.get<T>(
      `${ApiService.BASE_URL}/data/2.5/forecast${queryParams}&appid=54f2a785f64537fb70d2cb0b0209ba8c`
    );
}
