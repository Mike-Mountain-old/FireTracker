import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {MaterialModule} from './material/material.module';
import {FirebaseModule} from './firebase/firebase.module';
import {UsersModule} from './users/users.module';
import {NavigatonComponent} from './navigaton/navigaton.component';
import {LayoutModule} from '@angular/cdk/layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TaskBoardComponent} from './task-board/task-board.component';
import {environment} from '../environments/environment';
import { PubLandingComponent } from './pub-landing/pub-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatonComponent,
    DashboardComponent,
    TaskBoardComponent,
    PubLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    LayoutModule,
    FirebaseModule,
    UsersModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
