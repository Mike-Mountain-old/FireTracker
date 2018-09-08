import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from '../models/user.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loadingSrc = new BehaviorSubject<boolean>(false);
  loading = this.loadingSrc.asObservable();

  userAuthSrc = new BehaviorSubject<boolean>(false);
  userAuthenticated = this.userAuthSrc.asObservable();

  currentUser: any;
  userId: string;
  user: UserModel;

  constructor(private fireAuth: AngularFireAuth,
              private db: AngularFirestore,
              private router: Router) {
  }

  getUserId() {
    this.currentUser = this.fireAuth.auth.currentUser;
    this.userId = this.currentUser.uid;
  }

  loginUserWithEmailAndPassword(email, password) {
    this.loadingSrc.next(true);
    this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(callback => {
        this.userAuthSrc.next(true);
        this.loadingSrc.next(false);
        this.router.navigateByUrl('/dashboard');
      })
      .catch(error => {
        alert(error);
        this.loadingSrc.next(false);
        console.log('trying to log in');
      });
  }

  userLogout() {
    this.fireAuth.auth.signOut()
      .then(callback => {
        this.userAuthSrc.next(false);
        this.router.navigateByUrl('');
      });
  }

  registerUserWithEmailAndPassword(email, password, username) {
    this.loadingSrc.next(true);
    this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(callback => {
        this.createUserProfile(email, username);
        this.userAuthSrc.next(true);
        this.loadingSrc.next(false);
        this.router.navigateByUrl('/dashboard');
      })
      .catch(error => {
        alert(error);
        this.loadingSrc.next(false);
        console.log('trying to register a new user');
      });
  }

  createUserProfile(email, username) {
    this.getUserId();
    this.user = new UserModel();
    this.user.uid = this.userId;
    this.user.email = email;
    this.user.username = username;
    this.db.collection('users').doc(this.userId).set(this.currentUser)
      .catch(error => {
        alert(error);
        console.log('trying to connect a user auth to a db user');
      });
  }
}
