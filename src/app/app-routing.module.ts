import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TaskBoardComponent} from './task-board/task-board.component';
import {LoginComponent} from './users/components/login/login.component';
import {AuthGuard} from './auth-guard.service';
import {PubLandingComponent} from './pub-landing/pub-landing.component';
import {RegisterComponent} from './users/components/register/register.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/landing'},
  {path: '', pathMatch: 'full', redirectTo: '/dashboard', canActivate: [AuthGuard]},
  {path: 'landing', component: PubLandingComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'taskboard', component: TaskBoardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
