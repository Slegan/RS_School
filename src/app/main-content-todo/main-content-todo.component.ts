import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NgRedux, select } from '@angular-redux/store'; 
import { CounterActions } from '../store/app.actions'; 
import { toDoAppState, category } from "../store/store"; 

@Component({
  selector: 'app-main-content-todo',
  templateUrl: './main-content-todo.component.html',
  styleUrls: ['./main-content-todo.component.css']
})
export class MainContentTodoComponent {
  @select() categoryList$: Observable<category>;
  categoryListArray: category;
  selectedCategory: category;
  
  constructor(
    private ngRedux: NgRedux<toDoAppState>,
    private actions: CounterActions
  ) { }

  ngDoCheck() {
    this.categoryList$.subscribe(list => {
      this.categoryListArray = this.filterVisible(list);
      this.selectedCategory = this.filterSelected(this.categoryListArray);
    })
  }

  private filterVisible(arr) {
    let result = arr.filter(obj => obj.visible);
    return result;
  }

  private filterSelected(arr) {
    let result = arr.filter(obj => obj.active === true)[0];
    return result;
  }

  onSelect(category): void {
    this.ngRedux.dispatch(this.actions.selectCategory(category));
  }

}
