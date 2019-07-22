import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service'
import { ITrip } from '../../interfaces/trips'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trips: ITrip[];
  constructor(private _homeService: HomeService) {
    console.log('HOME');
    this._homeService.getTrips(4, 0)
      .subscribe(data => this.trips = data)

  }

  ngOnInit() {
    console.log('oninit');
  }

}
