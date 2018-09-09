import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  loading = false;

  constructor(public userServce: UserService,
              public router: Router) {
  }

  ngOnInit() {
    this.userServce.loading.subscribe(loading => {
      this.loading = loading;
    });
  }

  login() {
    this.userServce.loginUserWithEmailAndPassword(this.email, this.password);
  }

  route(routeTo) {
    this.router.navigateByUrl(routeTo);
  }

}
