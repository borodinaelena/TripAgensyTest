import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class LoginService {
    isUserLogin: boolean;
    incorrect: boolean;
    onAccessChanged: EventEmitter<any> = new EventEmitter();
    constructor(private _http: HttpClient,
        private _localStorageService: LocalStorageService,
        private _route: ActivatedRoute,
        protected _router: Router, ) {
    }

    login(user) {
        return this._http.post('http://interview.joobilix.com/api/TripAgency/Login', user);
    }

    logout() {
        this._localStorageService.remove('token');
        this._localStorageService.remove('expires');
        this.isUserLogin = false;
        this.incorrect = false;
        this.onAccessChanged.emit(this.isUserLogin);
        this._router.navigate(['home']);
    }

    getAccess() {
        this.isUserLogin = this._localStorageService.get('expires') && this._localStorageService.get('expires') > Date.now() || false;;
        this.onAccessChanged.emit(this.isUserLogin);
        !this.isUserLogin && this._router.navigate(['home']);
        this.isUserLogin && this._router.navigate(['my-trips']);
        return this.isUserLogin || false;
    }

    getToken() {
        return this._localStorageService.get('token');
    }
}