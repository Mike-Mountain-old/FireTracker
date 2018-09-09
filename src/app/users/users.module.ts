import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FirebaseModule} from '../firebase/firebase.module';
import {MaterialModule} from '../material/material.module';
import {LoginComponent} from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FirebaseModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UsersModule {
}
