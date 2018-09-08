import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  loading = false;

  constructor(public userServce: UserService) {
  }

  ngOnInit() {
    this.userServce.loading.subscribe(loading => {
      this.loading = loading;
    });
  }

  login() {
    this.userServce.loginUserWithEmailAndPassword(this.email, this.password);
  }

}
