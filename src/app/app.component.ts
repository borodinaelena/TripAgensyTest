import { Component, OnInit } from '@angular/core';
import { LoginService } from './modals/login/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private _loginService: LoginService) {

  }
  ngOnInit() {
    console.log(this._loginService.getAccess());
  }
}
