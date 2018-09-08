import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  darkThemeSource = new BehaviorSubject<boolean>(false);
  darkTheme = this.darkThemeSource.asObservable();

  lightThemeSource = new BehaviorSubject<boolean>(true);
  lightTheme = this.lightThemeSource.asObservable();


  constructor() {
  }

  switchToDarkTheme() {
    this.darkThemeSource.next(true);
    this.lightThemeSource.next(false);
  }

  switchToLightTheme() {
    this.darkThemeSource.next(false);
    this.lightThemeSource.next(true);
  }
}
