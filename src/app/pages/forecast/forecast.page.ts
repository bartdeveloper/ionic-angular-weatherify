import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/Weather';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {

  data: Weather = null;
  error = null;
  
  constructor(private api: APIService) { }

  ngOnInit() {
    this.api.getWeather('Gdansk').subscribe((data) => this.data = data, (err) => this.error = err.error.error.message);
  }

}
