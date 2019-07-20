import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginModal } from '../../modals/login/login.modal'
import { LoginService } from '../../modals/login/login.service'

@Component({
  selector: 'el-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modal: any;
  login: string;

  constructor(public dialog: MatDialog,
    private _loginService: LoginService) {
    this.login = this._loginService.getAccess() ? 'Logout' : 'login';
    this._loginService.onAccessChanged.subscribe(data => {
      console.log('onAccessChanged', data);
      this.login = data ? 'Logout' : 'login';
    });
  }

  ngOnInit() {
  }

  showLoginModal() {
    if (this._loginService.getAccess()) {
      this._loginService.logout();
    }
    else {
      console.log('showLoginModal')
      this.dialog.closeAll();
      this.modal = this.dialog.open(LoginModal, {
        panelClass: 'custom-pane',
        width: '40%'
      });
    }
  }
}
