import { Component, Input } from '@angular/core';

import { NgRedux } from '@angular-redux/store'; 
import { CounterActions } from '../store/app.actions'; 
import { toDoAppState, task } from "../store/store"; 

@Component({
  selector: 'app-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrls: ['./task-todo.component.css']
})
export class TaskTodoComponent {
  @Input() task: task;
  @Input() categoryId: string;
  constructor(
    private ngRedux: NgRedux<toDoAppState>,
    private actions: CounterActions
  ) { }

  toggleCheckBox() {
    this.ngRedux.dispatch(this.actions.toggleCheckBox(this.categoryId, this.task));
  }

}
 