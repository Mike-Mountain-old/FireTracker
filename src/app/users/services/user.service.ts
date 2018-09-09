import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loadingSrc = new BehaviorSubject<boolean>(false);
  loading = this.loadingSrc.asObservable();

  userAuthSrc = new BehaviorSubject<boolean>(false);
  userAuthenticated = this.userAuthSrc.asObservable();

  getUserSrc = new BehaviorSubject<AngularFirestoreDocument<any>>(null);
  getUserObs = this.getUserSrc.asObservable();

  currentUser: any;
  userId: string;
  userModel: UserModel;
  singleUser: any;
  // user: Observable<any>;
  serviceUser: any;

  // singleUser = this.db.collection('users').doc(this.userId);
  // user = this.singleUser.valueChanges();


  constructor(private fireAuth: AngularFireAuth,
              private db: AngularFirestore,
              private router: Router) {
  }

  getUserId() {
    this.currentUser = this.fireAuth.auth.currentUser;
    this.userId = this.currentUser.uid;
  }

  getSingleUser() {
    this.getUserId();
    this.singleUser = this.db.collection('users').doc(this.userId).valueChanges();
    this.getUserSrc.next(this.singleUser);
    // this.loadingSrc.next(false);
    // this.user = this.singleUser.valueChanges();
    // this.user.subscribe(user => {
    //   this.serviceUser = user;
    //   this.loadingSrc.next(false);
    //   console.log(this.serviceUser);
    // });
  }

  loginUserWithEmailAndPassword(email, password) {
    this.loadingSrc.next(true);
    this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(callback => {
        this.userAuthSrc.next(true);
        this.getSingleUser();
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
        this.getSingleUser();
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
    this.userModel = {
      uid: this.userId,
      email: email,
      username: username
    };
    this.db.collection('users').doc(this.userId).set(this.userModel)
      .catch(error => {
        alert(error);
        console.log('trying to connect a user auth to a db user');
      });
  }
}
