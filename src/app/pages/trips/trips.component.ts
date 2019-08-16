import { Component, OnInit } from '@angular/core';
import { TripService } from './trips.service'
import { IMyTrip } from '../../interfaces/trips'
import { LoginService } from '../../modals/login/login.service';
import { DemodataService } from '../../demodata/demodata.service'

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  panelOpenState: any;
  trips: IMyTrip[];
  constructor(private _tripService: TripService,
    private _loginService: LoginService,
    private _demodataService: DemodataService) {
    this._loginService.getAccess();
    this.trips = this._demodataService.getTrips();

    // this._tripService.getTrips().subscribe(data => {
    //   this.trips = data; console.log('trips', this.trips);
    //   for (const trip of this.trips) {
    //     trip.fromDate = this.getFormatedDate(trip.fromDate);
    //     trip.toDate = this.getFormatedDate(trip.toDate);
    //   }
    // })
  }

  getFormatedDate(tripDate) {
    let date = new Date(tripDate);
    let dd = date.getDate();
    let mm = date.getMonth() + 1; //January is 0!
    let yyyy = date.getFullYear();
    if (dd < 10) {
      dd = +('0' + dd);
    }
    if (mm < 10) {
      mm = +('0' + mm);
    }
    return dd + '/' + mm + '/' + yyyy;
  }

  ngOnInit() {
  }

}
