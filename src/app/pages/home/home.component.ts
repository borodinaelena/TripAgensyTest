import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service'
import { IMyTrip } from '../../interfaces/trips'
import { DemodataService } from '../../demodata/demodata.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trips: IMyTrip[];
  constructor(private _homeService: HomeService,
    private _demodataService: DemodataService) {
    // this._homeService.getTrips(4, 0)
    // .subscribe(data => this.trips = data)
    this.trips = this._demodataService.getTrips();

  }

  ngOnInit() {
    console.log('oninit');
  }

}
