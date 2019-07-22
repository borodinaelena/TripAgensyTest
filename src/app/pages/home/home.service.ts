import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITrip } from '../../interfaces/trips'

@Injectable()
export class HomeService {
    constructor(private _http: HttpClient) {
    }

    getTrips(numberOfTrips, skip) {
        return this._http.get<ITrip[]>('http://interview.joobilix.com/api/TripAgency/Trips/Homepage', {
            params:
            {
                numberOfTrips: numberOfTrips,
                skip: skip
            }
        });
    }

}