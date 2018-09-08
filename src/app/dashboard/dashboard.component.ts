import {Component, OnInit} from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mockArray = [
    1,
    2,
    3
  ];

  constructor(public shared: SharedService) {
  }

  ngOnInit() {
  }

  changeThemeToDark() {
    this.shared.switchToDarkTheme();
  }

  changeThemeToLight() {
    this.shared.switchToLightTheme();
  }

}
