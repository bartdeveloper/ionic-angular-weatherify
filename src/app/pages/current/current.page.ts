import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/models/CurrentWeather';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.page.html',
  styleUrls: ['./current.page.scss'],
})
export class CurrentPage implements OnInit {

  data: CurrentWeather;
  error;
  
  constructor(private api: APIService) { }

  ngOnInit() {
    this.api.getCurrentWeather('Gdansk').subscribe((data) => this.data = data, (err) => this.error = err.error.error.message);
  }

}
