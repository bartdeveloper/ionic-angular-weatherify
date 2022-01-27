import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/models/CurrentWeather';
import { APIService } from 'src/app/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-current',
  templateUrl: './current.page.html',
  styleUrls: ['./current.page.scss'],
})
export class CurrentPage implements OnInit {

  data: CurrentWeather;
  error;
  weatherForm = new FormGroup({
    cityName: new FormControl(environment.DEFAULT_CITY, [Validators.required, Validators.minLength(3)])
  })

  constructor(private api: APIService) { }

  ngOnInit() {
    this.getData();  
  }

  onSubmit() {
    if (this.weatherForm.valid) {
      this.getData();
    } else {
      this.error = 'Fill city!';
    }
  }

  getData(){
    this.api.getCurrentWeather(this.weatherForm.value.cityName).subscribe((data) => { this.data = data; this.error = null; }, (err) => this.error = err.error.error.message);
  }

}
