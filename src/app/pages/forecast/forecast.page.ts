import { Component, OnInit } from '@angular/core';
import { ForecastWeather } from 'src/app/models/ForecastWeather';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {

  data: ForecastWeather;
  error;
  
  constructor(private api: APIService) { }

  ngOnInit() {
    this.api.getForecastWeather('Gdansk').subscribe((data) => { this.data = data; this.error = null; }, (err) => this.error = err.error.error.message);
  }

}
