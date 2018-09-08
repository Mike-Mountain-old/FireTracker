import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './users/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  userAuthenticated: boolean;

  constructor(private userService: UserService,
              private router: Router) {
  }

  canActivate() {
    this.userService.userAuthenticated.subscribe(authenticated => {
      this.userAuthenticated = authenticated;
    });

    if (this.userAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl('');
    }
  }

}
