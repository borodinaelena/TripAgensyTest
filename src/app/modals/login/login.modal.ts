import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { IUser } from '../../interfaces/user';
import { LoginService } from './login.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.modal.html',
  styleUrls: ['./login.modal.css']
})
export class LoginModal implements OnInit {
  user: IUser;
  incorrect: any;

  constructor(private _loginService: LoginService,
    public dialogRef: MatDialogRef<LoginModal>,
    private _localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.user =
      {
        userName: '',
        password: ''
      }
    this.incorrect = false;
  }

  login() {
    if (this.user.userName === 'test' && this.user.password === '1234test') {
      this._localStorageService.set('token', '7648ryfhbq63tt823849gtfwfg28');
      this._localStorageService.set('expires', Date.now() + 23456789345);
      this._loginService.isUserLogin = true;
      this.incorrect = false;
      this._loginService.onAccessChanged.emit(this._loginService.isUserLogin);
      this._loginService.getAccess() && this.dialogRef.close();
    }
    else {
      this._loginService.isUserLogin = false;
      this.incorrect = true;
      this._loginService.onAccessChanged.emit(this._loginService.isUserLogin);
    }

    // this._loginService.login(this.user)
    //   .subscribe(
    //     (data) => {
    //       this._localStorageService.set('token', data['accessToken']);
    //       this._localStorageService.set('expires', Date.now() + data['expires']);
    //       this._loginService.isUserLogin = true;
    //       this.incorrect = false;
    //       this._loginService.onAccessChanged.emit(this._loginService.isUserLogin);
    //       this._loginService.getAccess() && this.dialogRef.close();
    //     },
    //     (err) => {
    //       console.log(err);
    //       this._loginService.isUserLogin = false;
    //       this.incorrect = true;
    //       this._loginService.onAccessChanged.emit(this._loginService.isUserLogin);
    //     });
  }

}
