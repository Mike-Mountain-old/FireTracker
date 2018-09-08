import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {

  mockArray = [
    1,
    2,
    3,
    4
  ];

  constructor() { }

  ngOnInit() {
  }

}
