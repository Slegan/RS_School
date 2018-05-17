import { Component } from '@angular/core';

import { NgRedux } from '@angular-redux/store'; 
import { CounterActions } from '../store/app.actions'; 
import { toDoAppState } from "../store/store";

@Component({
  selector: 'app-input-panel-todo',
  templateUrl: './input-panel-todo.component.html',
  styleUrls: ['./input-panel-todo.component.css']
})
export class InputPanelTodoComponent {
  newCategoryName:string;
  newTaskName: string;

  constructor(
    private ngRedux: NgRedux<toDoAppState>,
    private actions: CounterActions
  ) { }

  public createNewCategory() {
    this.ngRedux.dispatch(this.actions.createNewCategory(this.newCategoryName));
    this.newCategoryName ="";
  }

  public createNewTask() {
    this.ngRedux.dispatch(this.actions.addNewTask(this.newTaskName));
    this.newTaskName ="";
  }


}
