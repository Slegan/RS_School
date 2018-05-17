import { Component, OnInit } from '@angular/core';

import { NgRedux } from '@angular-redux/store'; 
import { CounterActions } from '../store/app.actions'; 
import { toDoAppState, task } from "../store/store"; 

@Component({
  selector: 'app-header-todo',
  templateUrl: './header-todo.component.html',
  styleUrls: ['./header-todo.component.css']
})
export class HeaderTodoComponent {
  categoryName: string = '';
  searchDone: boolean = false;
  logo = 'To-Do List'

  constructor(
    private ngRedux: NgRedux<toDoAppState>,
    private actions: CounterActions
  ) { }

  onSearch() {    
    this.ngRedux.dispatch(this.actions.onSearch(this.categoryName, this.searchDone));
    this.categoryName = "";
  }
}
