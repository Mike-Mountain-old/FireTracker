import {Component, OnInit} from '@angular/core';
import {SharedService} from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  darkTheme: boolean;

  constructor(private shared: SharedService) {
  }

  ngOnInit() {
    this.shared.darkTheme.subscribe(theme => {
      this.darkTheme = theme;
    });
  }
}
