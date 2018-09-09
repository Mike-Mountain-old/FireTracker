import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {SharedService} from '../shared.service';
import {UserService} from '../users/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges, DoCheck {

  mockArray = [
    1,
    2,
    3
  ];

  userAuthenticated;
  user: any;

  constructor(public shared: SharedService,
              public userService: UserService) {
  }

  ngOnInit() {
    this.userService.userAuthenticated.subscribe(auth => {
      this.userAuthenticated = auth;
    });
  }

  ngOnChanges() {
  }

  ngDoCheck() {
    if (this.userAuthenticated) {
      this.userService.user.subscribe(user => {
        this.user = user;
      });
    }
  }


  changeThemeToDark() {
    this.shared.switchToDarkTheme();
  }

  changeThemeToLight() {
    this.shared.switchToLightTheme();
  }

}
