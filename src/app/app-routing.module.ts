import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TaskBoardComponent} from './task-board/task-board.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: DashboardComponent},
  {path: 'taskboard', component: TaskBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
