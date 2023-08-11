import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string, units: string) {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q='+city +'&appid=a84c7fc60d02500e0530fbdfa4f6f548&units'+units
    );
  }
}
