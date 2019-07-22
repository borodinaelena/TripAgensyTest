import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMyTrip } from '../../interfaces/trips';
import { LoginService } from '../../modals/login/login.service';

@Injectable()
export class TripService {
    constructor(private _http: HttpClient,
        private _loginService: LoginService) {
    }

    getTrips() {
        let token = this._loginService.getToken();
        console.log('token', token);
        return this._http.get<IMyTrip[]>('http://interview.joobilix.com/api/TripAgency/Trips', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    }
}