import {Component, OnChanges, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserService} from '../users/services/user.service';

@Component({
  selector: 'app-navigaton',
  templateUrl: './navigaton.component.html',
  styleUrls: ['./navigaton.component.css']
})
export class NavigatonComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  userAuthenticated: boolean;
  authenticatedUser: any;
  userObs: any;
  username: string;
  loading = false;

  constructor(private breakpointObserver: BreakpointObserver,
              public userService: UserService) {
  }

  ngOnInit() {
    this.userService.loading.subscribe(loading => {
      this.loading = loading;
    });
    this.userService.userAuthenticated.subscribe(value => {
      this.userAuthenticated = value;
    });
    this.userService.getUserObs.subscribe(user => {
      if (this.userAuthenticated) {
        this.userObs = user;
        this.userObs.subscribe(userObj => {
          this.authenticatedUser = userObj;
        });
      }
    });
  }

  logout() {
    this.userService.userLogout();
  }

}
