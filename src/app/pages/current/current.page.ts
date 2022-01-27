import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/models/CurrentWeather';
import { APIService } from 'src/app/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-current',
  templateUrl: './current.page.html',
  styleUrls: ['./current.page.scss'],
})
export class CurrentPage implements OnInit {

  data: CurrentWeather;
  error;
  
  weatherForm = new FormGroup({
    cityName: new FormControl('Gdansk', [Validators.required, Validators.minLength(3)])
  })

  constructor(private api: APIService) { }

  ngOnInit() {
    this.api.getCurrentWeather('Gdansk').subscribe((data) => this.data = data, (err) => this.error = err.error.error.message);
  }

  onSubmit() {
    console.log(this.weatherForm.value);
    this.api.getCurrentWeather(this.weatherForm.value.cityName).subscribe((data) => { this.data = data; this.error = null; }, (err) => this.error = err.error.error.message);
  }

}
