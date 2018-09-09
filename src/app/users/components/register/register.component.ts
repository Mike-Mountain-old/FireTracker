import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  confirmPass: string;
  username: string;

  constructor(public userServce: UserService,
              public router: Router) {
  }

  ngOnInit() {
  }

  register() {
    if (this.password === this.confirmPass) {
      this.userServce.registerUserWithEmailAndPassword(this.email, this.password, this.username);
    }
  }

  route(routeTo) {
    this.router.navigateByUrl(routeTo);
  }

}
