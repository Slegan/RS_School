import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { select } from '@angular-redux/store'; 

@Component({
  selector: 'app-progress-bar-todo',
  templateUrl: './progress-bar-todo.component.html',
  styleUrls: ['./progress-bar-todo.component.css']
})
export class ProgressBarTodoComponent {
  @select() tasksDone$: Observable<number[]>;
  max: number;
  showWarning: boolean;
  current: number;
  dynamic: number;
  type: string;
 
  constructor() {
  }

  ngDoCheck() {
    this.tasksDone$.subscribe(list => {
      this.current = list[0];
      this.max = list[1];
    });
    
    this.dynamic = this.current/this.max * 100;

    if (this.dynamic < 25) {
      this.type = 'danger';
    } else if (this.dynamic < 50) {
      this.type = 'warning';
    } else if (this.dynamic < 75) {
      this.type = 'info';
    } else {
      this.type = 'success';
    }
  }

}
